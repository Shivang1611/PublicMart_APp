/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../src/App';

test('renders correctly', () => {
  ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});