import React from 'react';
import Seat from '@shared/seat';
import Styled from './index.styled';

const Seats = () => (
	<Styled>
		<Seat type='standard' />
		<Seat type='vip' />
		<Seat type='deluxe' />
		<Seat type='standard' />
	</Styled>
);

export default Seats;
