import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import ForecastCity from './ForecastCity';
import store from '../../Redux/store'; 

const setup = (props: any = null) =>
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ForecastCity coordinates={{latitude: '41.909663' , longitude: '12.451963'}} />
      </Provider>
    </MemoryRouter>,
  );

test('Forecast city page renders', async () => {
  const testId = 'forecastcity-id';
  const component = setup({ dataTestId: testId });
  const chainPage = await component.findByTestId('forecastcity-id');
  expect(chainPage).toBeTruthy();
});