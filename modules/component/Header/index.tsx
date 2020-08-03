import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from '@material-ui/core/styles';

const links = ['Home', 'Portfolio', 'About Us', 'Contact Us']

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const useStyles = makeStyles(theme => ({
	header: {
		// padding: '1em 10em',
		background: 'transparent'
	},
	tabsCtnr: {
		display: 'flex',
		justifyContent: 'space-between',
		'& > *': {
			marginLeft: '5em',
			textTransform: 'uppercase'
		}
	},
	button: {
		...theme.actionButton,
		marginLeft: '2em'
	},
	tabs: {
		...theme.tabs,
		marginLeft: '2em',
		color: theme.palette.common.black
	}
}));

const Header = () => {
	const classes = useStyles();
	// TODO: MAKE HEADER COLOR WHITE OR MAYBE BUTTON LINEAR GRADIENT COLOR ON SCROLL
	// TODO: MAKE NAVIGATION FUNCTIONAL
	return (
		<ElevationScroll>
			<div style={{ flex: '1' }}>
				<AppBar elevation={0} position="static" className={classes.header}>
					<Toolbar style={{ padding: '0' }}>
						<div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
							<Typography variant="h5">
								GiveHub
          		</Typography>
							<Button className={classes.button}>Apply Now!</Button>
						</div>
						{/* <Button color="inherit">Login</Button> */}
						{links.map(link => <Button className={classes.tabs} key={link}>{link}</Button>)}
					</Toolbar>
				</AppBar>
			</div>
		</ElevationScroll>
	)
}

export default Header;



{/* // <Grid className={classes.header} justify='space-between' container>
		// 	<Grid item>
		// 		<Typography variant='h5'>.issashade</Typography>
		// 	</Grid>
		// 	<Grid className={classes.tabsCtnr} item>
		// 		<Typography variant='subtitle2'>Home</Typography>
		// 		<Typography variant='subtitle2'>Portfolio</Typography>
		// 		<Typography variant='subtitle2'>About</Typography>
		// 		<Typography variant='subtitle2'>Contact</Typography>
		// 	</Grid>
		// </Grid> */}