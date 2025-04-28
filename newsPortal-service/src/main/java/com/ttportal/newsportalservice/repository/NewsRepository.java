package com.ttportal.newsportalservice.repository;

import com.ttportal.newsportalservice.entity.CategoryNews;
import com.ttportal.newsportalservice.entity.News;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    List<News> findByCategoryNews(CategoryNews categoryNews, Pageable pageable);

}
