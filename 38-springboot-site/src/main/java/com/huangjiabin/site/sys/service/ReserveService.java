package com.huangjiabin.site.sys.service;

import com.huangjiabin.site.sys.model.PageInfo;
import com.huangjiabin.site.sys.model.Reserve;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Map;

/**
 * <p>
 * 预约表 服务类
 * </p>
 *
 * @author huangjiabin
 * @since 2022-03-03
 */
public interface ReserveService extends IService<Reserve> {
    Map getPlaceReserve(Long placeId);

    PageInfo<Reserve> getAllReserveForPage(Integer pageNum, Integer pageSize);
}
