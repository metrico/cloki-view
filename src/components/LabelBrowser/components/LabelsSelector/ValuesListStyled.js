
import styled from '@emotion/styled'


const ValuesListStyled = styled.div`
    background: ${(props) => props.theme.widgetContainer};

    .valuesList {
        transition: 0.2s all;
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        flex-direction: column;
        font-size: 13px;
        margin: 5px 0px;
        border-radius: 4px;
        transition: 0.2s all;
        .valuelist-title {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: space-between;
            font-size: 1em;
            flex: 1;
            margin: 5px;
        }
        .valuelist-content {
            display: flex;
            font-size: 14px;
            align-items: center;
            flex-wrap: wrap;
            max-height: 500px;
            overflow: auto;
        }
        .valuelist-filter {
            display: flex;
            flex: 1;
            flex-direction: column;

            .valuelist-filter-title {
                font-size: 0.75em;
            }
            input {
                color: white;
                background: $black-quoise;
                padding: 6px 3px;
                border-radius: 4px;
                flex: 1;
                margin: 0px 3px;
                outline: none;
                border: none;
            }
        }
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: $grey-light;
        }
    }

    .valuelist-content {
        small {
            color: ${(props) => props.theme.textColor};
            background: ${(props) => props.theme.buttonDefault} !important;
            border: 1px solid ${(props) => props.theme.buttonBorder};
            margin: 2px;
            padding: 3px 6px;
            border-radius: 3px;
            line-height: 1.5;
            font-size: 12px;
            cursor: pointer;
            align-items: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 23ch;
            transition: 1s all;
            &:hover {
                background: ${({ theme }) => theme.buttonHover};
            }
        }
    }

    button {
        color: ${(props) => props.theme.textColor};
        background: ${(props) => props.theme.buttonDefault} !important;
        border: 1px solid ${(props) => props.theme.buttonBorder} !important;
        padding: 13px 8px;
        &:hover {
            background: ${(props) => props.theme.buttonHover};
        }
    }
    .values-container {
        .values-container-column {
            display: flex;
            max-width: 100%;
            .values-column {
                margin: 5px;
                border-radius: 3px;
                height: auto;
                min-height: 100px;
                min-width: 175px;
                flex: 1;
                .column {
                    max-height: 350px;
                    &::-webkit-scrollbar {
                        width: 10px;
                        color: #58585898;
                        background: #ffffff1f;
                    }
                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background: $grey-light;
                    }
                }
                .values-column-title {
                    padding: 8px;
                    font-size: 1em;
                    border-radius: 4px 4px 0px 0px;
                    display: flex;
                    flex: 1;
                    transition: 0.2s all;

                    justify-content: space-between;

                    .close-column {
                        align-self: flex-end;
                        justify-self: end;
                        cursor: pointer;

                        padding: 2px;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        font-size: 10px;
                        &:hover {
                            background: $dark-quoise-hover;

                            color: black;
                        }
                    }
                }
            }
        }
        .values-column {
            background: ${(props) => props.theme.buttonHover};
        }
        .values-column-title {
            color: ${(props) => props.theme.textColor};
            background: ${(props) => props.theme.historyRow};
            border-bottom: 2px solid ${(props) => props.theme.widgetTitleBorder};
        }
    }
`;

export default ValuesListStyled;