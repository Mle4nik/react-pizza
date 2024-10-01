import React, { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return <li onClick={() => setActive(index)} key={index} className={active === index ? 'active' : ''}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
