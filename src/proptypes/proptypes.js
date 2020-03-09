import PropTypes from 'prop-types';

const placeInfoPropType = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired
};

const hotel = {
  id: PropTypes.number.isRequired,
};

const hotelPropType = Object.assign({}, hotel, placeInfoPropType);
const arrayOfHotelsPropType = PropTypes.arrayOf(PropTypes.exact(hotelPropType));

export {placeInfoPropType, arrayOfHotelsPropType};
