import {
  faHome,
  faUsers,
  faBook,
  faChartBar,
  faBullseye,
  faDatabase,
  faNewspaper,
  faTasks,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { AsideItem } from "./AsideItem";

const asideLinks = [
  {
    title: "Главная",
    link: "/",
    icon: faHome,
    id: 1,
  },
  {
    title: "Контакты",
    link: "contacts",
    icon: faUsers,
    id: 2,
  },
  {
    title: "Справочник",
    link: "enums",
    icon: faBook,
    id: 3,
  },
  {
    title: "Отчеты",
    link: "reports",
    icon: faChartBar,
    id: 4,
  },
  {
    title: "Цели и KPI",
    link: "goals",
    icon: faBullseye,
    id: 5,
  },
  {
    title: "База знаний",
    link: "knowledges",
    icon: faDatabase,
    id: 6,
  },
  {
    title: "Новости",
    link: "news",
    icon: faNewspaper,
    id: 7,
  },
  {
    title: "Задачи",
    link: "tasks",
    icon: faTasks,
    id: 8,
  },
  {
    title: "Настройки",
    link: "setting",
    icon: faCog,
    id: 9,
  },
];

export const Aside = () => {
  return (
    <aside className="w-64 border-r border-gray-200 min-h-screen py-6 px-4">
      <nav>
        <ul className="space-y-2">
          {asideLinks.map((lnk) => (
            <AsideItem
              key={lnk.id}
              icon={lnk.icon}
              title={lnk.title}
              link={lnk.link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
