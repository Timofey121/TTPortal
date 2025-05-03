import { SectionHeader } from "../../ui/SectionHeader";
import { NewsFilter } from "./newsFilter/NewsFilter";

export const News = () => {
  return (
    <section>
      <SectionHeader
        title="Корпоративные новости"
        buttonText="Добавить новость"
      />
      <NewsFilter />
    </section>
  );
};
