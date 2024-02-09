import { useState } from "react";
import { css, cx } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import setDataSources from "../store/setDataSources";
import { Button, Field } from "../ui";
import DOMPurify from "isomorphic-dompurify";
import useTheme from "@ui/theme/useTheme";
import CustomSwitch from "@ui/qrynui/CustomSwitch/CustomSwitch";


const InlineFlex = (theme: any) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-wrap: wrap;
    width: 400px;
    border: 1px solid ${theme.accentNeutral};
    padding: 5px;
    border-radius: 3px;
    margin-left: 10px;
`;

const oneForAllStyle = css`
    display: flex;
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 4px;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
`;

const FieldsCont = css`
    margin: 5px;
`;

const BasicAuth = css`
    margin-left: 20px;
    display: flex;
    align-items: center;
    span {
        font-size: 12px;
    }
`;

const ForAllButton = css`
    align-items: center;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    flex: 1;
`;

export const DataSourcesFiller = () => {
    const [url, setUrl] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [oneForAll, setOneForAll] = useState(false);
    const [basicAuth, setBasicAuth] = useState(false);
    const dataSources = useSelector((store: any) => store.dataSources);
    const dispatch: any = useDispatch();
    const submitMessage = "Save";
    const theme = useTheme();

    const urlChange = (e: any) => {
        const value = e?.target?.value || "";
        const strippedValue = value.replace(/\/$/, "");
        setUrl(() => strippedValue);
    };
    const userChange = (e: any) => {
        setUser(() => e.target.value);
    };
    const passwordChange = (e: any) => {
        setPassword(() => e.target.value);
    };

    const onSwitchChange = (e: any) => {
        setOneForAll(() => e.target.checked);
    };

    const onBasicAuthChange = (e: any) => {
        setBasicAuth(() => e.target.checked);
    };

    const onUseForAll = () => {
        const prevDs = JSON.parse(JSON.stringify(dataSources));
        const newDs = prevDs?.map((m: any) => ({
            ...m,
            url,
            auth: {
                ...m.auth,
                basicAuth: { ...m.auth.basicAuth, value: basicAuth },
                fields: {
                    ...m.auth.fields,
                    basicAuth: [...m.auth.fields.basicAuth]?.map((ba: any) => {
                        if (ba.name === "user") {
                            return { ...ba, value: user };
                        }
                        if (ba.name === "password") {
                            return { ...ba, value: password };
                        }
                        return ba;
                    }),
                },
            },
        }));
        localStorage.setItem("dataSources", JSON.stringify(newDs));
        dispatch(setDataSources(newDs));
    };

    return (
        <div className={cx(InlineFlex(theme))}>
            <div className={cx(oneForAllStyle)}>
                Use one setting for all Data Sources
                <CustomSwitch
                    defaultActive={oneForAll}
                    onChange={onSwitchChange}
                />
            </div>
            {oneForAll && (
                <div className={cx(FieldsCont)}>
                    <Field
                        value={DOMPurify.sanitize(url)}
                        label={"url"}
                        onChange={urlChange}
                        placeholder={"http://qryn.dev"}
                    />
                    {basicAuth && (
                        <>
                            <Field
                                value={DOMPurify.sanitize(user)}
                                label={"user"}
                                onChange={userChange}
                                placeholder={"default"}
                            />
                            <Field
                                value={DOMPurify.sanitize(password)}
                                label={"password"}
                                onChange={passwordChange}
                                type={"password"}
                                placeholder={""}
                            />
                        </>
                    )}

                    <div className={cx(ForAllButton)}>
                        <div className={cx(BasicAuth)}>
                            <span>Use Basic Auth</span>
                            <CustomSwitch
                                defaultActive={basicAuth}
                                onChange={onBasicAuthChange}
                            />
                        </div>
                        <Button
                            value={DOMPurify.sanitize(submitMessage)}
                            onClick={onUseForAll}
                            editing={false}
                            primary={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
