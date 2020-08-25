<template>
	<div>
		<Header />
		<h1>Welcome Please Sign up</h1>
		<SignUpForm v-on:signUp="addUser" />
	</div>
</template>

<script>
import Header from '@/components/layout/Header';
import SignUpForm from '@/components/SignUpForm';
import axios from 'axios'

export default {
	name: 'Signup',
	components: {
		Header,
		SignUpForm,
	},

	data() {
		return {
			users: [],
		};
	},

	methods: {
		addUser(user) {
			const { firstname, lastname, email, password } = user
			axios.post('http://192.168.2.12:3000/register', {
				firstname, lastname, email, password
			})
			.then((res) => (this.users = [...this.users, res.data]))
			.cathc((err) => console.log(err))
		},
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
	margin-top: 30px;
}
</style>
