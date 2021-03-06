/*eslint-disable max-nested-callbacks*/

import React from 'react';

import {shallow, configure} from 'enzyme';

// fix Enzyme to work with React 16 as per https://github.com/airbnb/enzyme#installation
import Adapter from 'enzyme-adapter-react-16';

import GuideScreen from '../../components/GuideScreen';

configure({adapter: new Adapter()});

import {ActivityIndicator} from 'react-native';
import AppView from '../AppView';

describe('<AppView />', () =>{
  describe('isReady', () =>{

    it('should render a <GuideScreen /> if firstTime is true when run App', () =>{
      const fn = () =>{};
      const wrapper = shallow(
        <AppView dispatch={fn}
          firstTime={true}
                 isReady={false}/>
      );
      //console.log('AppView Test:', wrapper);
      expect(wrapper.find(GuideScreen).length).toBe(1);
    });

    it('should not render a <GuideScreen /> if firstTime is false when run App', () =>{
      const fn = () =>{};
      const wrapper = shallow(
        <AppView dispatch={fn}
                 firstTime={false}
                 isReady={false}/>
      );
      //console.log('AppView Test:',wrapper.find(Loading).length);
      expect(wrapper.find(GuideScreen).length).toBe(0);
    });

    it('should render a <ActivityIndicator /> if not ready', () =>{
      const fn = () =>{};
      const wrapper = shallow(
        <AppView
          isReady={false}
          isLoggedIn={false}
          dispatch={fn}
        />
      );

      expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });

    it('should not render a <ActivityIndicator /> if ready', () =>{
      const fn = () =>{};
      const wrapper = shallow(
        <AppView
          isReady={true}
          isLoggedIn={false}
          dispatch={fn}
        />
      );

      expect(wrapper.find(ActivityIndicator).length).toBe(0);
    });
  });
});
