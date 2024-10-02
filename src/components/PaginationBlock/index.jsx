import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './PaginationBlock.module.scss';

const PaginationBlock = ({ total_pages, setCurrentPage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => setCurrentPage(event.selected)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginationBlock;
