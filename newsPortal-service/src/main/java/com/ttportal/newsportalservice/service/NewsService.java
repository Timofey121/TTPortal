package com.ttportal.newsportalservice.service;

import com.ttportal.newsportalservice.dto.RequestNews;
import com.ttportal.newsportalservice.dto.ResponseNews;
import com.ttportal.newsportalservice.entity.CategoryNews;
import com.ttportal.newsportalservice.entity.News;
import com.ttportal.newsportalservice.mapper.NewsMapper;
import com.ttportal.newsportalservice.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.server.ResponseStatusException;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;
    private final NewsMapper newsMapper;

    public List<ResponseNews> findAllByLimit(int limit) {
        Pageable pg = PageRequest.of(0, limit, Sort.by("date").descending());
        return newsRepository.findAll(pg).getContent().stream()
                .map(newsMapper::NewsToNewsResponse)
                .collect(Collectors.toList());
    }

    public List<ResponseNews> findByCategoryAndCount(CategoryNews categoryNews, int limit) {
        Pageable pg = PageRequest.of(0, limit, Sort.by("date").descending());
        return newsRepository.findByCategoryNews(categoryNews, pg).stream()
                .map(newsMapper::NewsToNewsResponse)
                .collect(Collectors.toList());
    }

    public ResponseNews create(RequestNews requestNews) {
        return newsMapper.NewsToNewsResponse(newsRepository.save(newsMapper.RequestNewsToNews(requestNews)));
    }

    public ResponseNews update(Long id,
                               Map<String, Object> updatesField) {
        News news = newsRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "News not found"));

        updatesField.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(News.class, key);
            if (field != null) {
                field.setAccessible(true);
                ReflectionUtils.setField(field, news, value);
            }
        });

        return newsMapper.NewsToNewsResponse(newsRepository.save(news));
    }


}
