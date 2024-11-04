import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './PaginationBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSilce'


const PaginationBlock = () => {

  const totalPages = useSelector((state) => state.filter.totalPages);
  const dispatch = useDispatch();  

  return (
    <div className={styles.root}>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected))}
        pageRangeDisplayed={4}
        pageCount={totalPages}
        // forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationBlock;
