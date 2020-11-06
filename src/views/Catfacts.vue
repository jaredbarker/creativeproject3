<template>
  <div>
    <h1 v-if="catItems.length === 0">This page will have your saved cat facts and images</h1>
    <div v-else="">
      <h1>Saved Cat Facts</h1>
      <FactsList :items="catItems" type="cat"/>
    </div>
  </div>
</template>

<script>
import FactsList from '../components/SavedFactsList.vue'

export default {
  name: 'Catfacts',
  components: {
    FactsList
  },
  computed: {
    catItems() {
      return this.$root.$data.catpicsfacts;
    }
  }

}
</script>
