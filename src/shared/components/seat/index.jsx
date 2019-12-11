import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Seat = (props) => {
	const { type, number, ...rest } = props;

	return (
		<Styled className={`seat ${type}`} {...rest}>
			<span>{number}</span>
		</Styled>
	);
};

Seat.propTypes = {
	data: PropTypes.object,
};

export default Seat;
