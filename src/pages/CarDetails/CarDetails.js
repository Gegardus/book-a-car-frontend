// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { getCarsFromAPI } from '../../redux/reducers/cars';
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

  if (displayCar) {
    return (
      <section className={style.show_container}>
        <div className={style.show_img}>
          <div className={style.img_div}>
            <img alt="house" src={displayCar.carImg} />
          </div>
          <Link
            to={{
              pathname: '/home',
            }}
          >
            <button type="button" className={style.home}>
              left
              <RiArrowLeftSFill color="danger" sx={{ fontSize: 50 }} />
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className={style.car}>
      <h1>Loading...</h1>
    </div>
  );
};

export default CarDetails;
