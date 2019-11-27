import React, { useState, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

const fetch = require('node-fetch');
import { useFetchControls } from '../service/FetchControls';

import ControlPanelWrapper from './ControlPanelWrapper';

const data = {
	type: 'controls',
	id: '1',
	attributes: {
		name: 'Single-Qubit Driven',
		type: 'Primitive',
		maximum_rabi_rate: 63.16731,
		polar_angle: 0.05671,
	},
};

describe('<ControlPanelWrapper /> spec', () => {
	it(' renders the component with Loading Spinner ', () => {
		const wrapper = shallow(<ControlPanelWrapper {...data} />);

		expect(wrapper.find('LoadingIcon')).toExist;
	});

	it(' renders the component with data ', async () => {
		const wrapper = shallow(<ControlPanelWrapper {...data} />);
	});
});
