<template>
  <v-container class="main-container">
      How many pizzas do you want to make?
      <v-text-field v-model="pizzaCount"
                    class="pizza-count-field"
                    type="number"
                    :prepend-icon="`mdi-minus`"
                    @click:prepend="changePizzaCount(false)"
                    :append-icon="`mdi-plus`"
                    @click:append="changePizzaCount(true)"
                    :variant="variant"/>

      <div>
        <table class="ingredient-table">
          <tr class="table-row" v-for="i in ingredients">
            <td class="table-column">{{ i.name }}</td>
            <td class="table-column">{{ i.baseGrams * pizzaCount }}</td>
          </tr>
        </table>
      </div>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'

const pizzaCount = ref(1)
const variant = 'outlined'
// 197 grams flour, 128 grams water, 1 gram yeast, 4 grams salt, 2 grams oil, 2 grams sugar
const ingredients = [
  { name: 'Flour', baseGrams: 197 },
  { name: 'Water', baseGrams: 128 },
  { name: 'Yeast', baseGrams: 1 },
  { name: 'Salt', baseGrams: 4 },
  { name: 'Oil', baseGrams: 2 },
  { name: 'Sugar', baseGrams: 2 },
]

function changePizzaCount(increase) {
  if(increase) {
    this.pizzaCount++
  } else if(this.pizzaCount !== 1) {
    this.pizzaCount--
  }
}

</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center
}

.pizza-count-field {
  width: 200px;
  margin-top: 20px;
}

.ingredient-table {
  border: solid 1px #ABABAB;
  border-radius: 10px;
}

.table-row {
  height: 40px;
}

.table-column {
  min-width: 100px;
}
</style>
