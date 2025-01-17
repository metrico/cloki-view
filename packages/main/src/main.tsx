import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import "./scss/app.scss";
import errorInterceptor from "@ui/helpers/error.interceptor";

import { Notification } from "@ui/qrynui/notifications";
import { CookiesProvider } from "react-cookie";

import { Routes, Route, HashRouter } from "react-router-dom";

import { lazy, Suspense } from "react";

import ScreenLoader from "@ui/views/ScreenLoader";

import store from "@ui/store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./providers/ProtectedRoute";
import * as fingerprintjs from "@fingerprintjs/fingerprintjs";
import { WebVitalsStore } from "@ui/plugins/WebVitals/store";

try {
    const { webVitalsActive, httpPerformanceActive, setQrynInstance } =
        WebVitalsStore.getState();
    if (webVitalsActive || httpPerformanceActive) {
        const fpromise = async () => await fingerprintjs;

        fpromise()
            .then((FingerprintJS) => FingerprintJS.load())
            ?.then((fp) => fp.get())
            ?.then(({ visitorId }) => {
                //  const { setQrynInstance } = WebVitalsStore.getState();

                setQrynInstance(visitorId);
            });
    }
} catch (e) {
    console.log(e);
}

const AppRoute = lazy(() => import("./App"));
const DataSourcesRoute = lazy(
    () => import("@ui/views/DataSources/DataSources")
);
const MainRoute = lazy(() => import("../views/Main"));
const PluginsRoute = lazy(() => import("../plugins/Plugins"));
const UserRoles = lazy(() => import("../views/User/UserRoles"));
errorInterceptor(axios);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <HashRouter basename="">
                    <Suspense fallback={<ScreenLoader />}>
                        <Routes>
                            <Route path="/" element={<AppRoute />}>
                                <Route index element={<MainRoute />} />
                                <Route
                                    path="/search/*"
                                    index
                                    element={<MainRoute />}
                                />
                                <Route
                                    path="/plugins"
                                    element={<PluginsRoute />}
                                />
                                <Route path="/users" element={<UserRoles />} />

                                <Route
                                    path="/datasources/*"
                                    element={
                                        <ProtectedRoute>
                                            {" "}
                                            <DataSourcesRoute />
                                        </ProtectedRoute>
                                    }
                                />
                            </Route>
                        </Routes>
                    </Suspense>
                </HashRouter>
                <Notification />
            </Provider>
        </CookiesProvider>
    </React.StrictMode>
);
