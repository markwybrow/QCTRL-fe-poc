import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Button = props => {
	const { path, label } = props.buttonConfig;
	return (
		<Link href={path}>
			<ButtonDiv>
				<span className="Label">{label}</span>
			</ButtonDiv>
		</Link>
	);
};
const ButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background: rgba(142, 68, 173, 1);
	margin: 30px 0px;

	height: 30px;
	border-radius: 4px;
	&:hover {
		background: rgba(142, 68, 173, 0.8);
	}
	cursor: pointer;

	.Label {
		font-size: 12px;
		text-transform: capitalize;
		color: #fff;
	}
`;

export default Button;
