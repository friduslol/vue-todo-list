<template>
  <div id="app">
    <!-- Här tankar vi in navlistan och navigering, detta ska synas/fungera på alla views därför ligger det här-->
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "../src/components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>

<style>

* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body {
  background: url("https://files.wallpaperpass.com/2019/10/darth%20vader%20wallpaper%2049%20-%201920x1080.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  color: #ff3333;
  margin-top: 3rem;
  text-align: center;
}

</style>
