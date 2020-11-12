import LinkForm from '../src/LinkForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('LinkForm with initial state', () => {
    const wrapper = shallow(<LinkForm />);

    it('should match the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('Adds a new title', () => {
      wrapper.find('.mainTitle').simulate('change', {
        target: {
          value: 'My Links',
        },
      });
      
      expect(wrapper.find('.mainTitle').get(0).props.value).toBe('My Links');
    });

    it('Adds a new profileUrl', () => {
      wrapper.find('.profileUrl').simulate('change', {
        target: {
          value: 'jandreasian',
        },
      });
      
      expect(wrapper.find('.profileUrl').get(0).props.value).toBe('jandreasian');
    });

    it('Adds a new link', () => {
      const blankData = {
        orderNumber: 0,
        title: '',
        url: ''
      }

      wrapper.find('.addUrl').simulate('click', {
        preventDefault: () => {}
      });

      const editLinkListValues = wrapper.find('EditLinkList').get(0).props.links
      
      expect(editLinkListValues[0]).toEqual(blankData);
    });

});