package com.ttportal.newsportalservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String creator;

    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    private CategoryNews categoryNews;

    private LocalDate date;

    // просто путь или URL до картинки
    private String imageUrl;
}
