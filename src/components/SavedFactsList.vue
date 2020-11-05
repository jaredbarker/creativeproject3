<template>
  <div id="all">
    <div id="content"  v-for='(item, index) in items' :key='item.fact'>
      <div id="img-holder">
        <img :src="item.image" alt="Sorry, this image could not be displayed"/>
      </div>
      <div id="fact-remove">
        <p>{{item.fact}}</p>
        <button v-on:click="removeItem(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactsList',
  props: {
    items: Array,
    type: String
  },
  methods: {
    removeItem(ind) {
      console.log(ind);
		if (this.type === "cat") {
        this.$root.$data.catpicsfacts.splice(ind, 1);
      }
		if (this.type === "dog") {
        this.$root.$data.dogpicsfacts.splice(ind, 1);
      }
    }
  }
}

</script>

<style scoped>
.all {
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;
}


#content {
height: 400px;
margin: 20px;
display: flex;
align-items: center;
justify-content: space-around;
}

#img-holder {
width: 40%;
height: 100%;
}

#fact-remove {
width: 30%;
color: white;
}

img {
height: 100%;
}
</style>