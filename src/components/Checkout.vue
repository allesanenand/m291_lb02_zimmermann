<template>
  <div class="">
    <br><br><br>
    <br><br>Deine Bestellung kostet {{ cartTotal.toFixed(2) }} CHF.   <br><br>
    <b-button class="checkoutbutton" variant="primary" v-show="cartTotal > 0" @click="checkout"><strong>Bezahlen</strong></b-button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Wir haben deine Bestellung erhalten.');
    }
  }
}
</script>