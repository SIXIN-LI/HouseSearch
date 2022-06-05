package HouseSearch.dubbo.server.vo;

import java.util.Collections;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PageInfo<T> implements java.io.Serializable{

    private static final long serialVersionUID = -5182965087042498717L;
    /**
    * 总条数 */
        private Integer total;
    /**
    * 当前页 */
        private Integer pageNum;
    /**
    * 一页显示的大小 */
        private Integer pageSize;
    /**
    * 数据列表 */
    private List<T> records = Collections.emptyList();
}