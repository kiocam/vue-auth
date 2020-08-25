<template>
  <form @submit="login">
    <div class="row form">
      <div class="col">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="E-mail"
          aria-label="E-mail"
          name="email"
        />
      </div>
      <!--  -->
      <div class="col">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          name="password"
        />
      </div>
      <!--  -->
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'loginForm',

  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: mapGetters(['isAuthenicated']),

  methods: {
    ...mapActions(['loginUser']),
    login(e) {
      e.preventDefault();
      const credentials = {
        email: this.email,
        password: this.password
      }
      this.loginUser(credentials)
      
      if (this.isAuthenicated) {
        this.$router.replace({name: 'Home'})
      } else {
        console.log('incorret credentials!!')
      }	
    }
  }
};
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
</style>