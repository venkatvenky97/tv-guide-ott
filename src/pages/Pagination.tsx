import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  items: any[];
  itemsPerPage: number;
  basePath: string;
}

const DynamicPagination: React.FC<Props> = function ({
  items,
  itemsPerPage,
  basePath,
}) {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<number>(() => {
    const urlSearchParams = new URLSearchParams();
    const pageParam = urlSearchParams.get("page");
    return Number(pageParam) || 1;
  });

  //   const totalPages = Math.ceil(items.length / itemsPerPage);
  const totalPages = 10;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("page", page.toString());
    navigate(`${basePath}?${urlSearchParams.toString()}`);
  };

  const renderPageItems = () => {
    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === activePage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <>
      {currentItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <Pagination className="ml-5">
        <Pagination.Prev
          disabled={activePage === 1}
          onClick={() => handlePageChange(activePage - 1)}
        />
        {renderPageItems()}
        <Pagination.Next
          disabled={activePage === totalPages}
          onClick={() => handlePageChange(activePage + 1)}
        />
      </Pagination>
    </>
  );
};

export default DynamicPagination;
