<template>

  <div class="app-container">
    <div id="app">
      <div id="nav">
        <ul>
          <li><router-link to="/home">&#x1f355;</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/wishlist">Wunschpizza</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
        </ul>
      </div>
      <router-view/>

    </div>
      <MyNavigation/>
      <MyComponent/>
      <MyWatchers/>

    <div class="footer">
      <p> © 2022 - Nico Zimmermann</p>
    </div>



  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';

ul {
  margin: 0 !important;
}
footer {
  text-align: center;
  padding: 3px;
  background-color: black;
  color: white;
}

p {
  margin: 0 !important;
  text-align: center;
}

.app-container {
  height: 100%;
}
</style>



