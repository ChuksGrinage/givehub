import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid"

import { Header, Footer } from 'component'


const useStyles = makeStyles(theme => ({
	mainLayout: {
		backgroundColor: theme.palette.secondary.main,
		flexGrow: '1'
	}
}));

export default ({ children }) => {
	const classes = useStyles();
	return (
		<Grid className={classes.mainLayout} container direction='column'>
			<Grid item>
				<Header />
			</Grid>
			<Grid style={{ padding: '0 10em'}} item>
				{children}
			</Grid>
			<Grid item>
				<Footer />
			</Grid>
		</Grid>
	)
}
