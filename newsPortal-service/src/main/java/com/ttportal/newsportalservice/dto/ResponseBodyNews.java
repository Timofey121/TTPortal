package com.ttportal.newsportalservice.dto;

import com.ttportal.newsportalservice.entity.CategoryNews;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBodyNews {
    Long id;

    String title;

    CategoryNews category;

    String category_tag;

    LocalDate date;

    String text;

    String author_avatar;

    String thumb;

    String creator;
}
