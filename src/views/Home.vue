<template>
	<div class="home">
		<Header />
		<h1>Home page: Welcome user</h1>
		<Users />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/Header';
import Users from '@/components/Users'

export default {
	name: 'Home',
	components: {
		Header,
		Users
	},
};
</script>
