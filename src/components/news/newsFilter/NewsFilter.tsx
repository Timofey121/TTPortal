import { useEffect, useState } from "react";
import { NewsCategoryButton } from "../newsCategoryButton/NewsCategoryButton";
import styles from "./NewsFilter.module.scss";
import { NewsItem } from "../newsItem/NewsItem";
import { INews, INewsCategory } from "../News";

interface NewsFilterProps {
  news: INews[];
  newsCategories: INewsCategory[];
  onEditNews: (mode: "add" | "edit", currentNews?: INews) => void;
  onDelete: (news: INews) => void;
}

export const NewsFilter = ({
  news,
  newsCategories,
  onEditNews,
  onDelete,
}: NewsFilterProps) => {
  const [filteredNews, setFilteredNews] = useState(news);
  const [activeCategory, setActiveCategory] = useState("all");

  const onBtnClickHandler = (tag: string) => {
    setActiveCategory(tag);
  };

  useEffect(() => {
    if (activeCategory !== "all") {
      setFilteredNews(
        news.filter((item) => item.category_tag === activeCategory)
      );
    } else {
      setFilteredNews(news);
    }
  }, [activeCategory, news]);

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
                categoryTag={e.category_tag}
                onNewsEdit={() => onEditNews("edit", e)}
                onDeleteNews={() => onDelete(e)}
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
                categoryTag={e.category_tag}
                onNewsEdit={() => onEditNews("edit", e)}
                onDeleteNews={() => onDelete(e)}
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
                categoryTag={e.category_tag}
                onNewsEdit={() => onEditNews("edit", e)}
                onDeleteNews={() => onDelete(e)}
              />
            );
          }
        })}
      </section>
    </>
  );
};
