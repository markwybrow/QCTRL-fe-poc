import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TypePillDiv = styled.div`
    align-items: center;
    border-radius: 2px;
    background-color: #3ccb3e;
    color: #fff;
    display: flex;
    font-size: 10px;
    height: 14px;
    justify-content: center;
    max-width: 72px !important;
    padding: 2px 2px;
    text-align: center;
    text-transform: uppercase;

    .pillLabel {
        display: block;
        line-height: 14px;
    }
}
`;
const TypePill = ({ label = 'primitive' }) => {
	return (
		<TypePillDiv>
			<div className="pillLabel">{label}</div>
		</TypePillDiv>
	);
};

TypePill.propTypes = {
	label: PropTypes.string.isRequired,
};
export default TypePill;
