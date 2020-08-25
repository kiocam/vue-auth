<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
	name: 'App'
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 120px;
}
</style>
