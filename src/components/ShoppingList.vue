<template>
  <div class="container">
    <h2>Create your own Pizza</h2>
    <div class="user-input">
      <input
          placeholder="Zutaten mit Enter hinzufügen"
          v-model="input"
          @keyup.enter="addItem"
          ref="input"
      /><button @click="addItem">Zur Pizza hinzufügen</button>
    </div>

    <ul class="displaylist" v-if="shoppingList">
      <li v-for="item in shoppingList" :key="item" class="item"
      ><span>{{ item }}<br></span>
        <button class="button--remove" @click="deleteItem(item)">Entfernen</button>
      </li><br><br><br>
    </ul>
    <br />
    <button class="button--delete" @click="deleteItem()">alles löschen</button><br><br>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      shoppingList: [],
    }
  },
  methods: {
    addItem() {
      // Don't allow adding to the list if empty
      if (!this.input) return
      this.shoppingList.push(this.input)
      // Clear the input after adding
      this.input = ''
      // Focus the input element again for quick typing!
      this.$refs.input.focus()
    },
    deleteItem(item) {
      //only for info purposes
      let index = this.shoppingList.indexOf(item);
      console.log(`item: ${item} at index: ${index}`);
      //no parameter provided ..
      if (item == null){
        //.. deleteAll has been pressed
        this.shoppingList = [];
      } else {
        //assign filtered shopping list without deleted item
        this.shoppingList = this.shoppingList.filter(el => el !== item);
      }
    },
    deleteItem_v2(i) {
      if (i == null) {
        this.shoppingList = []
      } else {
        this.shoppingList = this.shoppingList.filter((item,el) => el !== i);
      }
    },
  },
}
</script>

<style lang="scss">
$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

.displaylist {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>
