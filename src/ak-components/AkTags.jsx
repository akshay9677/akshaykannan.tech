const Tags = ({ name }) => {
  return (
    <span className="bg-blue-100 text-blue-800 dark:text-white dark:bg-gray-800 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
      {name}
    </span>
  );
};

export default Tags;
