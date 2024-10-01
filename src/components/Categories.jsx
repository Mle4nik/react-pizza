import React from 'react';

const Categories = ({ value, setValue }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return <li onClick={() => setValue(index)} key={index} className={value === index ? 'active' : ''}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
