package com.ttportal.newsportalservice.controller;

import com.ttportal.newsportalservice.dto.RequestNews;
import com.ttportal.newsportalservice.dto.ResponseBodyNews;
import com.ttportal.newsportalservice.dto.ResponseNews;
import com.ttportal.newsportalservice.entity.CategoryNews;
import com.ttportal.newsportalservice.service.NewsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsService newsService;

    @GetMapping
    public ResponseNews getAllNewsByCategory(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "limit", defaultValue = "5", required = false) int limit
    ) {
        ResponseNews responseNews = new ResponseNews();
        responseNews.setSuccess(Boolean.TRUE);

        if (category == null || category.equalsIgnoreCase("Все")) {
            responseNews.setResponseBodyNews(newsService.findAllByLimit(limit));
        } else {
            CategoryNews categoryEnum = CategoryNews.fromDisplayName(category);
            responseNews.setResponseBodyNews(newsService.findByCategoryAndCount(categoryEnum, limit));
        }

        return responseNews;
    }

    @PostMapping("/create")
    public ResponseNews createNews(
            @RequestBody @Valid RequestNews news,
            BindingResult br
    ) {
        ResponseNews responseNews = new ResponseNews();

        if (br.hasErrors()) {
            responseNews.setSuccess(false);
            responseNews.setResponseBodyNews(Collections.emptyList());
            return responseNews;
        }

        try {
            ResponseBodyNews createdNews = newsService.create(news);
            responseNews.setSuccess(true);
            responseNews.setResponseBodyNews(List.of(createdNews));
        } catch (Exception ex) {
            responseNews.setSuccess(false);
            responseNews.setResponseBodyNews(Collections.emptyList());
        }
        return responseNews;
    }

    @PatchMapping("/update/{id}")
    public ResponseNews updateNews(@PathVariable Long id, @RequestBody Map<String, Object> updatesField) {
        ResponseNews responseNews = new ResponseNews();
        try {
            ResponseBodyNews createdNews = newsService.update(id, updatesField);
            responseNews.setSuccess(true);
            responseNews.setResponseBodyNews(List.of(createdNews));
        } catch (Exception ex) {
            responseNews.setSuccess(false);
            responseNews.setResponseBodyNews(Collections.emptyList());
        }
        return responseNews;
    }
}
