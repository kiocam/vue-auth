<template>
	<div>
		<Header />
		<h1>Login Here</h1>
		<LoginForm />
	</div>
</template>

<script>
import Header from '@/components/layout/Header';
import LoginForm from '@/components/LoginForm';

export default {
	name: 'Login',
	components: {
		Header,
		LoginForm,
	},
	data() {
		return {
			users: [],
		};
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
	margin-top: 30px;
}
</style>
