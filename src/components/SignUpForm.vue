<template>
  <form @submit="signUp">
    <div class="row form">
      <div class="col">
        <input
          type="text"
          v-model="firstName"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <!--  -->
      <div class="col">
        <input
          type="text"
          v-model="lastName"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <!--  -->
      <div class="col">
        <input
          type="email"
          v-model="email"
          class="form-control"
          placeholder="E-mail"
          aria-label="E-mail"
        />
      </div>
      <!--  -->
      <div class="col">
        <input
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
      <!--  -->
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'signUpForm',
	data() {
		return {
      
      firstName: '',
      lastName: '',
      email: '',
      password: ''
      
		};
	},

	methods: {
    ...mapActions(['registerUser']),
		signUp(e) {
			e.preventDefault();
			const newUser = {
				firstname: this.firstName,
				lastname: this.lastName,
				email: this.email,
				password: this.password,
			};
      this.registerUser(newUser);
      
      
			e.target.reset()
		},
	},
};
</script>

<style scoped>
</style>
