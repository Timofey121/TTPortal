import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./icons/Icon";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}
export const SectionHeader = ({
  title,
  subtitle,
  buttonText,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={`flex justify-between items-center mb-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold text-dark-gray">{title}</h2>
        <span>{subtitle}</span>
      </div>
      <button
        id="addNewsBtn"
        className="brand-red-bg text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 flex items-center gap-2 cursor-pointer"
      >
        <Icon icon={faPlus} />
        <span>{buttonText}</span>
      </button>
    </div>
  );
};
