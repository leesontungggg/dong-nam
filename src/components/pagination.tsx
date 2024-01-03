import { useState } from "react";

const Pagination = (props: any) => {
  const { className = "", pages = 4, page = 0 } = props;
  const [currentPage, setCurrentPage] = useState(page);

  const handleClickPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleRenderPagination = () => {
    let content = [];
    for (let i = 0; i < pages; i++) {
      const item = (
        <button
          className={`join-item btn ${currentPage === i && "btn-active"}`}
          onClick={() => handleClickPage(i)}
        >
          {i + 1}
        </button>
      );
      content.push(item);
    }
    return content;
  };

  return <div className={`${className} join`}>{handleRenderPagination()}</div>;
};

export default Pagination;
