<template>
   <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.navbar {
    background: #000000;
    padding: 1rem;
    text-align: center;
}

a {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0 1rem;
    text-decoration: none;
    transition: 0.3s;
    font-weight: bold;

}

a:hover {
    color: #a02d2d;
}

</style>