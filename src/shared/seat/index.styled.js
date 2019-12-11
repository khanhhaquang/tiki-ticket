import styled from 'styled-components';

const Styled = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 8px;
	margin: 5px;
	border: 1px solid #ffffff;
	cursor: pointer;

	.vip {
		border: 1px solid #4ee681;
	}

	.deluxe {
		border: 1px solid #4287f5;
	}

	.selected {
		border: 1px solid #ffffff !important;
		background: #ffffff;
	}
`;

export default Styled;
