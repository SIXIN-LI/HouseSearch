package HouseSearch.dubbo.server.api;

import HouseSearch.dubbo.server.pojo.HouseResources;
import HouseSearch.dubbo.server.service.HouseResourcesService;
import HouseSearch.dubbo.server.vo.PageInfo;
import com.alibaba.dubbo.config.annotation.Service;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Expose the api via the dubbo framework
 *
 * Todo: If we do not use dubbo in the future, we can remove this and still have the logic handling
 * in the spring
 * */
@Service(version = "1.0.0")
public class ApiHouseResourcesServiceImpl implements ApiHouseResourcesService{

    @Autowired
    private HouseResourcesService houseResourcesService;

    /**
     * Add new houses resources to the databse
     *
     * @param houseResources
     * @return -1:输入的参数不符合要求，0:数据插入数据库失败，1:成功
     */
    @Override
    public int saveHouseResources(HouseResources houseResources) {
        return this.houseResourcesService.saveHouseResources(houseResources);
    }

    /**
     * @param page           - current page number
     * @param pageSize       - number of elements displayed on the page
     * @param queryCondition - query requirements
     */
    @Override
    public PageInfo<HouseResources> queryHouseResourcesList(int page, int pageSize,
        HouseResources queryCondition) {
        return this.houseResourcesService.queryHouseResourcesList(page, pageSize, queryCondition);
    }
}
