<template>
  <div id="app">
    <div id="nav">
      <div id="nav-section">
        <router-link to="/dogfacts">Dogs</router-link>
        <router-link to="/" id="home">Animal Facts</router-link>
        <router-link to="/catfacts">Cats</router-link>
      </div>
    </div>
    <router-view/>
    <hr />
    <p>
      <a href="https://github.com/jaredbarker/creativeproject3.git">Github Respository</a>
    </p>
  </div>
</template>

<style>

  @media only screen and (max-width: 1200px) {
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  #nav {
  background-color:#2c3e50;
  display: flex;
  justify-content: center;
  }

  #nav-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  }

  #nav a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
  }

  a {
  margin-bottom:5px;
  margin-top:5px;
  font-size: 20px;
  }

  #home {
  font-size: 30px;
  }

  #nav a.router-link-exact-active {
  color: #42b983;
  }
  }


  @media only screen and (min-width: 1201px) {
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  #nav {
  padding: 30px;
  background-color:#2c3e50;
  display: flex;
  justify-content: center;
  }

  #nav-section {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  #nav a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
  }

  a {
  margin-left:5px;
  margin-right:5px;
  font-size: 20px;
  }

  #home {
  font-size: 30px;
  }

  #nav a.router-link-exact-active {
  color: #42b983;
  }
  }
</style>
