// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
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
      const newData = cars.find((car) => car.car_model === carId.id);
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
              <RiArrowLeftSFill color="danger" style={{ fontSize: 50 }} />
            </button>
          </Link>
        </div>
        <div className={style.show_content}>
          <div className={style.show_header}>
            <h2>{displayCar.carModel}</h2>
            <p>-$200 deposit upon any Rental Purchase!</p>
          </div>
          <div className={style.show_detail}>
            <div className={style.car_details}>
              <p className={style.details}>
                {displayCar.carDescription}
              </p>
            </div>
            <div className={style.car_detail}>
              <p className={style.details}>Rent daily cost</p>
              <p className={style.details}>
                $
                {displayCar.rentPrice}
              </p>
            </div>
            <div className={style.car_details}>
              <p className={style.details}>Car type</p>
              <p className={style.details}>
                {displayCar.carType}
              </p>
            </div>
            <div className={style.car_details}>
              <p className={style.details}>Transmission</p>
              <p className={style.details}>
                {displayCar.carTransmission}
              </p>
            </div>
          </div>
          <div className={style.more_cars}>
            <Link
              to={{
                pathname: '/home',
              }}
            >
              <span>Discover More Cars</span>
              <RiArrowRightSFill color="success" style={{ fontSize: 40 }} />
            </Link>
          </div>
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
