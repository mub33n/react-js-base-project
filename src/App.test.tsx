import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const component = renderer.create(<App />);
  expect(component).not.toBe(null);
});
