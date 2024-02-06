import React, { useState } from "react";
import {
    DialogCancelButton,
    DialogConfirmButton,
} from "../queryhistory/styled";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    Tooltip,
    Typography,
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { ThemeProvider } from "@mui/styles";
import styled from "@emotion/styled";
import { DialogStyles } from "../settingsdialog/SettingsDialog";
import useTheme from "../../theme/useTheme";
import { queryUpdater } from "./helpers";
import useCardinalityStore from "./store/CardinalityStore";
import { QrynTheme } from "@ui/theme/types";

const AlertCont = styled.div`
    background: ${({ theme }: any) => theme.shadow};
    #alert-dialog-title {
        color: ${({ theme }: any) => theme.contrast};
        background: ${({theme}:any) => theme.deep};
        border: 2px solid ${({theme}:any) => theme.shadow};
        border-radius:8px;
        span {
            color: ${({ theme }: any) => theme.primary};
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
        }
    }
    #alert-dialog-description {
        color: ${({ theme }: any) => theme.lightContrast};
        font-weight: normal;
        em {
            color: ${({ theme }: any) => theme.contrast};
            font-variant: italic;
        }
    }
`;

export type CardinalityDialogProps = {
    clearFingerPrints: (query: string) => void;
    label: string;
    value: number;
    source: string;
    isLoading: boolean;
    isCustom?: boolean;
    query?: string;
    labelsRelated?: string[];
};

export type UndoCardinalityDialogProps = {
    undoAction: (id: string) => void;
    id: string;
    query: string;
    isLoading: boolean;
};

export type LabelRelatedProps = {
    label: string;
    theme: QrynTheme;
};
export function LabelRelated({ label, theme }: LabelRelatedProps) {
    return (
        <p
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px 10px",
                borderRadius: "3px",
                margin: "2px",
                fontWeight: "bold",
                color: theme.primary,
                background: theme.deep,
            }}
        >
            {label}
        </p>
    );
}

export function CheckboxWithLabel({
    label,
    checked,
    handleChange,
    theme,
    text,
}) {
    return (
        <FormGroup>
            <FormControlLabel
                style={{
                    padding: "0",
                    marginRight: 0,
                    cursor: !label ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                }}
                checked={checked}
                onChange={handleChange}
                control={
                    <Checkbox
                        style={{
                            paddingRight: "0px",
                            marginRight: "3px",
                        }}
                        sx={{
                            "& .MuiSvgIcon-root": {
                                fontSize: 18,
                            },
                        }}
                        disabled={!label}
                    />
                }
                label={
                    <Typography
                        style={{
                            fontSize: "14px",
                            color: theme.contrast,
                        }}
                    >
                        {text}
                    </Typography>
                }
            />
        </FormGroup>
    );
}

export default function CardinalityDialog({
    clearFingerPrints,
    label,
    value,
    source,
    isLoading,
    isCustom = false,
    query = "",
}: CardinalityDialogProps) {
    const [open, setOpen] = useState(false);
    const [confirmRemove, setConfirmRemove] = useState(false);
    const theme = useTheme();
    const { focusLabel, timeSeriesSelector: match } = useCardinalityStore();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setConfirmRemove((prev) => !prev);
    };
    async function handleClearFingerprints() {
        //

        let queryText = query ?? "";

        if (!isCustom) {
            queryText = queryUpdater[source]({
                query: label,
                focusLabel,
                match,
            });
        }

        await clearFingerPrints(queryText);

        // this should give a response from the server

        setOpen(false);
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Tooltip
                    title={`Delete fingerprints for ${
                        label !== "" ? label : query
                    }`}
                >
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <DeleteOutlineOutlinedIcon
                            onClick={handleClickOpen}
                            style={{
                                color: theme.contrast,
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                            fontSize={"small"}
                        />
                    </div>
                </Tooltip>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        classes: {
                            root: DialogStyles,
                        },
                    }}
                >
                    <AlertCont>
                        <DialogTitle id="alert-dialog-title">
                            {isCustom ? (
                                <>
                                    Are you sure you want to clear the{" "}
                                    <span>{value}</span> fingerprints with query{" "}
                                    {query}?
                                </>
                            ) : (
                                <>
                                    Are you sure you want to clear the{" "}
                                    <span>{value}</span> fingerprints with label{" "}
                                    <span>{label}</span> from{" "}
                                    <span>{source}</span>?
                                </>
                            )}
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <p style={{ marginTop: "10px" }}>
                                    Click <em>Delete Fingerprints</em> to delete
                                    your fingerprints permanently
                                </p>
                                <p style={{ margin: "6px" }}>
                                    <em>
                                        Note that you will also be removing all
                                        fingerprints with labels related.
                                    </em>
                                </p>

                                <CheckboxWithLabel
                                    checked={confirmRemove}
                                    handleChange={handleConfirm}
                                    theme={theme}
                                    label={true}
                                    text={
                                        "I want to remove all fingerprints related to this labels in selected time range."
                                    }
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <DialogCancelButton onClick={handleClose}>
                                Cancel
                            </DialogCancelButton>
                            <DialogConfirmButton
                                onClick={handleClearFingerprints}
                                active={!isLoading && confirmRemove}
                                autoFocus
                            >
                                {!isLoading
                                    ? "Delete Fingerprints"
                                    : "Deleting..."}
                            </DialogConfirmButton>
                        </DialogActions>
                    </AlertCont>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export function UndoCardinalityDialog({
    undoAction,
    id,
    isLoading,
    query = "",
}: UndoCardinalityDialogProps) {
    const [open, setOpen] = useState(false);
    const [confirmRemove, setConfirmRemove] = useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setConfirmRemove((prev) => !prev);
    };
    async function handleUndoFingerprints() {
        await undoAction(id);

        // this should give a response from the server

        setOpen(false);
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Tooltip title={`Undo Delete fingerprints for ${query}`}>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ReplayIcon
                            onClick={handleClickOpen}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: theme.primary,
                                cursor: "pointer",
                                height: "16px",
                                width: "16px",
                                // background:"#b8860b"
                            }}
                            fontSize={"small"}
                        />
                    </div>
                </Tooltip>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        classes: {
                            root: DialogStyles,
                        },
                    }}
                >
                    <AlertCont>
                        <DialogTitle id="alert-dialog-title">
                            <>
                                Are you sure you want to undo the delete action
                                for the query{" "}
                                <code
                                    style={{
                                        fontFamily: "monospace",
                                        fontSize: ".75em",
                                        padding: "4px 8px",
                                        borderRadius: ".5em",
                                        background: theme.shadow,
                                    }}
                                >
                                    {query}
                                </code>{" "}
                                ?
                            </>
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <p style={{ marginTop: "10px" }}>
                                    Click <em>Undo Delete Fingerprints</em> to
                                    undo the delete fingerprints action.
                                </p>

                                <CheckboxWithLabel
                                    checked={confirmRemove}
                                    handleChange={handleConfirm}
                                    theme={theme}
                                    label={true}
                                    text={
                                        "I want to undo deletion of all fingerprints related to this labels."
                                    }
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <DialogCancelButton onClick={handleClose}>
                                Cancel
                            </DialogCancelButton>
                            <DialogConfirmButton
                                onClick={handleUndoFingerprints}
                                active={!isLoading && confirmRemove}
                                autoFocus
                            >
                                {!isLoading
                                    ? "Undo Delete Fingerprints"
                                    : "Undoing..."}
                            </DialogConfirmButton>
                        </DialogActions>
                    </AlertCont>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}
