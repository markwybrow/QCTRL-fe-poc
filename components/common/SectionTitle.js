import React from 'react';
import styled from '@emotion/styled';

const SectionHeading = styled.div`
	display: flex;
	align-items: center;
	margin-top: 18px;
	margin-bottom: 18px;
	.h1__sectionHeader {
		font-size: 18px;
		font-weight: 400;
	}
`;
const AddButton = styled.div`
	display: flex;
	height: 62px;
	margin-left: 12px;
	width: 62px;
	justify-content: center;
	align-self: center;
	.plus {
		color: #fff;
		font-size: 28px;
		font-weight: 300;
	}
`;

const SectionTitle = ({ heading }) => {
	return (
		<SectionHeading>
			<div>
				<h1 className="h1__sectionHeader">{heading}</h1>
			</div>
			<AddButton>
				<img src={'/static/assets/button-plus.svg'} />
			</AddButton>
		</SectionHeading>
	);
};

export default SectionTitle;
