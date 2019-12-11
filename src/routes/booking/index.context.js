import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
	selected: [],
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'add':
			return {
				...state,
				selected: [...state.selected, payload],
			};
		case 'remove':
			return {
				...state,
				selected: state.selected.filter((i) => i.id !== payload.id),
			};
		default:
			return state;
	}
};

export const BookingContext = React.createContext({});

export const BookingProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<BookingContext.Provider value={{ ...state, dispatch }}>{children}</BookingContext.Provider>
	);
};

BookingProvider.propTypes = {
	children: PropTypes.any,
};
