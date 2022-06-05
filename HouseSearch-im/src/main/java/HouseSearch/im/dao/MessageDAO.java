package HouseSearch.im.dao;

import HouseSearch.im.pojo.Message;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import java.util.List;
import org.bson.types.ObjectId;

public interface MessageDAO {

    /**
     * Find message records *
     * @param fromId
     * @param toId
     * @param page
     * @param rows
     * @return
     */
    List<Message> findListByFromAndTo(Long fromId, Long toId, Integer page, Integer
        rows);

    /**
     * Retrieve message by id *
     * @param id
     * @return
     */
    Message findMessageById(String id);

    /**
     * Update message status
     *
     * @param id
     * @param status * @return
     */
    UpdateResult updateMessageState(ObjectId id, Integer status);

    /**
     * Add messages
     * *
     *      * @param message
     *      * @return
     *      */
    Message saveMessage(Message message);

     /**
      * * Delete message by id
      * * @param id
      * * @return
      * */
    DeleteResult deleteMessage(String id);

}
