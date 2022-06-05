package HouseSearch.im.pojo;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "message") // specify table's name
@Builder
public class Message {

    @Id
    private ObjectId id;

    private String msg;

    /**
     * Message status，1-unread，2-read
     * When we need to search based on status, we need index to improve
     */
    @Indexed
    private Integer status;

    @Field("send_date")
    @Indexed
    private Date sendDate;

    @Field("read_date")
    private Date readDate;

    @Indexed
    private User from;

    @Indexed
    private User to;
}
