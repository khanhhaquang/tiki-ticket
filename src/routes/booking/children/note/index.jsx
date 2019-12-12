import React from 'react';
import Styled from './index.styled';
import Item from './item';

const Note = () => (
	<Styled className='note-wrapper'>
		<section className='states'>
			<Item type='booked' content='Đã đặt' />
			<Item type='selected' content='Đang chọn' />
		</section>

		<section className='ticket-types'>
			<Item type='standard' content='Standard - 60.000đ' />
			<Item type='vip' content='VIP - 90.000đ' />
			<Item type='deluxe' content='Deluxe - 110.000đ' />
		</section>
	</Styled>
);

export default Note;
