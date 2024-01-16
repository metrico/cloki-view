/**
 * Cardinality totals
 * A view for the delete actions on the cardinality main view
 */
import { useCallback, useState } from "react";
import { totalsMock } from "../api/mock";
import { cx } from "@emotion/css";
import { PROCESS_HEADERS } from "./consts";
import { TotalRowStyle } from "./style";
import useTheme from "@ui/theme/useTheme";
import { TotalsRow } from "./TotalsRow";

import "./array_helper.mjs";

export default function CardinalityTotals({ isLoading }) {
    const theme = useTheme();
    const [totals, setTotals] = useState(totalsMock);
    const [sort, setSort] = useState("asc");

    const sortByProperty = useCallback(
        (column: string) => {
            const numberCols = [
                "series_created",
                "series_dropped",
                "to_sec",
                "from_sec",
                "created_sec",
            ];

            const columnName = column.split(" ").join("_").toLocaleLowerCase();

            setTotals((prev) => {
                let prevCols = [...prev];
                if (numberCols.includes(columnName)) {
                    return prevCols.sortColByNumber(columnName, sort);
                }
                return prevCols.sortColByString(columnName, sort);
            });

            setSort((prev) => (prev === "asc" ? "desc" : "asc"));
        },
        [totals]
    );

    return (
        <div className={cx(TotalRowStyle(theme))}>
            <div
                style={{
                    textAlign: "center",
                    padding: "10px 0px",
                    margin: "0px 4px",
                    fontSize: "12px",
                    borderRadius: "3px",
                    background: theme.shadow,
                }}
            >
                Deleted fingerprints in Maintainance mode
            </div>
            <div className="table">
                <div className="table-header">
                    {PROCESS_HEADERS?.map((header) => (
                        <div
                            key={header}
                            onClick={() => sortByProperty(header)}
                            className="cell"
                        >
                            {header}
                        </div>
                    ))}
                </div>
                <>
                    {totals?.length ? (
                        totals?.map((total, key) => (
                            <TotalsRow
                                isLoading={isLoading}
                                key={key}
                                headers={PROCESS_HEADERS}
                                total={total}
                            />
                        ))
                    ) : (
                        <> no totals </>
                    )}
                </>
            </div>
        </div>
    );
}
