import React from 'react';
import Main from '../main/main';
import {arrayOfHotelsPropType} from '../../proptypes/proptypes';

const App = (props) => {
  const {hotels} = props;
  return <Main hotels={hotels}/>;
};

App.propTypes = {
  hotels: arrayOfHotelsPropType
};

export default App;
