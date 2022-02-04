import React, { useState, useEffect } from 'react';
import {
	Paper,
	Grid,
	Typography,
	Divider,
	IconButton,
	createTheme,
	ThemeProvider
} from "@mui/material";
import { withStyles, createStyles } from '@mui/styles'
import { format, differenceInCalendarMonths, isValid, isDate } from "date-fns";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Month from "./Month";
import Ranges from "./Ranges";
import CloseIcon from '@mui/icons-material/Close';
import { MARKERS } from "../consts";
import { useDispatch, useSelector } from "react-redux";
import { setStartTime, setStopTime } from "../../../actions";

const styles = (theme) =>
	createStyles({
		header: {
			padding: "10px 35px"
		},
		headerItem: {
			flex: 1,
			textAlign: "center"
		},
		divider: {
			borderLeft: `1px solid action`,
			marginBottom: 20
		},
		container: {

			position: 'absolute',
			zIndex: 1000,
			top: 95,
			right: 10

		},
		applyButton: {
			color: '#11abab',
			background: '#5454543b',
			border: '1px solid #11abab',
			padding: '3px 6px',
			borderRadius: '3px',
			marginLeft: '3px',
			cursor: 'pointer'
		}
	});

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
})
const PickerNav = props => {
	const {
		classes,
		ranges,
		dateRange,
		minDate,
		maxDate,
		firstMonth,
		setFirstMonth,
		secondMonth,
		setSecondMonth,
		setDateRange,
		helpers,
		handlers
	} = props;

	const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
	const commonProps = { dateRange, minDate, maxDate, helpers, handlers };
	const startTs = useSelector((store) => store.start);
	const stopTs = useSelector((store) => store.stop);
	const dispatch = useDispatch()
	const [editedStartDate, setEditedStartDate] = useState(dateRange.dateStart)
	const [editedEndDate, setEditedEndDate] = useState(dateRange.dateEnd)
	
	
	useEffect(() => {
		setEditedStartDate(startTs)
	}, [startTs])

	useEffect(() => {
		setEditedEndDate(stopTs)
	}, [stopTs])



	const handleStopInputChange = (event) => {
	event.preventDefault()
	const value = event.target.value

	setEditedEndDate(value)

	}
	const handleStartInputChange = (event) => {
		event.preventDefault()
		const value = event.target.value
	
		setEditedStartDate(value)
	
		}


	const onTimeRangeSet = (e) => {
		e.preventDefault()
		
		const startDate = new Date(editedStartDate)
		const endDate = new Date(editedEndDate)
	
		if (isDate(startDate)) {

			dispatch(setStartTime(startDate));
		}

		if (isValid(endDate)) {
			dispatch(setStopTime(endDate));
		}

	}
	const getEditedStartDate = () => {
		return isValid(editedStartDate) ? format(editedStartDate, 'yyy-MM-dd HH:mm:ss') : editedStartDate
	}
	const getEditedEndDate = () => {
		return isValid(editedEndDate) ? format(editedEndDate, 'yyy-MM-dd HH:mm:ss') : editedEndDate
	}
	return (
		<ThemeProvider theme={theme}>

			<Paper
				className={classes.container}
				elevation={5} >
				<Grid container direction="row" wrap="nowrap">
					<Grid>
						<Grid container>
							<Grid item>
								<IconButton

									onClick={props.onClose}
									aria-label="close">
									<CloseIcon />
								</IconButton>

								<input

									value={getEditedStartDate()}
									onChange={handleStartInputChange}
								/>

								<input
									value={getEditedEndDate()}
									onChange={handleStopInputChange}

								/>
								<button
									className={classes.applyButton}
									onClick={onTimeRangeSet}

								>Apply Time Range</button>
							</Grid>

						</Grid>


						<Grid container className={classes.header} alignItems="center">
							<Grid item className={classes.headerItem}>
								<Typography

									variant="subtitle1">
									{dateRange?.dateStart && isValid(dateRange?.dateStart) ? format(dateRange?.dateStart, "MMMM dd, yyyy") : "Start Date"}
								</Typography>
							</Grid>
							<Grid item className={classes.headerItem}>
								<ArrowRightAlt />
							</Grid>
							<Grid item className={classes.headerItem}>
								<Typography

									variant="subtitle1">
									{dateRange?.dateEnd && isValid(dateRange?.dateEnd) ? format(dateRange?.dateEnd, "MMMM dd, yyyy") : "End Date"}
								</Typography>
							</Grid>
						</Grid>
						<Divider />
						<Grid container direction="row" justifyContent="center" wrap="nowrap">
							<Month
								{...commonProps}
								value={firstMonth}
								setValue={setFirstMonth}
								navState={[true, canNavigateCloser]}
								marker={MARKERS.FIRST_MONTH}
							/>
							<div className={classes.divider} />
							<Month
								{...commonProps}
								value={secondMonth}
								setValue={setSecondMonth}
								navState={[canNavigateCloser, true]}
								marker={MARKERS.SECOND_MONTH}
							/>
						</Grid>
					</Grid>
					<div className={classes.divider} />
					<Grid>
						<Ranges
							selectedRange={dateRange}
							ranges={ranges}
							setRange={setDateRange}
						/>
					</Grid>
				</Grid>
			</Paper>

		</ThemeProvider>
	);
};

export default withStyles(styles)(PickerNav);