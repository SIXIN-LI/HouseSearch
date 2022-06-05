package HouseSearch.im.dao;

import HouseSearch.im.pojo.Message;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import java.util.Date;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

@Component
public class MessageDAOImpl implements MessageDAO{

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * Find message records *
     *
     * @param fromId
     * @param toId
     * @param page
     * @param rows
     * @return
     */
    @Override
    public List<Message> findListByFromAndTo(Long fromId, Long toId, Integer page, Integer rows) {
        // Sent from user a to user b
        Criteria criteriaFrom = new Criteria().andOperator(
          Criteria.where("from.id").is(fromId),
            Criteria.where("to.id").is(toId)
        );

        Criteria criteriaTo = new Criteria().andOperator(
            Criteria.where("to.id").is(toId),
            Criteria.where("from.id").is(fromId)
        );

        Criteria criteria = new Criteria().orOperator(criteriaFrom, criteriaTo);

        // Query condition and pagination
        PageRequest pageRequest = PageRequest.of(page-1, rows, Sort.by(Direction.ASC, "send_date"));
        Query query = new Query(criteria).with(pageRequest);
        return this.mongoTemplate.find(query, Message.class);
    }

    /**
     * Retrieve message by id *
     *
     * @param id
     * @return
     */
    @Override
    public Message findMessageById(String id) {
        return null;
    }

    /**
     * Update message status
     *
     * @param id
     * @param status * @return
     */
    @Override
    public UpdateResult updateMessageState(ObjectId id, Integer status) {
        return null;
    }

    /**
     * Add messages * * @param message * @return
     *
     * @param message
     */
    @Override
    public Message saveMessage(Message message) {
        message.setSendDate(new Date());
        message.setStatus(1);
        return this.mongoTemplate.save(message);
    }

    /**
     * * Delete message by id * @param id * @return
     *
     * @param id
     */
    @Override
    public DeleteResult deleteMessage(String id) {
        return null;
    }
}
