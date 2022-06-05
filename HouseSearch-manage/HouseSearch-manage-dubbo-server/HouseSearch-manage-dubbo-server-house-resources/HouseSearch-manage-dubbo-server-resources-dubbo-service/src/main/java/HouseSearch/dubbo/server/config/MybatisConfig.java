package HouseSearch.dubbo.server.config;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@MapperScan("HouseSearch.dubbo.server.mapper")
@Configuration
public class MybatisConfig {

    /**
     * Pagination Plugin
     * */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
}