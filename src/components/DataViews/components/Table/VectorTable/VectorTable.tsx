import { useMemo, memo, forwardRef } from "react";

import { TableStyles } from "./styles";
import { Table } from "./Table";

export const VectorTable = (props: any) => {
    const {
        data: { columnsData, dataRows },
        actualQuery,
        height,
        size,
        width,
    } = props;

    const cols = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => dataRows, [dataRows]);
    return (
        <TableStyles>
            {columnsData && dataRows && (
                <Table
                    actQuery={actualQuery}
                    columns={cols}
                    width={width}
                    data={data}
                    height={height}
                    size={size}
                />
            )}
        </TableStyles>
    );
};