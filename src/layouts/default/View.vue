<template>
  <v-main>
    <v-tabs
      bg-color="deep-purple-darken-4"
    >
      <v-tab
        v-for="(tab, idx) in tabs"
        :key="idx"
        :to="tab.path"
        :text="tab.name"
      ></v-tab>
    </v-tabs>
    <router-view />
  </v-main>
</template>

<script setup>
const tabs = [
  { name: 'Pizza', path: 'pizza'},
  { name: 'Tottis', path: 'tottis'},
]
</script>
