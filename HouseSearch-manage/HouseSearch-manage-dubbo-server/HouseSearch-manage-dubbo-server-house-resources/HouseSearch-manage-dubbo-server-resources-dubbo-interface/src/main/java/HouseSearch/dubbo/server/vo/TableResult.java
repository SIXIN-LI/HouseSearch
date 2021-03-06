package HouseSearch.dubbo.server.vo;

import lombok.*;
import java.util.List;

@Data
@AllArgsConstructor
public class TableResult<T> {
    private List<T> list;
    private Pagination pagination;
}