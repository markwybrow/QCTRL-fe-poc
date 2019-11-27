import React from 'react';
import TypePill from '../common/TypePill';
import styled from '@emotion/styled';

const ArrowRight = styled.div`
	img {
		height: 14px;
		width: auto;
	}
`;
const ControlPanelRow = ({ attributes }) => {
	const { name, type, maximum_rabi_rate, polar_angle } = attributes;

	return (
		<li>
			<div className="column__data">{name}</div>
			<div className="column__data">
				<TypePill label={type} />
			</div>
			<div className="column__data">{maximum_rabi_rate}</div>
			<div className="column__data">{polar_angle}</div>
			<div className="column__action">
				<ArrowRight>
					<img src={'/static/assets/arrow-right.svg'} />
				</ArrowRight>
			</div>
		</li>
	);
};
export default ControlPanelRow;
