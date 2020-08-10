import style from './index.module.css';
import { useForm } from 'react-hook-form';
import { Input, FormLabel, Button } from '@material-ui/core';

export default function () {

	const { register, handleSubmit, errors } = useForm();
	// const {isShowing, toggle} = useModal();
	function onSubmit(data) {
		console.log(data)
	}
	return (

		<div className={style.input}>
			<FormLabel htmlFor="firstName">First Name:</FormLabel>
			<Input ref={register({ required: 'First name is required' })} type="text" placeholder="First Name" name="firstName" id='firstName' />
			<FormLabel htmlFor="lastName">Last Name: </FormLabel>
			<Input ref={register({ required: 'Last name is required' })} type="text" placeholder="last Name" name="lastName" id='lastName' />
			<FormLabel htmlFor='email'>Email:</FormLabel>
			<Input ref={register({ required: 'Email is required' })} type="email" placeholder="Email" name="email" id='email' />
			<FormLabel htmlFor='phone'>Phone:</FormLabel>
			<Input ref={register({ required: 'Phone number is required' })} type="phone" placeholder="Phone" name="phone" id='phone' />
			<FormLabel htmlFor='website'>Website URL</FormLabel>
			<Input ref={register({ })} type="text" placeholder="www.example.com" name="website" id='website' />
			<Input ref={register({required: "info required"})} multiline rows={5} type="text" placeholder='Description' name='description' id='description' />
			<Button type="submit" >Submit</Button>
			<div style={{ marginTop: '2.5em' }}>

			</div>
		</div>


	)
}