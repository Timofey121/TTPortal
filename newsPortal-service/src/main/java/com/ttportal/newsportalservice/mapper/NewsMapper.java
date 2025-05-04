package com.ttportal.newsportalservice.mapper;


import com.ttportal.newsportalservice.dto.RequestNews;
import com.ttportal.newsportalservice.dto.ResponseBodyNews;
import com.ttportal.newsportalservice.entity.News;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface NewsMapper {
    ResponseBodyNews NewsToNewsResponse(News news);

    News RequestNewsToNews(RequestNews requestNews);

    @Mapping(target = "id", ignore = true)
    void updateNewsFromRequestNews(RequestNews requestNews, @MappingTarget News news);
}
