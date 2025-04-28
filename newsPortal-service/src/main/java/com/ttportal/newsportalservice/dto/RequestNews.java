package com.ttportal.newsportalservice.dto;

import com.ttportal.newsportalservice.entity.CategoryNews;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestNews {

    @NotNull
    String creator;

    @NotNull
    String title;

    @NotNull
    String description;

    @NotNull
    CategoryNews categoryNews;

    @NotNull
    LocalDate date;

    @NotNull
    String imageUrl;
}
