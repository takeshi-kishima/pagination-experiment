import { useEffect, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "./PaginateTest.css";

// Example items, to simulate fetching from another resources.
const numItems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const PaginateTest: React.FC<{ itemsPerPage: number }> = (prop) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([] as number[]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + prop.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(numItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(numItems.length / prop.itemsPerPage));
  }, [itemOffset, prop.itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * prop.itemsPerPage) % numItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="waiwai">
      <div>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={(props: ReactPaginateProps) =>
          console.log(props)
        }
      />
    </div>
  );
};

export default PaginateTest;
