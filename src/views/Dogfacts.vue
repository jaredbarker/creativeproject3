<template>
  <div>
    <h1 v-if="dogItems.length === 0">This page will have your saved dog facts and images</h1>
    <FactsList  v-else :items="dogItems" type="dog" />
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
