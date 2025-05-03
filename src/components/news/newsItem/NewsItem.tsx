interface NewsItemProps {
  title: string;
  label: string;
  category: string;
  timestamp: string;
  text: string;
  author: string;
  author_avatar: string;
  thumb: string;
}
export const NewsItem = ({
  title,
  label,
  category,
  timestamp,
  text,
  author,
  author_avatar,
  thumb,
}: NewsItemProps) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const month = months[date.getMonth()];
    return `${day} ${month} ${year} г.`;
  };
  return (
    <div className="lg:col-span-2 border border-gray-200 rounded-lg overflow-hidden news-card transition duration-200">
      <div className="relative h-48 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt="Ежегодная конференция по логистике 2023"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <span className="bg-white text-xs font-medium px-2 py-1 rounded">
            {label}
          </span>
          <h3 className="text-white font-bold mt-2 text-lg">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{formatTimestamp(timestamp)}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <div className="text-gray-700 mb-4">
          <p>{text}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Author"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{author}</span>
          </div>
          <div className="flex space-x-4">
            <button
              // onClick="openEditNewsModal(1)"
              className="text-sm text-gray-500 hover-brand-red-text"
            >
              Редактировать
            </button>
            <button
              // onClick="deleteNews(1)"
              className="text-sm text-gray-500 hover-brand-red-text"
            >
              Удалить
            </button>
            <a href="#" className="text-sm brand-red hover:underline">
              Читать далее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
