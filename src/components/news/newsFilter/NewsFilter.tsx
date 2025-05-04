import { useState } from "react";
import { newsCategories, news } from "../news.data";
import { NewsCategoryButton } from "../newsCategoryButton/NewsCategoryButton";
import styles from "./NewsFilter.module.scss";
import { NewsItem } from "../newsItem/NewsItem";

export const NewsFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const onBtnClickHandler = (tag: string) => {
    setActiveCategory(() => tag);
  };

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((item) => item.category_tag === activeCategory);

  // const backend_news = async () => {
  //   const news = await fetch("/api/v1/news/all", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });

  //   const json = await news.json();

  //   console.log(json);
  //   return json;
  // };
  return (
    <>
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {newsCategories.map((e) => {
          if (e.category == activeCategory) {
            return (
              <NewsCategoryButton
                onClick={onBtnClickHandler}
                key={e.category}
                title={e.title}
                category={e.category}
                className={"active"}
              />
            );
          } else {
            return (
              <NewsCategoryButton
                onClick={onBtnClickHandler}
                key={e.category}
                title={e.title}
                category={e.category}
                // className={"brand-red-text"}
              />
            );
          }
        })}
      </div>
      <section
        className={`${styles.news_container} grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10`}
      >
        {filteredNews.map((e, idx) => {
          if (idx == 0) {
            return (
              <NewsItem
                key={e.id}
                title={e.title}
                label={e.label}
                category={e.category}
                timestamp={e.timestamp}
                text={e.text}
                author={e.author}
                author_avatar={e.author_avatar}
                thumb={e.thumb}
                layout={"vertical"}
              />
            );
          } else if (idx == 1) {
            return (
              <NewsItem
                key={e.id}
                title={e.title}
                label={e.label}
                category={e.category}
                timestamp={e.timestamp}
                text={e.text}
                author={e.author}
                author_avatar={e.author_avatar}
                thumb={e.thumb}
                layout={"vertical no-user"}
              />
            );
          } else {
            return (
              <NewsItem
                label=""
                key={e.id}
                title={e.title}
                category={e.category}
                timestamp={e.timestamp}
                text={e.text}
                author={e.author}
                author_avatar={e.author_avatar}
                thumb={e.thumb}
                layout={"horizontal"}
              />
            );
          }
        })}
      </section>
    </>
  );
};
