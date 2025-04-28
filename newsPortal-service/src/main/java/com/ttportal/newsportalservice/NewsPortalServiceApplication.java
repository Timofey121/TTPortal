package com.ttportal.newsportalservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class NewsPortalServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewsPortalServiceApplication.class, args);
    }

}
