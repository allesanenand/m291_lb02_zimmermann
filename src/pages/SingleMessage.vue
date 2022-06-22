<template>
  <main>
  <div>

    <h1>{{$route.params.content.frage}}</h1>
    {{$route.params.content.antwort}}
  </div>
  </main>
</template>

<script>
export default {
  name: "SingleMessage"
}
</script>


