import { SectionHeader } from "../../ui/SectionHeader";
import { FutureEvents } from "./futureEvents/FutureEvents";
import { NewsFilter } from "./newsFilter/NewsFilter";

export const News = () => {
  return (
    <section>
      <SectionHeader
        title="Корпоративные новости"
        buttonText="Добавить новость"
      />
      <NewsFilter />
      <FutureEvents />
    </section>
  );
};
