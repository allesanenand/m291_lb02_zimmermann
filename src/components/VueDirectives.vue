<template>
  <div>
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <br><br>
    <a
      @click="gotoShop()"
      :class="link.html"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      mytext: ' ',
      // v-html
      myhtml: '',
      // v-bind
      link: {
        url: 'shop',
        tabindex: '0',
        title: 'Jetzt Pizza bestellen'
      },
    }
  },
  methods: {
    gotoShop(){
      this.$router.push('/shop');
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {

  display: block;
  margin-top: 70px;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: white!important;
  background-color: rgba(0,0,0,0);
}

a:hover{
  color: #333333!important;
}

</style>
