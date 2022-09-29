import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import MyProfile from '../components/MyProfile';

describe('test if MyProfile page works correctly', () => {
  test('renders correctly', () => {
    const profile = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
});
