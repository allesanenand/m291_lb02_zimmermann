<template>
  <main>
  <div>
    <h1>FAQ</h1>
    <div class="rcorners1" v-for="(m, i) in messages" :key="i" >
      <router-link :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m.frage }}
      </router-link>
    </div>
</div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      messages: [
      {frage: 'Wie kann ich eine Pizza bestellen?', antwort: "Am besten bestellst du deine Pizza via unserer Webseite. Bei Fragen rufst du uns am besten in der Pizzeria unter 044 211 21 21 an."},
      {frage: "Kann ich meine Zutaten auch selbst wählen?", antwort: "Yes! Create your own Pizza - heisst unser Spezial-Service bei dem du deine eigene Zutaten auswählen kannst und somit deine Eigenkreation geniessen kannst."},
      {frage: "Wie kann ich bezahlen?", antwort: "Wir bieten alle gängigen Zahlungsmittel wie Kreditkarte, Twint und Bargeld an. "},
      ]
    }
  }
}
</script>


