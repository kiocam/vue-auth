<template>
	<div>
		<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<!-- <a class="navbar-brand" href="#">Navbar</a> -->
				<router-link class="navbar-brand" to="/">Home</router-link>
				<ul class="nav justify-content-end">
					<li class="nav-item">
						<!-- <a class="nav-link" href="#">Link</a> -->
						<router-link class="nav-link" to="/sign-up">Register</router-link>
					</li>
					<li class="nav-item">
						<!-- <a class="nav-link" href="#">Link</a> -->
						<router-link class="nav-link" to="/login">Login</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'header',
};
</script>

<style scoped></style>

<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/sign-up">Signup</router-link>
    </div>
