package HouseSearch.dubbo.server.api;

import HouseSearch.dubbo.server.pojo.HouseResources;
import HouseSearch.dubbo.server.vo.PageInfo;

/**
 * Interface in the dubbo framework to connect with database
 * */
public interface ApiHouseResourcesService {

    /**
     * Add new houses resources to the databse
     *
    * @param houseResources
    *
    * @return -1:输入的参数不符合要求，0:数据插入数据库失败，1:成功
     */
    int saveHouseResources(HouseResources houseResources);

    /**
     * @param page - current page number
     * @param pageSize - number of elements displayed on the page
     * @param queryCondition - query requirements
     * */
    PageInfo<HouseResources> queryHouseResourcesList(int page, int pageSize,
        HouseResources queryCondition);
}