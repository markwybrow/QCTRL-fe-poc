import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { useFetchControls } from '../service/FetchControls';

import ControlPanelRow from './ControlPanelRow';
import SectionTitle from '../common/SectionTitle';
import LoadingIcon from '../common/Loading';
import ErrorMessage from '../common/Error';

const ControlPanelWrapper = () => {
	const { controls, loading, error } = useFetchControls(
		'http://localhost:3001/data',
	);

	return (
		<div>
			<SectionTitle heading={'Controls'} />

			<ControlPanelWrapperUl>
				<li className="row__title">
					<div className="column__title ">TITLE</div>
					<div className="column__title">TYPE</div>
					<div className="column__title">POLAR ANGLE</div>
					<div className="column__title">MAX RABI RATE</div>
					<div className="column__action"> </div>
				</li>

				{loading && <LoadingIcon />}

				{error && <ErrorMessage />}

				{controls &&
					controls.length > 0 &&
					controls.map(control => (
						<ControlPanelRow {...control} key={`row${control.id}`} />
					))}
			</ControlPanelWrapperUl>
		</div>
	);
};
const ControlPanelWrapperUl = styled.ul`
	list-style-type: none;
	width: 1100px;
	max-width: 100%;
	height: fit-content;
	padding: 0;
	margin: 0;

	li {
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid #ece9f0;
		display: flex;
		flex-flow: row nowrap;
		height: 58px;
		padding-left: 20px;
		text-align: left;
		width: 100% !important;
		justify-content: flex-start;

		&.row__title {
			background-color: #faf7fc;
			border-top: 1px solid #ece9f0;
			height: 46px;
		}

		div {
			display: block;
			&.column__title {
				color: #b6aabc;
				min-width: 80px;
			}
			&.column__title:first-child {
				padding-left: 10px;
				width: 270px;
			}

			&.column__data {
			}
			&.column__action {
				text-align: right;
				padding-right: 20px;
				width: 40%;
			}
			max-width: 100%;
			width: 280px;
		}
	}
`;
export default ControlPanelWrapper;
