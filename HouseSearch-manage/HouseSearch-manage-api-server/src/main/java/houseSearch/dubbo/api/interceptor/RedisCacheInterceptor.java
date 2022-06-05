package houseSearch.dubbo.api.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class RedisCacheInterceptor implements HandlerInterceptor {

    private static ObjectMapper mapper = new ObjectMapper();

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
        Object handler) throws Exception {

        // If not get method, let it go
        if (!StringUtils.equalsIgnoreCase(request.getMethod(), "get")) {

            return true;
        }

        String redisKey = createRedisKey(request);
        String data = this.redisTemplate.opsForValue().get(redisKey);
        if (StringUtils.isEmpty(data)) {
            // 缓存未命中
            return true;
        }

        // 如果命中的话，将数据进行响应
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        response.getWriter().write(data);

        return false;
    }

    /**
     * Based on requests, create redisKey(which is encrypted by md5)
     * */
    public static String createRedisKey(HttpServletRequest request) throws
        Exception {
        String paramStr = request.getRequestURI();
        Map<String, String[]> parameterMap = request.getParameterMap();
        if (parameterMap.isEmpty()) {

                paramStr += IOUtils.toString(request.getInputStream(), "UTF-8");
        } else{
            // Serialize json to object?
            paramStr += mapper.writeValueAsString(request.getParameterMap());
        }

        String redisKey = "WEB_DATA_" + DigestUtils.md5Hex(paramStr);
        return redisKey;
    }
}

