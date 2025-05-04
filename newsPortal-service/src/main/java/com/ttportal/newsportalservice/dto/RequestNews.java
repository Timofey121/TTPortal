package com.ttportal.newsportalservice.dto;

import com.ttportal.newsportalservice.entity.CategoryNews;
import jakarta.validation.constraints.NotBlank;
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
    String title;

    @NotNull
    CategoryNews category;

    @NotNull
    String category_tag;

    @NotNull
    LocalDate date;

    @NotNull
    String text;

    @NotNull
    String author_avatar;

    @NotNull
    String thumb;

    @NotNull
    String creator;
}
