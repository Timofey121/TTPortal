import { useState } from "react";
import { newsCategories, news } from "../news.data";
import { NewsCategoryButton } from "../NewsCategoryButton";
import styles from "./NewsFilter.module.scss";
import { NewsItem } from "../newsItem/NewsItem";

export const NewsFilter = () => {
  const [activeCategory, setActiveCategory] = useState(
    newsCategories[0]?.category
  );

  const onBtnClickHandler = (tag: string) => {
    setActiveCategory(() => tag);
  };

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((item) => item.category_tag === activeCategory);

  return (
    <>
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {newsCategories.map((e) => (
          <NewsCategoryButton
            onClick={onBtnClickHandler}
            key={e.category}
            title={e.title}
            category={e.category}
          />
        ))}
      </div>
      <section
        className={`${styles.news_container} grid grid-cols-1 lg:grid-cols-3 gap-6`}
      >
        {filteredNews.map((e) => (
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
          />
        ))}
      </section>
    </>
  );
};
