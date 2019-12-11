import React from 'react';
import Styled from './index.styled';
import Header from './children/header';
import Screen from './children/screen';
import Seats from './children/seats';

const Booking = () => (
	<Styled>
		<Header />
		<Screen />
		<Seats />
	</Styled>
);

export default Booking;
