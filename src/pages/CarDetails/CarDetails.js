// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { RiArrowRightSFill } from 'react-icons/ri';
// import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { getCarsFromAPI } from '../../redux/reducers/cars';
import style from './Detail.module.scss';

const CarDetails = () => {
  // const [displayCar, setDisplayCar] = useState({});
  // const carId = useParams();
  // const fetchCar = async () => {
  //   const res = await fetch(`http://localhost:3001/v1/cars/${carId}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   });
  //   const data = await res.json();
  //   setDisplayCar(data);
  // };
  // useEffect(() => {
  //   fetchCar();
  // }, []);

  // ----------------------

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
      const newData = cars.find((car) => car.car_model === carId.carModel);
      setDisplayCar(newData);
    }
  });

  if (displayCar) {
    return (
      <section className={style.show_container}>
        <div className={style.show_img}>
          <div className={style.img_div}>
            <img alt="Car" src={displayCar.carImg} />
          </div>
        </div>

        <div className={style.show_content}>
          <div className={style.show_header}>
            <h2>{displayCar.carModel}</h2>
            <p>-$200 deposit upon any Rental Purchase!</p>
          </div>

          <div className={style.show_details}>
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
            <div className={style.car_detail}>
              <p className={style.details}>Transmission</p>
              <p className={style.details}>
                {displayCar.carTransmission}
              </p>
            </div>
          </div>
          <div className={style.more_cars}>
            <NavLink
              to={{
                pathname: '/home',
              }}
              className={style.d_flex}
            >
              <span style={{ fontSize: 20 }}>DISCOVER MORE CARS</span>
              <RiArrowRightSFill color="success" style={{ fontSize: 40, padding: 0 }} />
            </NavLink>
          </div>
          <NavLink
            to={{
              pathname: `/reserve/${displayCar.id}`,
            }}
            data={displayCar}
            className={style.btn_container}
          >
            <button type="button" className={style.btn}>
              Reserve
            </button>
          </NavLink>
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
