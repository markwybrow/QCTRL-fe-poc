import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import Head from 'next/head';
import Header from '../Header';
import ControlPanelWrapper from '../controls/ControlPanelWrapper';

const Home = () => (
	<Fragment>
		<Head>
			<title>Home</title>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>

			<link
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Roboto+Mono"
				rel="stylesheet"
			/>
			<link rel="stylesheet" href="/static/styles/base.css" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<HomepageDiv>
			<DisplayComponentSection>
				<div className="row">
					<ControlPanelWrapper />
				</div>
			</DisplayComponentSection>
		</HomepageDiv>
	</Fragment>
);
const HomepageDiv = styled.div`
	width: 100%;
	margin-bottom: 10vh;
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
`;
const DisplayComponentSection = styled.div`
	.row {
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export default Home;
