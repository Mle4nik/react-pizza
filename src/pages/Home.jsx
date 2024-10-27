import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/PizzaBlock/Card';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationBlock from '../components/PaginationBlock';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  const category = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://73f63710afb6cf88.mokky.dev/items?category=${
          category === 0 ? '*' : category
        }&sortBy=${sort}&title=*${searchValue}&page=${currentPage + 1}&limit=4`,
      )
      .then((res) => {
        setItems(res.data);
      })
      .finally(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [category, sort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} />
        <Sort sortType={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.items.map((pizza) => {
              return <Card key={pizza.id} {...pizza} />;
            })}
      </div>
      <PaginationBlock setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
