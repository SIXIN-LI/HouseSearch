package HouseSearch.im.webSocket;

import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

/**
 * Does this intercept all URI ?
 * */
@Component
public class MessageHandshakeInterceptor implements HandshakeInterceptor {

    /**
     * Check if the passed in variable is user id
     * */
    @Override
    public boolean beforeHandshake(ServerHttpRequest request,
        ServerHttpResponse response, WebSocketHandler webSocketHandler,
        Map<String, Object> attributes) throws Exception {

        System.out.println("before handshake");
        String path = request.getURI().getPath();
        String[] variables = StringUtils.split(path, '/');
        if (variables.length != 2) return false;
        if (!StringUtils.isNumeric(variables[1])) return false;

        attributes.put("uid", Long.valueOf(variables[1]));
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest serverHttpRequest,
        ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Exception e) {

    }
}
