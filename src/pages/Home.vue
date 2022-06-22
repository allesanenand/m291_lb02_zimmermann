<template>

  <div class="bg">

    <MyVueDirectives/>
    <h1 class="title">Pizzeria Da Mario</h1>
    <br><br><br>
  </div>

</template>

<script>
import VueDirective from "../components/VueDirectives"

export default {
  name: 'app',
  components: {
    MyVueDirectives: VueDirective

  }
}
</script>


<style>
.bg {
  background-image: url("../assets/bg.jpg"); /* The image used */

  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh !important; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border: transparent 1px solid;
  filter: grayscale(40%);
}



</style>