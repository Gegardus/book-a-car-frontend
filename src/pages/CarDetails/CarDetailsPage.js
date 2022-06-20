import React from 'react';
import CarDetails from './CarDetails';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';
import style from './Detail.module.scss';

const CarDetailsPage = () => (
  <section className={style.car_details_page}>
    <Hamburger />
    <Sidebar />
    <CarDetails />
  </section>
);

export default CarDetailsPage;
