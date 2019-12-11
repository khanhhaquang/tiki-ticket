import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Seat = (props) => {
	const { type } = props;

	return <Styled className={`seat ${type}`} />;
};

Seat.propTypes = {
	type: PropTypes.string,
};

export default Seat;
