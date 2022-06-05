package HouseSearch.dubbo.server.pojo;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public abstract class BasePojo implements Serializable { // dubbo requires serializable objects
    private Date created;
    private Date updated;
}
