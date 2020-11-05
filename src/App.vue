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
      <a>Github Respository</a>
    </p>
  </div>
</template>

<style>
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
  }

  #nav-section {
  width: 30%;
  margin: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
</style>
