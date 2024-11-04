import React from 'react';
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSilce'


const Categories = ({ categoryId }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return <li onClick={() => dispatch(setCategoryId(index))} key={index} className={categoryId === index ? 'active' : ''}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
