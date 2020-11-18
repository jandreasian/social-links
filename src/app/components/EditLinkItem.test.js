import EditLinkList from './EditLinkItem';
import React from 'react';
import { shallow } from 'enzyme';

test('Check the values in the EditLink component', () => {
    const link = { orderNumber: 0, title: "LinkedIn", url: "https://www.linkedin.com/in/josh-andreasian-9931a393/" };
    const wrapper = shallow(<EditLinkList {...link} />);

    expect(wrapper.find('.linkTitle').get(0).props.value).toBe('LinkedIn');
    expect(wrapper.find('.linkURL').get(0).props.value).toBe('https://www.linkedin.com/in/josh-andreasian-9931a393/');
});
