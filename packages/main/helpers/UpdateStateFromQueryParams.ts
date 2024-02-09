import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DOMPurify from "isomorphic-dompurify";
import {
    setIsSubmit,
    setQueryTime,
    setQueryStep,
    setStartTime,
    setStopTime,
    setTheme,
    setAutoTheme,
    setTimeRangeLabel,
} from "@ui/store/actions";

import setFromTime from "@ui/store/actions/setFromTime";
import setIsEmbed from "@ui/store/actions/setIsEmbed";
import { setLeftPanel } from "@ui/store/actions/setLeftPanel";
import { setRightPanel } from "@ui/store/actions/setRightPanel";
import setToTime from "@ui/store/actions/setToTime";
import { setUrlLocation } from "@ui/store/actions/setUrlLocation";
import { setUrlQueryParams } from "@ui/store/actions/setUrlQueryParams";
import { setSplitView } from "@ui/main/components/StatusBar/components/SplitViewButton/setSplitView";

export const STRING_VALUES = ["step", "theme", "time"];
export const READ_ONLY_STRING_VALUES = ["label"];
export const ARRAY_VALUES = ["left", "right"];
export const TIME_VALUES = ["start", "stop"];

export const BOOLEAN_VALUES = ["isSubmit", "isSplit", "autoTheme", "isEmbed"];

export function UpdateStateFromQueryParams() {
    const isLightTheme = useMemo(() => {
        return window.matchMedia("(prefers-color-scheme: light)").matches;
    }, []);

    const dispatch: any = useDispatch();
    const urlQueryParams = useSelector(
        ({ urlQueryParams }: any) => urlQueryParams
    );
    const start = useSelector(({ start }: any) => start);
    const stop = useSelector(({ stop }: any) => stop);
    const label = useSelector(({ label }: any) => label);
    const from = useSelector(({ from }: any) => from);
    const to = useSelector(({ to }: any) => to);
    const step = useSelector(({ step }: any) => step);
    const isSubmit = useSelector(({ isSubmit }: any) => isSubmit);
    const isEmbed = useSelector(({ isEmbed }: any) => isEmbed);
    const time = useSelector(({ time }: any) => time);
    const left = useSelector(({ left }: any) => left);
    const right = useSelector(({ right }: any) => right);
    const theme = useSelector(({ theme }: any) => theme);
    const autoTheme = useSelector(({ autoTheme }: any) => autoTheme);
    const isSplit = useSelector(({ isSplit }: any) => isSplit);
    const [themeSet, setThemeSet] = useState(isLightTheme ? "light" : theme);

    useEffect(() => {
        setThemeSet(theme);
    }, [theme]);
    const STORE_KEYS: any = {
        start,
        step,
        stop,
        label,
        from,
        to,
        time,
        isSubmit,
        isEmbed,
        theme,
        autoTheme,
        left,
        right,
        isSplit,
    };

    const STORE_ACTIONS: any = {
        start: setStartTime,
        step: setQueryStep,
        stop: setStopTime,
        label: setTimeRangeLabel,
        from: setFromTime,
        to: setToTime,
        time: setQueryTime,
        isSubmit: setIsSubmit,
        isEmbed: setIsEmbed,
        theme: setTheme,
        left: setLeftPanel,
        right: setRightPanel,
        isSplit: setSplitView,
        autoTheme: setAutoTheme,
    };

    const encodeTs = (ts: any) => {
        return ts?.getTime() + "000000";
    };

    const JSONTry = (val: any, emptyValue: any) => {
        try {
            let parsed = JSON.parse(val);
            if (parsed && parsed !== undefined) {
                return parsed;
            } else {
                return emptyValue;
            }
        } catch (e) {
            return emptyValue;
        }
    };

    const { hash } = useLocation();
    useEffect(() => {
        const urlFromHash = new URLSearchParams(hash.replace(/#/, ""));
        // !if there is some params set them first on UI
        if (hash.length > 0) {
            const startParams = urlQueryParams;

            for (let [key, value] of urlFromHash.entries()) {
                startParams[key] = value;
            }

            if (Object.keys(startParams).length > 0) {
                dispatch(setUrlQueryParams({ ...urlQueryParams, startParams }));

                dispatch(setUrlLocation(hash));

                Object.keys(startParams).forEach((param) => {
                    if (
                        (STRING_VALUES.includes(param) ||
                            READ_ONLY_STRING_VALUES.includes(param)) &&
                        startParams[param] !== ""
                    ) {
                        dispatch(
                            STORE_ACTIONS[param](
                                DOMPurify.sanitize(startParams[param])
                            )
                        );
                    } else if (param === "theme") {
                        dispatch(
                            STORE_ACTIONS[param](DOMPurify.sanitize(themeSet))
                        );
                    } else if (
                        TIME_VALUES.includes(param) &&
                        startParams[param] !== ""
                    ) {
                        const croppedTime = startParams[param] / 1000000;
                        const paramDate = new Date(
                            (moment as any)(croppedTime).format(
                                "YYYY-MM-DDTHH:mm:ss.SSSZ"
                            )
                        );

                        dispatch(STORE_ACTIONS[param](paramDate));
                    } else if (BOOLEAN_VALUES.includes(param)) {
                        try {
                            const val = JSONTry(startParams[param], false);
                            dispatch(STORE_ACTIONS[param](val));
                        } catch (e) {
                            console.log(e);
                        }
                    } else if (ARRAY_VALUES.includes(param)) {
                        try {
                            const parsed = JSONTry(
                                decodeURIComponent(startParams[param]),
                                []
                            );

                            if (parsed?.length > 0) {
                                dispatch(STORE_ACTIONS[param](parsed));
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }
                });
            }
        } else {
            const allParams = STRING_VALUES.concat(TIME_VALUES)
                .concat(BOOLEAN_VALUES)
                .concat(ARRAY_VALUES);
            allParams.forEach((param) => {
                if (STRING_VALUES.includes(param)) {
                    urlFromHash.set(
                        param,
                        DOMPurify.sanitize(STORE_KEYS[param]?.toString())
                    );
                } else if (param === "theme") {
                    urlFromHash.set(
                        param,
                        DOMPurify.sanitize(themeSet.toString())
                    );
                } else if (TIME_VALUES.includes(param)) {
                    const time_value = STORE_KEYS[param]?.getTime() * 1000000;
                    urlFromHash.set(
                        param,
                        DOMPurify.sanitize(time_value.toString())
                    );
                } else if (BOOLEAN_VALUES.includes(param)) {
                    try {
                        urlFromHash.set(
                            param,
                            JSONTry(STORE_KEYS[param], false)
                        );
                    } catch (e) {
                        console.log(e);
                    }
                } else if (ARRAY_VALUES.includes(param)) {
                    try {
                        const encodedArray = JSON.stringify(STORE_KEYS[param]);
                        urlFromHash.set(param, encodedArray);
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
            (window as any).location.hash = `/search/#${urlFromHash}`;
        }
    }, []);

    // set store values into url
    useEffect(() => {
        // compares precious url params with store values and sets new url params with store values

        if (hash.length > 0) {
            const paramsFromHash = new URLSearchParams(hash.replace(/#/, ""));

            let previousParams: any = {};

            for (let [key, value] of paramsFromHash.entries()) {
                previousParams[key] = value;
            }

            Object.keys(STORE_KEYS).forEach((store_key) => {
                if (
                    STRING_VALUES.includes(store_key) &&
                    previousParams[store_key] !== STORE_KEYS[store_key]
                ) {
                    // store string type values from store into url

                    const updated = DOMPurify.sanitize(
                        STORE_KEYS[store_key].toString().trim()
                    );

                    paramsFromHash.set(store_key, updated);
                } else if (
                    TIME_VALUES.includes(store_key) &&
                    previousParams[store_key] !==
                        encodeTs(STORE_KEYS[store_key])
                ) {
                    // store time related values from store into url

                    const encodedTs = encodeTs(STORE_KEYS[store_key]);
                    paramsFromHash.set(
                        store_key,
                        DOMPurify.sanitize(encodedTs)
                    );
                } else if (
                    BOOLEAN_VALUES.includes(store_key) &&
                    previousParams[store_key] !== STORE_KEYS[store_key]
                ) {
                    // store boolean type values from store into url

                    try {
                        paramsFromHash.set(
                            store_key,
                            JSONTry(STORE_KEYS[store_key], false)
                        );
                    } catch (e) {
                        console.error(e);
                    }
                } else if (store_key === "left") {
                    // store left panel into url

                    const parsed = JSON.stringify(left);
                    paramsFromHash.set("left", parsed);
                } else if (store_key === "right") {
                    // store right panel into url

                    const parsed = JSON.stringify(right);
                    paramsFromHash.set("right", parsed);
                }
            });

            (window as any).location.hash = `/search/#${paramsFromHash}`;
        }
    }, [STORE_KEYS]);
}
