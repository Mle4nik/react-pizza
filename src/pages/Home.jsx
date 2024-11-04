import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/PizzaBlock/Card';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationBlock from '../components/PaginationBlock';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTotalPages } from '../redux/slices/filterSilce'

const Home = () => {

  const dispatch = useDispatch()

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const {categoryId, sort, currentPage, searchValue } = useSelector((state) => state.filter);  

  React.useEffect(() => {
    axios
      .get(
        `https://73f63710afb6cf88.mokky.dev/items?category=${
          categoryId === 0 ? '*' : categoryId
        }&sortBy=${sort}&title=*${searchValue}&page=${currentPage + 1}&limit=4`,
      )
      .then((res) => {
        setItems(res.data);
        dispatch(setTotalPages(res.data['meta']['total_pages']));
        
      })
      .finally(() => setIsLoading(false));
    setIsLoading(true);

    // window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} />
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
      <PaginationBlock />
    </div>
  );
};

export default Home;
