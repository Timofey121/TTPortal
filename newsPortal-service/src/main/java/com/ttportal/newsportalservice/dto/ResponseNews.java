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
public class ResponseNews {
    String creator;

    String title;

    String description;

    CategoryNews categoryNews;

    LocalDate date;

    String imageUrl;
}
