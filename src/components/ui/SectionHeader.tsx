import { Icon } from "../icons/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  button?: string;
}
export const SectionHeader = ({
  title,
  subtitle,
  button,
}: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-dark-gray">
        Корпоративные новости
      </h2>
      <button
        id="addNewsBtn"
        className="brand-red-bg text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 flex items-center"
      >
        <Icon icon={faPlus} />
        <span>Добавить новость</span>
      </button>
    </div>
  );
};
