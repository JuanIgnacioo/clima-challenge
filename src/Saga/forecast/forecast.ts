import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { actions } from "../../Redux/forecast/actions";
import * as ForecastService from "../../Services/Forecast/forecast";
import { ForecastResponseType } from "../../Services/Forecast/types";

export function* getForecast(
  action: any
): Generator<
  | CallEffect<AxiosResponse<any>>
  | PutEffect<{ type: string }>
  | CallEffect<void>,
  void,
  ForecastResponseType
> {
  const response = yield call(
    ForecastService.getForecastFetching,
    action.payload
  );
  console.log(response)
  if (response.cod !== 200) {
    if (response.cod === 500) {
      yield put(actions.getForecastError(true));
      //   $alerts.next({
      //     type: 'error',
      //     title: i18next.t('RolesByApplicationService:errorGeneralTitle'),
      //     subMessage: i18next.t('RolesByApplicationService:errorGeneralBody'),
      //   });
    } else {
      yield put(actions.getForecastError(false));
    }
  } else {
    const { data } = response;
    yield put(actions.getForecastSuccess(data));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.getForecastRequest.type, getForecast),
];

export default sagas;