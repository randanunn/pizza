module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',
  }
}
