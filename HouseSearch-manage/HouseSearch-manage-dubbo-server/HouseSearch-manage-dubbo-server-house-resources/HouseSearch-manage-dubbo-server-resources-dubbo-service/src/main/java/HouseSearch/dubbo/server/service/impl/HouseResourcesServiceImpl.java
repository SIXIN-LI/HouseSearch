package HouseSearch.dubbo.server.service.impl;

import HouseSearch.dubbo.server.pojo.HouseResources;
import HouseSearch.dubbo.server.service.HouseResourcesService;
import HouseSearch.dubbo.server.vo.PageInfo;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.mysql.jdbc.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Dealing with houseResources in the spring framework
 *
 * data handling inside BaseServiceImpl
 * */
@Transactional
@Service
public class HouseResourcesServiceImpl extends BaseServiceImpl implements HouseResourcesService {

    /**
     * Validate house input
     *
     * @param houseResources
     * @return -1:输入的参数不符合要求，0:数据插入数据库失败，1:成功
     */
    @Override
    public int saveHouseResources(HouseResources houseResources) {

        // TODO: more validation can be added here
        if (StringUtils.isNullOrEmpty(houseResources.getTitle())) {
            return -1;
        }

        return super.save(houseResources);
    }

    /**
     * display latest records
     *
     * */
    @Override
    public PageInfo<HouseResources> queryHouseResourcesList(int page, int pageSize,
        HouseResources queryCondition) {
        QueryWrapper<Object> queryWrapper = new QueryWrapper<>(queryCondition);
        // order by updated time
        queryWrapper.orderByDesc("updated");

        IPage iPage = super.queryPageList(queryWrapper, page, pageSize);

        return new PageInfo<HouseResources>
            (Long.valueOf(iPage.getTotal()).intValue() , page, pageSize, iPage.getRecords());
    }
}
