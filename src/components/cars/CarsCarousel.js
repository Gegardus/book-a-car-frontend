import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from './Paginate';
import insta from '../../assets/images/insta-icon-home.png';
import twitter from '../../assets/images/twitter-icon-home.png';
import facebook from '../../assets/images/fb-icon-home.png';
import { getCarsFromAPI } from '../../redux/reducers/cars';

const social = [
  { icon: facebook },
  { icon: twitter },
  { icon: insta },
];

// const cars = [
//   { car: 'https://flyclipart.com/thumb2/aston-martin-cars-png-images-free-download-12690.png' },
//   { car: 'https://www.nicepng.com/png/detail/64-648130_southwest-custom-classic-cars-all-new-sport-cars.png' },
//   { car: 'https://png.pngtree.com/png-clipart/20210722/ourmid/pngtree-car-blue-transportation-reception-sports-car-png-image_6561592.png' },
//   { car: 'https://png.pngtree.com/png-clipart/20210722/ourmid/pngtree-car-red-trolley-sports-car-png-image_6561572.png' },
// ];

const CarsCarousel = () => {
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;
  const cars = useSelector((state) => state.carsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsFromAPI(accessToken));
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 3;
  const pageVisited = pageNumber * carsPerPage;
  const displayCars = cars.slice(pageVisited, pageVisited + carsPerPage);
  const pageCount = Math.ceil(cars.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-col gap-4 mt-16 lg:flex-row">
      {displayCars.map((item) => (
        <div className="flex flex-col items-center w-80 bg-green-200" key={item.name}>
          <img src={item.photo} alt="car" className="car rounded-full w-60 h-60 blob" />
          <h3 className="uppercase text-slate-900 text-lg mt-6 font-bold">
            Details
          </h3>
          <hr className="border-t-2 border-dashed border-gray-500 w-32 mt-4" />
          <p className="text-gray-400 text-center font-semibold mt-4">{item.details}</p>
          <div className="flex gap-4 mt-4">
            {social.map((item) => (
              <a href="/" key={item.icon}><img src={item.icon} alt="social" className="w-8" /></a>
            ))}
          </div>
        </div>
      ))}
      <Paginate pageCount={pageCount} changePage={changePage} />
    </div>
  );
};

export default CarsCarousel;
