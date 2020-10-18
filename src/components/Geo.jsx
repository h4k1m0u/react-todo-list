import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// custom css
const useStyles = makeStyles(() => ({
  map: {
    height: 500,
    width: 500,
  },
}));

const Geo = ({ coords }) => {
  // hooks
  const styles = useStyles();

  return (
    <Map
      center={coords}
      zoom={12}
      className={styles.map}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

// props validation
Geo.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number),
};
Geo.defaultProps = {
  coords: [],
};

export default Geo;
