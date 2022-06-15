package HouseSearch.im.webSocket;

import HouseSearch.im.dao.MessageDAO;
import HouseSearch.im.pojo.Message;
import HouseSearch.im.pojo.UserData;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.Map;
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class MessageHandler extends TextWebSocketHandler {

    @Autowired
    private MessageDAO messageDAO;

    private static final Map<Long, WebSocketSession> ONLINE_USERS = new HashMap<>();

    /**
     * Store each user into ONLINE_USERS after they connect here.
     * */
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        Long uid = (Long) session.getAttributes().get("uid");
        ONLINE_USERS.put(uid, session);
        System.out.println("connection established for user " + uid);
    }

    /**
     * Store the message in the databse and then if the other end user is online, send the message out
     * */
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage textMessage)
        throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Long fromId = (Long) session.getAttributes().get("uid");
        JsonNode jsonNode = mapper.readTree(textMessage.getPayload());
        Long toId = jsonNode.get("toId").asLong();
        String msg = jsonNode.get("msg").asText();

        Message message = Message.builder()
            .from(UserData.USER_MAP.get(fromId))
            .to(UserData.USER_MAP.get(toId))
            .msg(msg)
            .build();

        message = this.messageDAO.saveMessage(message);

        // check if toUser is online
        WebSocketSession toUserSession = ONLINE_USERS.get(toId);
        if (toUserSession != null && toUserSession.isOpen()) {
            // Todo: need to confirm what the frontend needs
            toUserSession.sendMessage(new TextMessage(mapper.writeValueAsString(message)));
            // mark this message as read
            this.messageDAO.updateMessageState(message.getId(), 2);
        }
    }
}
