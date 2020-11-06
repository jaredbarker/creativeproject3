<template>
  <div>
    <h1 v-if="dogItems.length === 0">This page will have your saved dog facts and images</h1>
    <div v-else>
    <h1>Saved Dog Facts</h1>
    <FactsList :items="dogItems" type="dog" />
    </div>
  </div>
</template>

<script>
import FactsList from '../components/SavedFactsList.vue'

export default {
  name: 'Dogfacts',
  components: {
    FactsList
  },
  computed: {
    dogItems() {
      return this.$root.$data.dogpicsfacts;
    }
  }

}
</script>
