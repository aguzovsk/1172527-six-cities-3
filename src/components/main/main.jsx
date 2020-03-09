import React from 'react';
import PlaceCard from '../place-card/place-card';
import Header from '../header/header';
import {arrayOfHotelsPropType, placeInfoPropType} from '../../proptypes/proptypes';

const getCityTemplate = (cityName, isActive) => {
  const itemClass = `locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`;

  return <li key={cityName} className="locations__item">
    <a className={itemClass} href="#">
      <span>{cityName}</span>
    </a>
  </li>;
};

const getCitiesMarkup = (cities, selectedCity) => {
  return <>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => getCityTemplate(city, selectedCity === city))}
        </ul>
      </section>
    </div>
  </>;
};

const Main = (props) => {
  const {hotels} = props;
  const placesCount = hotels.length;
  const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  const selectedCity = `Amsterdam`;

  return <div className="page page--gray page--main">
    <Header email="Oliver.conner@gmail.com" />;

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      {getCitiesMarkup(cities, selectedCity)}
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in {selectedCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>

            </form>
            <div className="cities__places-list places__list tabs__content">
              {hotels.map((hotel) => {
                const {id} = hotel;
                const rest = {};
                for (let key in placeInfoPropType) {
                  if (key in hotel) {
                    rest[key] = hotel[key];
                  }
                }

                return <PlaceCard key={id} hotel={rest} />;
              })}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  hotels: arrayOfHotelsPropType
};

export default Main;
