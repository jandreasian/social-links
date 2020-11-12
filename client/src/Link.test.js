import Link from './Link';
import React from 'react';
import { shallow } from 'enzyme';

test('Check the values in the Link component', () => {
    const link = { orderNumber: 0, title: "LinkedIn", url: "https://www.linkedin.com/in/josh-andreasian-9931a393/" };
    const wrapper = shallow(<Link {...link} />);
    
    expect(wrapper.find('.linkBox').text()).toBe('LinkedIn');
    expect(wrapper.find('.link').props().href).toBe('https://www.linkedin.com/in/josh-andreasian-9931a393/');
});
