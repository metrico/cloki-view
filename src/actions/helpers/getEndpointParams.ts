import store from "../../store/store";
import { QueryParams, QueryDirection } from "../types";
import getTimeParams from "./getTimeParams";

export function getEndpointParams(
    type: string,
    query: string,
    limit: number,
    tSpan: number,
    direction:QueryDirection,
): QueryParams {
    const localStore = store.getState();
    const { apiUrl, isSplit } = localStore;
    const splitVal = isSplit ? 2 : 1;
    const wWidth = window.innerWidth;
    const { parsedTime, time } = getTimeParams(type);
    const url = apiUrl;

    let stepCalc = 0;
    stepCalc = wWidth / Math.round(((wWidth / tSpan) * 10) / splitVal);
    if (stepCalc === 0) {
        stepCalc = 1;
    }
    const queryStep = `&step=${stepCalc}`;
    const encodedQuery = `${encodeURIComponent(query)}`;

    let queryUrl = "";
    switch (type) {
        case "logs":
            queryUrl = `${url}/loki/api/v1`;
            break;
        case "metrics":
            queryUrl = `${url}/api/v1`;
            break;
        default:
            queryUrl = `${url}/loki/api/v1`;
    }
    return {
        queryUrl,
        encodedQuery,
        parsedTime,
        time,
        queryStep,
        limit,
        direction,
    };
}

// export as function~
