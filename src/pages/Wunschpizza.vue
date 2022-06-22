<template>
 <main>
  <div class="about">
    <h1>Wunschpizza erstellen {{$route.params.user}}</h1>


    <MyShoppinglist/>

  </div>
 </main>
</template>

<script>
import Shoppinglist from "../components/ShoppingList"

export default {
  name: 'app',
  components: {
    MyShoppinglist: Shoppinglist

  }
}
</script>

<style lang="scss">
//Import of global-style
@import '../styles/global';
</style>