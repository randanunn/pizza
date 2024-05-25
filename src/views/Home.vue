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
          <tr class="table-row font-weight-bold">
            <td class="table-column"></td>
            <td class="table-column">Aaron's Way (65%)</td>
            <td class="table-column">Testing (70%)</td>
          </tr>
          <tr class="table-row" v-for="i in ingredients">
            <td class="table-column">{{ i.name }}</td>
            <td class="table-column" v-for="r in recipes">
              <span v-if="i.key === 'hydration'">{{ (r.water / r.flour * 100).toFixed(0) }}%</span>
              <span v-else-if="i.key === 'weightEach'"
                    :class="{'error-txt': r.totalWeight !== (r.flour + r.water + r.yeast + r.salt + r.oil + r.sugar) }">
                {{ r.totalWeight }}
              </span>
              <span v-else>
                {{ r[i.key] * pizzaCount }}
              </span>
            </td>
          </tr>
        </table>
        * all in grams
      </div>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'

const pizzaCount = ref(1)
const variant = 'outlined'
//original recipe: 197 grams flour, 128 grams water, 1 gram yeast, 4 grams salt, 2 grams oil, 2 grams sugar
// const ingredients = [
//   { name: 'Hydration %', baseGrams: 0 },
//   { name: 'Flour', baseGrams: 197 },
//   { name: 'Water', baseGrams: 128 },
//   { name: 'Yeast', baseGrams: 1 },
//   { name: 'Salt', baseGrams: 4 },
//   { name: 'Oil', baseGrams: 2 },
//   { name: 'Sugar', baseGrams: 2 },
// ]

const ingredients = [
  { name: 'Hydration %', key: 'hydration', includeInSum: false },
  { name: 'Flour', key: 'flour', includeInSum: true },
  { name: 'Water', key: 'water', includeInSum: true },
  { name: 'Yeast', key: 'yeast', includeInSum: true },
  { name: 'Salt', key: 'salt', includeInSum: true },
  { name: 'Oil', key: 'oil', includeInSum: true },
  { name: 'Sugar', key: 'sugar', includeInSum: true },
  { name: 'Total Weight', key: 'totalWeight', includeInSum: false },
  { name: 'Weight Each (appx)', key: 'weightEach', includeInSum: false },
]

// const ingredients = [ 'Hydration %', 'Flour', 'Water', 'Yeast', 'Salt', 'Oil', 'Sugar']

const recipes = [
  { flour: 197, water: 128, yeast: 1, salt: 4, oil: 2, sugar: 2, totalWeight: 334 },
  { flour: 191, water: 134, yeast: 1, salt: 4, oil: 2, sugar: 2, totalWeight: 334 },
]

function changePizzaCount(increase) {
  if(increase) {
    pizzaCount.value = pizzaCount.value + 1
  } else if(pizzaCount.value !== 1) {
    pizzaCount.value = pizzaCount.value - 1
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
  min-width: 200px;
}

.error-txt {
  color: red;
}

.table-footer {
  //padding-top: 20px;
  height: 50px;
  font-weight: 600;
}
</style>
