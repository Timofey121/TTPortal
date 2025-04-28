package com.ttportal.newsportalservice.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Getter
@RequiredArgsConstructor
public enum CategoryNews {
    ПОЛИТИКА("Политика"),
    СПОРТ("Спорт"),
    ЭКОНОМИКА("Экономика"),
    ВСЕ("Все");

    private final String displayName;

    @JsonCreator
    public static CategoryNews fromDisplayName(String displayName) {
        for (CategoryNews category : values()) {
            if (category.displayName.equalsIgnoreCase(displayName)) {
                return category;
            }
        }
        throw new IllegalArgumentException("Unknown category: " + displayName);
    }

    @JsonValue
    public String getDisplayName() {
        return displayName;
    }
}


