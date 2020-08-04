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
	root: {
		flexGrow: 1,
		
	},
	banner: {
		
		paddingTop: '10em',
		marginBottom: '18em'
	},
	button: {
		...theme.actionButton,
		marginTop: '1rem'
	},
	item: {
		marginBottom: '5rem'
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
			<div className={classes.root}>
			<Grid className={classes.banner} container>
				<Grid xs={12} sm={6} item className={classes.item}>
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
			</div>
			<div className={classes.root}>
			<Grid container direction='column' >
				<Grid item>
					<Typography align='center' variant='h4'>Meet The Squad</Typography>
				</Grid>
				<Grid item container className={classes.team}>
					<Grid item xs={12} sm={4} className={classes.item}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={12} sm={4} className={classes.item}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					<Grid item xs={12} sm={4} className={classes.item}>
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
					</Grid>
					{/* <ContactCard name='Sherry Yang' title='Front-end Guru' />
						<ContactCard name='Sherry Yang' title='Front-end Guru' />
						<ContactCard name='Sherry Yang' title='Front-end Guru' /> */}
				</Grid>
			</Grid>
			<Grid container direction='column'>
				<Grid item style={{marginTop: '5rem'}}> 
					<Typography variant='h4' align='center'>Our Story</Typography>
				</Grid>
				<Grid style={{ padding: '0 10em' }}  item className={classes.item}>
					{/* <Typography variant='body1'>previosuly on GiveHub...</Typography> */}
					<Typography align='center' variant='body1'>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
						</Typography>
					<div className={classes.coloredText}>^_^</div>
					{/* <Typography>to be continued...</Typography> */}
				</Grid>
			</Grid>
			</div>
			<div id="#contact" className={classes.root}>
			<Grid  container direction='column' style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h4' align='center'>How it works</Typography>
				</Grid>
				<Grid style={{flex: '1'}} spacing={10} container item>
<<<<<<< HEAD
					<Grid xs={3} item>
						<img style={{ width: '100%' }} src={contactSvg} />
						<Typography variant='h3'>Step One: Apply</Typography>
						<Typography variant='body2'>Fill out the form and our team will review the application to see if the project is a good fit and we will reachout to you with a response.</Typography>
					</Grid>
					<Grid xs={3} item>
						<Typography variant='h3'>Step Two: Planning</Typography>
						<Typography  variant='body2'>We meet up in-person (or online) to better guage your needs and how we can best meet them.</Typography>
=======
					<Grid xs={12} sm={4} item>
						<img style={{ width: '100%' }} src={contactSvg} />
						<Typography variant='h3'>Contact:</Typography>

						<Typography>Fill out the form and our team will review tha application to determine if the project is a good fit.</Typography>
						
					</Grid>
					<Grid xs={12} sm={4} item>
>>>>>>> c7ac4281f22f8f17482642dc88d26624a9e9a007
						<img style={{ width: '100%' }} src={presentSvg} />
						
					</Grid>
<<<<<<< HEAD
					<Grid xs={3} item>
						<img style={{ width: '100%' }} src={workSvg} />
						<Typography variant='h3'>Step Three: Production</Typography>
						<Typography  variant='body2'>We get started with website and keep you in the loop.</Typography>
					</Grid>
					<Grid xs={3} item>
						<Typography variant='h3'>Step Four: Delivery</Typography>
						<Typography  variant='body2'>And it's done! Your new site is here and you can now impress all your clients with your flashy new webiste! =)</Typography>
=======
					<Grid xs={12} sm={4} item>
>>>>>>> c7ac4281f22f8f17482642dc88d26624a9e9a007
						<img style={{ width: '100%' }} src={workSvg} />
						<Typography>Our team will <b>prototype</b>, <b>develop</b> and <b>deploy</b> the site on a <b>low cost</b>, <b>zero maintaince</b> platform utilizing <b>modern technologies</b>.</Typography>
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
			</div>
		</MainLayout>
	)
}
