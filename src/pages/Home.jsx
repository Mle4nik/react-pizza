import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/PizzaBlock/Card';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationBlock from '../components/PaginationBlock';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);

  const category = useSelector(state => state.filter.categoryId);

  console.log(category);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://73f63710afb6cf88.mokky.dev/items?category=${
        category === 0 ? '*' : category
      }&sortBy=${sortType}&title=*${searchValue}&page=${currentPage + 1}&limit=4`,
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setItems(res);
      })
      .catch((er) => {
        console.error(er);
      })
      .finally(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [category, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} />
        <Sort sortType={sortType} setSortType={(type) => setSortType(type)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.items.map((pizza) => {
              return <Card key={pizza.id} {...pizza} />;
            })}
      </div>
      <PaginationBlock setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
