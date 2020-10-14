<template>
    <header class="header">
        <div id="nav">
            
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About Us</router-link> | 
            <router-link to="/join">Join</router-link> | 
            <router-link to="/resources">Resources</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

#logo {
    
    display: inline-block;
    text-align: center;

}


.header {
    background: #333;
    color: #fff;
    
    padding: 10px;
}

.header a {
    color: #fff;
    padding-left:10px;
    padding-right:10px;
}

#nav {
  text-align: right;
  padding: 16px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #292cdf;
}


</style>


