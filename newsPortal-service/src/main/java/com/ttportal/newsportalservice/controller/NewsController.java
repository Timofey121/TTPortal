package com.ttportal.newsportalservice.controller;

import com.ttportal.newsportalservice.dto.RequestNews;
import com.ttportal.newsportalservice.dto.ResponseNews;
import com.ttportal.newsportalservice.entity.CategoryNews;
import com.ttportal.newsportalservice.entity.News;
import com.ttportal.newsportalservice.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsService newsService;

    @GetMapping
    public List<ResponseNews> getAllNewsByCategory(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "limit", defaultValue = "5", required = false) int limit
    ) {
        if (category == null || category.equalsIgnoreCase("Все")) {
            return newsService.findAllByLimit(limit);
        }

        CategoryNews categoryEnum = CategoryNews.fromDisplayName(category);
        return newsService.findByCategoryAndCount(categoryEnum, limit);
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseNews> createNews(@RequestBody RequestNews news) {
        return ResponseEntity.ok(newsService.create(news));
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<ResponseNews> updateNews(@PathVariable Long id, @RequestBody Map<String, Object> updatesField) {
        return ResponseEntity.ok(newsService.update(id, updatesField));
    }
}
