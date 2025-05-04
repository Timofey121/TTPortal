package com.ttportal.newsportalservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseNews {
    Boolean success;

    List<ResponseBodyNews> responseBodyNews;
}
