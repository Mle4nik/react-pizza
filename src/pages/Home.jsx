import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/PizzaBlock/Card';
import Skeleton from '../components/PizzaBlock/Skeleton';


const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://73f63710afb6cf88.mokky.dev/items')
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
    
      window.scrollTo(0, 0)
  }, []);

  return (
    <div className='container'>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => {
              return <Card key={pizza.id} {...pizza} />;
            })}
      </div>
    </div>
  );
};

export default Home;
