package houseSearch.dubbo.api.controller;

import HouseSearch.dubbo.server.pojo.HouseResources;
import HouseSearch.dubbo.server.vo.TableResult;
import houseSearch.dubbo.api.service.HouseResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("house/resources")
@RestController
public class HouseResourcesController {

    @Autowired
    private HouseResourcesService houseResourcesService;

    /**
     * 新增房源
     *
     * @param houseResources json数据
     * @return
     */
    @PostMapping
    @ResponseBody
    public ResponseEntity<Void> save(@RequestBody HouseResources houseResources){
        try {
            boolean bool = this.houseResourcesService.save(houseResources);
            if(bool){
                return ResponseEntity.status(HttpStatus.CREATED).build();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    /**
     * List house resources
     *
     * @param houseResources * @param currentPage
     * @param pageSize
     * @return TableResult which is required by ant pro design
     */
    @GetMapping
    @ResponseBody
    public ResponseEntity<TableResult> list(HouseResources houseResources,
        @RequestParam(name = "currentPage", defaultValue = "1") Integer currentPage,
        @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize) {

        return
                ResponseEntity.ok(this.houseResourcesService.queryList(houseResources, currentPage,
                pageSize));
                }
}


