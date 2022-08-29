import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { actions } from "../../Redux/geolocation/actions";
import * as GeolocationService from "../../Services/Geolocation/geolocation";
import { GeolocationResponseType } from "../../Services/Geolocation/types";

export function* getGeolocation(
  action: any
): Generator<
  | CallEffect<AxiosResponse<any>>
  | PutEffect<{ type: string }>
  | CallEffect<void>,
  void,
  GeolocationResponseType
> {
  const response = yield call(
    GeolocationService.getForecastFetching,
    action.payload
  );
  console.log(response);
  if (response.status !== 200) {
    if (response.status === 500) {
      yield put(actions.getGeolocationError(true));
      //   $alerts.next({
      //     type: 'error',
      //     title: i18next.t('RolesByApplicationService:errorGeneralTitle'),
      //     subMessage: i18next.t('RolesByApplicationService:errorGeneralBody'),
      //   });
    } else {
      yield put(actions.getGeolocationError(false));
    }
  } else {
    const { data } = response;
    yield put(actions.getGeolocationSuccess(data));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.getGeolocationRequest.type, getGeolocation),
];

export default sagas;
