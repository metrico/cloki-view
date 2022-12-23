import { ThemeProvider } from "@emotion/react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themes } from "../../theme/themes";
import { DataViewItem } from "./components/DataViewItem";
import { DataviewsContainer } from "./styled";

export default function DataViews(props: any) {
    const { name} = props;
    const theme = useSelector((store: any) => store.theme);
    const [side] = useState(name);
    const dataViews = useSelector((store: any) => store[`${side}DataView`]);
    const viewsMemo = useMemo(()=>{
    return dataViews
    },[dataViews])
    if (viewsMemo.length > 0 ) {

        return (
            <ThemeProvider theme={(themes as any)[theme]}>
                <DataviewsContainer>
                    {viewsMemo?.map((dv: any, index: number) => (
                        <DataViewItem
                            key={index}
                            {...props}
                            dataView={dv}
                        />
                    ))}
                </DataviewsContainer>
            </ThemeProvider>
        );
    }

    return null;
}
