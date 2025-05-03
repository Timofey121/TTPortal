interface NewsCategoryButtonProps {
  title: string;
  category: string;
  onClick: (tag: string) => void;
}
export const NewsCategoryButton = ({
  title,
  category,
  onClick,
}: NewsCategoryButtonProps) => {
  return (
    <button
      className="cursor-pointer category-tab pb-2 px-1 text-gray-500 hover-brand-red-text"
      onClick={() => onClick(category)}
      data-category={category}
    >
      {title}
    </button>
  );
};
