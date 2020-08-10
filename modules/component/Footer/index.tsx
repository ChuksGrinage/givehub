import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		height: '15em',
		color: theme.palette.secondary.main,
		padding: '2em 10em',
		textAlign: 'center',
		marginTop: '10em'
	},
	socialMediaIcon: {
		transition: 'all .3s',
		'&:hover': {
			transform: 'scale(1.5) rotate(-25deg)'
		}
	}
}));


export default function() {
	const classes = useStyles();
	return (
		<Grid className={classes.footer} container>
			<Grid xs item>
				{/* Left */}
			</Grid>
			<Grid xs direction='column' spacing={3} container item>
				<Grid item>
					<Typography variant='h6'>Follow Us</Typography>
				</Grid>
				<Grid container item>
					<Grid className={classes.socialMediaIcon} xs item>
						<FacebookIcon fontSize='large' />
					</Grid>
					<Grid className={classes.socialMediaIcon} xs item>
						<GitHubIcon fontSize='large' />
					</Grid>
					<Grid className={classes.socialMediaIcon} xs item>
						<TwitterIcon fontSize='large' />
					</Grid>
					<Grid className={classes.socialMediaIcon} xs item>
						<LinkedInIcon fontSize='large' />
					</Grid>
				</Grid>
			</Grid>
			<Grid xs item>
				{/* Left */}
			</Grid>
		</Grid>
	)
}