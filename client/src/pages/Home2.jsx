import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import { getCountry } from '../redux/countrySlice';

const Home2 = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter);
  const countryList = useSelector(state => state.country);
  
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  console.log(countryList);

  return (
    <div>
      {countryList.country.map((co, i) => (
        co.name.common === "Turkey" ? (
          <div key={i} className='mt-1 border-b hover:bg-gray-300 cursor-pointer py-2'>{co.name.common}</div>
        ) : null
      ))}
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Home2;
