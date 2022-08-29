import { all, call, spawn } from "redux-saga/effects";
import getForecast from "./forecast/forecast";

const sagas = [...getForecast];

export default function* rootSaga() {
  yield all(
    sagas.map((saga: any) =>
      spawn(function* listenErrors() {
        let isSyncError = false;
        const resetSyncError = () => {
          isSyncError = false;
        };
        let httpError = false;
        while (true) {
          httpError = false;
          isSyncError = true;
          try {
            setTimeout(resetSyncError);

            yield call(function* execSaga() {
              yield saga;
            });
            // eslint-disable-next-line no-console
            console.error(
              "Unexpected root saga termination. " +
                "The root sagas are supposed to be sagas that live during the whole app lifetime!",
              saga
            );
          } catch (error: any) {
            httpError = typeof error.httpError !== "undefined";
            if (!httpError && isSyncError) {
              throw new Error(
                `${saga.name} was terminated because it threw an exception on startup.`
              );
            }
          }

          if (!httpError) {
            // Para evitar que fallas infinitas bloqueen el browser...
            // eslint-disable-next-line no-console
            console.error(saga.name, " will be restarted after 1 second");
          }
        }
      })
    )
  );
}