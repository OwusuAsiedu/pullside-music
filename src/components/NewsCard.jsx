const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{news.date}</p>
      <p className="text-sm">{news.summary}</p>
    </div>
  );
};

export default NewsCard;