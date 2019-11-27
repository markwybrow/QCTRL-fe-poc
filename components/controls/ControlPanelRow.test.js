import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ControlPanelRow from './ControlPanelRow';

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

describe('<ControlPanelRow /> spec', () => {
	it(' renders the component with data correctly ', () => {
		const wrapper = render(<ControlPanelRow {...data} />);
		expect(wrapper.firstChild).toMatchSnapshot();
	});
	it(' assert there are div.column__ rendered ', () => {
		const wrapper = shallow(<ControlPanelRow {...data} />);
		expect(wrapper.find('.column__data').length).toBe(4);
		expect(wrapper.find('.column__action').length).toBe(1);
	});
	it(' assert the data is rendered in each column in the correct order ', () => {
		const { name, type, maximum_rabi_rate, polar_angle } = data.attributes;
		const wrapper = mount(<ControlPanelRow {...data} />);
		const divs = wrapper.find('div');
		expect(
			divs
				.find('div')
				.at(0)
				.text(),
		).toEqual(name);
		expect(
			divs
				.find('div')
				.at(1)
				.text(),
		).toEqual(type);
		expect(
			divs
				.find('div')
				.at(4)
				.text(),
		).toEqual(`${maximum_rabi_rate}`);
		expect(
			divs
				.find('div')
				.at(5)
				.text(),
		).toEqual(`${polar_angle}`);
	});
});
