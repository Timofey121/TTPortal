package com.ttportal.newsportalservice.mapper;


import com.ttportal.newsportalservice.dto.RequestNews;
import com.ttportal.newsportalservice.dto.ResponseNews;
import com.ttportal.newsportalservice.entity.News;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface NewsMapper {
    ResponseNews NewsToNewsResponse(News news);

    News RequestNewsToNews(RequestNews requestNews);

    @Mapping(target = "id", ignore = true)
    void updateNewsFromRequestNews(RequestNews requestNews, @MappingTarget News news);
}
