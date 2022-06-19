// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarsFromAPI } from '../../redux/reducers/cars';
// import { useParams, NavLink } from 'react-router-dom';
import style from './Detail.module.css';

const CarDetails = () => {
  const cars = useSelector((state) => state.cars);
  const carId = useParams();
  const dispatch = useDispatch();
  const [displayCar, setDisplayCar] = useState(null);
  const [getCars, setGetCars] = useState(null);

  useEffect(() => {
    if (!getCars && cars.length === 0) {
      setGetCars(true);
      dispatch(getCarsFromAPI());
    }

    if (cars && carId) {
      const newData = cars.find((car) => car.model_type === carId.id);
      setDisplayCar(newData);
    }
  });

  return (
    <section className={style.car}>
      <h1>Loading...</h1>
    </section>
  );
};

export default CarDetails;
