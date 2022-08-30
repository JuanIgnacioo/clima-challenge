import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import CardContentLoader from './CardContentLoader';
import store from '../../Redux/store'; 

const setup = (props: any = null) =>
  render(
    <MemoryRouter>
      <Provider store={store}>
        <CardContentLoader/>
      </Provider>
    </MemoryRouter>,
  );

test('Forecast city page renders', async () => {
  const testId = 'cardcontentloader-id';
  const component = setup({ dataTestId: testId });
  const chainPage = await component.findByTestId('cardcontentloader-id');
  expect(chainPage).toBeTruthy();
});