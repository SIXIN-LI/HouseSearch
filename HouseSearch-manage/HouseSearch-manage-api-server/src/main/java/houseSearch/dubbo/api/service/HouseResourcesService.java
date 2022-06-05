package houseSearch.dubbo.api.service;

import HouseSearch.dubbo.server.api.ApiHouseResourcesService;
import HouseSearch.dubbo.server.pojo.HouseResources;
import HouseSearch.dubbo.server.vo.PageInfo;
import HouseSearch.dubbo.server.vo.Pagination;
import HouseSearch.dubbo.server.vo.TableResult;
import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.dubbo.config.spring.context.annotation.DubboComponentScan;
import org.springframework.stereotype.Service;

@DubboComponentScan(basePackages ="houseSearch.dubbo.api.service")
@Service
public class HouseResourcesService {

    @Reference(version = "1.0.0")
    private ApiHouseResourcesService apiHouseResourcesService;

    public boolean save(HouseResources houseResources){
        System.out.println("here1");
        int result = this.apiHouseResourcesService.saveHouseResources(houseResources);
        return result == 1;
}

    /**
     * Convert PageInfo data to TableResult data
     *
     *
     * */
    public TableResult queryList(HouseResources houseResources, Integer currentPage, Integer pageSize) {
        PageInfo<HouseResources> pageInfo = this.apiHouseResourcesService
            .queryHouseResourcesList(currentPage, pageSize, houseResources);

        return new TableResult(pageInfo.getRecords(), new Pagination(currentPage, pageSize, pageInfo.getTotal()));
    }
}