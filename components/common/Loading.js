import React from 'react';
import styled from '@emotion/styled';

const LoadingIcon = () => {
	return (
		<LoadingWrapper>
			<IconContainer>
				<img src={'/static/assets/logo.svg'} alt="Q-CTRL Loading data" />
			</IconContainer>
		</LoadingWrapper>
	);
};

export const LoadingWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const IconContainer = styled.div`
	border-radius: 50%;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	margin: 10px;
	height: 48px;
	width: 48x;
	transform: scale(1);

	box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
	animation: pulse-purple 2s infinite;

	@keyframes pulse-purple {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
		}
	}
`;

export default LoadingIcon;
