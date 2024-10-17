import React from 'react';

import styles from './SearchBlock.module.scss';
import { SearchContext } from '../../App';

const SearchBock = () => {
  const {searchValue, setSearchValue} = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.search}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
      </svg>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск пицц..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.clear}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path>
        </svg>
      )}
    </div>
  );
};

export default SearchBock;
