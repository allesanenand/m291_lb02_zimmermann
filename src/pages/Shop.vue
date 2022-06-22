<template>
  <main>
  <div>
    <h1>Shop</h1>
    <div class="productdesign"><MyProducts/></div><br><br>
    <div class="cartdesign"><MyCart/></div> <br><br>
    <div class="checkoutdesign"><MyCheckout/></div>




    <br><br><br><br>
  </div>
  </main>
</template>


<script>
import Products from './../components/Products'
import Cart from './../components/Cart'
import Checkout from './../components/Checkout'

export default {
  name: 'app',
  components:{
    MyProducts: Products,
    MyCart: Cart,
    MyCheckout: Checkout


  }
}
</script>