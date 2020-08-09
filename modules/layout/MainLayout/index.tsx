import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid"

import { Header } from 'component'


const useStyles = makeStyles(theme => ({
	mainLayout: {
		backgroundColor: theme.palette.secondary.main,
		flexGrow: '1',
		// color: theme.palette.common.black
		padding: '0 10rem'
	}
}));

export default ({ children }) => {
	const classes = useStyles();
	return (
		<Grid className={classes.mainLayout} container direction='column'>
			<Grid item>
				<Header />
			</Grid>
			<Grid item>
				{children}
			</Grid>
		</Grid>
	)
}
