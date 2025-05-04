package com.ttportal.newsportalservice.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CategoryNews {
    ВСЕ("Все"),
    СОБЫТИЯ("События"),
    ОНОВЛЕНИЯ("Обновления"),
    ДОСТИЖЕНИЯ("Достижения"),
    СОТРУДНИКИ("Сотрудники");

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


