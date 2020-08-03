import Head from 'next/head'
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import { Main } from 'next/document'
import websiteSvg from 'assets/website.svg';
import presentSvg from 'assets/present.svg';
import contactSvg from 'assets/contact.svg';
import workSvg from 'assets/work.svg';
import { MainLayout } from 'layout'
import { ContactCard } from 'component';



const useStyles = makeStyles(theme => ({
	banner: {
		height: '100vh',
		paddingTop: '10em'
	},
	button: {
		...theme.actionButton,
		marginTop: '1rem'
	},
	team: {
		// display: 'flex',
		flex: '1',
		// justifyContent: 'space-',
		// alignContent: 'flex-end',
		// ":nth-child(even)": {
		// 	alignItems: 'flex-end'
		// }
	},
	coloredText: {
		// backgroundColor: theme.palette.primary.main,
		marginTop: '2em',
		textAlign: 'center',
		fontSize: '2rem',
		fontWeight: 'bold'
	}
}));

export default function App() {
	const { register, handleSubmit, errors } = useForm();
	const classes = useStyles();

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<MainLayout>
			<Grid className={classes.banner} container>
				<Grid xs={6} item>
					<Typography variant='h2'>
						Let's help <br />
						get your <br />
						business online!
					</Typography>
					<Typography style={{ width: '50%' }} variant='subtitle1'>
						Welcome to GiveHub a non-profit organization that works to help small businesses establish an online presence!
					</Typography>
					<Button className={classes.button}>Let's Talk!</Button>
				</Grid>
				<Grid xs={6} item>
					<img style={{ width: '100%' }} src={websiteSvg} />
				</Grid>
			</Grid>
			<Grid container direction='column' style={{ height: '100vh' }}>
				<Grid item>
					<Typography align='center' variant='h4'>Meet The Squad</Typography>
				</Grid>
				<Grid item container className={classes.team}>
					<Grid item xs={4}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={4}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={4}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					{/* <ContactCard name='Sherry Yang' title='Front-end Guru' />
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
						<ContactCard name='Sherry Yang' title='Front-end Guru' /> */}
				</Grid>
			</Grid>
			<Grid container direction='column' style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h4' align='center'>Our Story</Typography>
				</Grid>
				<Grid style={{ padding: '0 10em' }} container item direction='column'>
					{/* <Typography variant='body1'>previosuly on GiveHub...</Typography> */}
					<Typography align='center' variant='body1'>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
						</Typography>
					<div className={classes.coloredText}>^_^</div>
					{/* <Typography>to be continued...</Typography> */}
				</Grid>
			</Grid>
			<Grid container direction='column' style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h4' align='center'>How it works</Typography>
				</Grid>
				<Grid style={{flex: '1'}} spacing={10} container item>
					<Grid xs={4} item>
						<img style={{ width: '100%' }} src={contactSvg} />
						<Typography variant='h3'>Contact:</Typography>

						<Typography>Fill out the form and our team will review tha application to seem if the project is a good fit.</Typography>
						
					</Grid>
					<Grid xs={4} item>
						<img style={{ width: '100%' }} src={presentSvg} />
					</Grid>
					<Grid xs={4} item>
						<img style={{ width: '100%' }} src={workSvg} />
					</Grid>
				</Grid>
				{/* <Grid item>
					<Paper style={{ padding: '2em'}} elevation={10}>
					<Typography variant='h4'>Contact form:</Typography>
					<Typography variant='body1'>Fill out the form and our team will consider the request and get back to you with a response</Typography>
					<form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="firstName">First Name:</label>
				<input ref={register({ required: 'First name is required' })} type="text" placeholder="First Name" name="firstName" id='firstName' />
				<label htmlFor="lastName">Last Name:</label>
				<input ref={register({ required: 'Last name is required' })} type="text" placeholder="last Name" name="lastName" id='lastName' />
				<label htmlFor='email'>Email:</label>
				<input ref={register({ required: 'Email is required' })} type="email" placeholder="Email" name="email" id='email' />
				<label htmlFor='phone'>Phone:</label>
				<input ref={register({ required: 'Phone number is required' })} type="phone" placeholder="Phone" name="phone" id='phone' />
				<label htmlFor='website'>Website URL:</label>
				<input ref={register({ required: 'Website url is required' })} type="text" placeholder="www.example.com" name="website" id='website' />
				<button type="submit">Submit</button>
					</form>
						
						</Paper>
				</Grid> */}
			</Grid>
		</MainLayout>
	)
}
