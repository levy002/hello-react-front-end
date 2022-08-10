import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  const handleClick = () => {
    dispatch(getGreeting());
  };
  

  return (
    <div className="box">
      <p className="text">My greeting: {randomGreeting.message}</p>
      <button className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
    </div>
  );
};

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;