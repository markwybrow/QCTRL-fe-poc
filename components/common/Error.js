import React from 'react';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { LoadingWrapper } from './Loading';

const ErrorMessage = () => {
	const buttonConfig = {
		label: 'retry',
		path: '/index',
	};
	const clickHandler = () => {
		window.location.refresh;
	};
	return (
		<LoadingWrapper>
			<ErrorDiv>
				<h1>Error</h1>
				<div className="error">
					<div>There has been an issue getting the data, please try again</div>
					<Button buttonConfig={buttonConfig} onClick={clickHandler} />
				</div>
			</ErrorDiv>
		</LoadingWrapper>
	);
};

const ErrorDiv = styled.div`
	color: rgba(142, 68, 173, 1);
	flex-direction: column;
	height: 50vh;
	h1 {
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 36px;
	}
	h2 {
		font-size: 24px;
		line-height: 32px;
	}
`;
export default ErrorMessage;
