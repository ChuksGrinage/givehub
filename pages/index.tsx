import Head from 'next/head'
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// import { Main } from 'next/document'
import websiteSvg from 'assets/website.svg';
import presentSvg from 'assets/present.svg';
import contactSvg from 'assets/contact.svg';
import workSvg from 'assets/work.svg';
import { MainLayout } from 'layout'
import { ContactCard } from 'component';

import DoneIcon from '@material-ui/icons/Done';



const useStyles = makeStyles(theme => ({
	banner: {
		paddingTop: '10em',
		marginBottom: '18em',
	},
	button: {
		...theme.actionButton,
		marginTop: '1rem'
	},
	formInput: {
		// fontFamily: 
	},
	ourStory: {
		backgroundColor: theme.palette.primary.main,
		border: '1px solid black'
	},
	ourStoryText: {
		color: theme.palette.secondary.main,
		fontSize: '1.5rem',
	},
	processSteps: {},
	form: {
		backgroundColor: theme.palette.secondary.main,
		padding: '2em',
		height: '60em'
	}
}));

// style={{ padding: '2em', height: '50em' }}

export default function App() {
	const { register, handleSubmit, errors } = useForm();
	const classes = useStyles();

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<MainLayout>
			<Grid className={classes.banner} container>
				<Grid xs={12} sm={6} item>
					<Typography noWrap variant='h2'>
						Let's help <br />
						get your <br />
						business online!
					</Typography>
					<Typography style={{ width: '50%' }} variant='subtitle1'>
						Welcome to GiveHub a local team of developers that works to help small businesses establish an online presence!
					</Typography>
					<Button href="#contact" className={classes.button}>Let's Talk!</Button>
				</Grid>
				<Grid xs={12} sm={6} item>
					<img style={{ width: '100%' }} src={websiteSvg} />
				</Grid>
			</Grid>


			<Grid style={{ marginBottom: '15em' }} container direction='column' >
				<Grid item>
					<Typography align='center' variant='h4'>Meet The Squad</Typography>
				</Grid>
				<Grid spacing={10} item container className={classes.team}>
					<Grid item xs={6}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={6}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={12}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
				</Grid>
			</Grid>


			<Grid spacing={10} style={{ marginBottom: '15rem', padding: '0 15em' }} container direction='column'>
				<Grid item>
					<Typography variant='h4' align='center'>Our Story</Typography>
				</Grid>
				<Grid className={classes.ourStory} spacing={5} direction='column' item container>
					<Grid xs item>
						<Typography align='center' className={classes.ourStoryText}>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
						</Typography>
					</Grid>
					<Grid xs item>
						<Typography align='center' className={classes.ourStoryText}>^_^</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid direction='column' container>
				<Grid item>
					<Typography variant='h4'>Application Process:</Typography>
				</Grid>

				<Grid alignItems='center' item container spacing={5}>

					<Grid item xs>
						<Paper className={classes.form} elevation={10}>
							<form style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }} onSubmit={handleSubmit(onSubmit)}>
								<TextField className={classes.formInput} id='firstName' label='First Name' variant='outlined' />
								<TextField className={classes.formInput} id='lastName' label='Last Name' variant='outlined' />
								<TextField className={classes.formInput} id='email' label='Email' variant='outlined' />
								<TextField className={classes.formInput} type='phone number' id='phone' label='Phone Number' variant='outlined' />
								<FormControl component="fieldset">
									<FormLabel component="legend">Do you already have a website?</FormLabel>
									<RadioGroup defaultValue='no' aria-label="website" name="website">
										<FormControlLabel value="no" control={<Radio />} label="No" />
										<FormControlLabel value="yes" control={<Radio />} label="Yes" />
									</RadioGroup>
								</FormControl>
								<TextField disabled className={classes.formInput} id='website' label='Website' variant='outlined' />
								<Button type='submit' className={classes.button}>Submit</Button>
								<DoneIcon color='palette.success' fontSize='large' />
								<Typography align='center' variant='h5'>Submission successful! Thank You!</Typography>
							</form>
						</Paper>
					</Grid>


					<Grid xs spacing={5} container direction='column' item>
						<Grid spacing={5} alignItems='center' xs item container>
							<Grid xs item>
								<img style={{ width: '100%' }} src={contactSvg} />
							</Grid>
							<Grid xs item>
								<Typography variant='h3'>Step One: Apply</Typography>
								<Typography variant='body2'>Fill out the form and our team will review the application to see if the project is a good fit and we will reachout to you with a response.</Typography>
							</Grid>
						</Grid>

						<Grid spacing={5} alignItems='center' xs item container>
							<Grid xs item>
								<Typography variant='h3'>Step Two: Planning</Typography>
								<Typography variant='body2'>We meet up in-person (or online) to better guage your needs and how we can best meet them. We'll discuss the tools and cost that would be necessary for your website.</Typography>
							</Grid>
							<Grid xs item>
								<img style={{ width: '100%' }} src={presentSvg} />
							</Grid>
						</Grid>

						<Grid spacing={5} alignItems='center' xs item container>
							<Grid xs item>
								<img style={{ width: '100%' }} src={workSvg} />
							</Grid>
							<Grid xs item>
								<Typography variant='h3'>Step Three: Production</Typography>
								<Typography variant='body2'>We get started with website and keep you in the loop.</Typography>
							</Grid>
						</Grid>

						<Grid spacing={5} alignItems='center' xs item container>
							<Grid xs item>
								<Typography variant='h3'>Step Four: Delivery</Typography>
								<Typography variant='body2'>And it's done! Your new site is here and you can now impress all your clients with your flashy new webiste! =)</Typography>
							</Grid>
							<Grid xs item>
								<img style={{ width: '100%' }} src={workSvg} />
							</Grid>
						</Grid>
					</Grid>


				</Grid>
			</Grid>
		</MainLayout>
	)
}



{/* <label htmlFor="firstName">First Name:</label>
<input ref={register({ required: 'First name is required' })} type="text" placeholder="First Name" name="firstName" id='firstName' />
<label htmlFor="lastName">Last Name:</label>
<input ref={register({ required: 'Last name is required' })} type="text" placeholder="last Name" name="lastName" id='lastName' />
<label htmlFor='email'>Email:</label>
<input ref={register({ required: 'Email is required' })} type="email" placeholder="Email" name="email" id='email' />
<label htmlFor='phone'>Phone:</label>
<input ref={register({ required: 'Phone number is required' })} type="phone" placeholder="Phone" name="phone" id='phone' />
<label htmlFor='website'>Website URL:</label>
<input ref={register({ required: 'Website url is required' })} type="text" placeholder="www.example.com" name="website" id='website' />
<button type="submit">Submit</button> */}