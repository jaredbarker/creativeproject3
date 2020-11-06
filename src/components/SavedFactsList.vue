<template>
  <div id="all">
  <div  v-if="this.type === 'cat'">
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
  <div v-else>
    <div  id="dog-content" v-for='(item, index) in items' :key='item.fact'>
      <div v-if="item.image.substring(item.image.length - 3, item.image.length) === 'mp4'" id="video-holder">
        <video :src="item.image" autoplay loop>Sorry, this mp4 file could not be displayed</video>
      </div>
      <div v-else id="dog-img-holder">
        <img :src="item.image" alt="Sorry, this file could not be displayed"/>
      </div>
      <div id="dog-fact-remove">
        <p>{{item.fact}}</p>
        <button v-on:click="removeItem(index)">Remove</button>
      </div>
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
@media only screen and (max-width: 1201px) {
.all {
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;
}


#content, #dog-content {
color: white;
height: 400px;
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: space-around;
justify-content: center;
}

#img-holder, #dog-img-holder {
height: 67%;
margin: auto;
}
  
#video-holder {
height: 67%;
margin: auto;
}
  
video {
height: 100%;
}

#fact-remove, #dog-fact-remove {
width: 93%;
height: 20%;
margin: auto;
}

#fact-remove p {
text-align: center;
}

img {
height: 100%;
}
}
@media only screen and (min-width: 1200px) {
.all {
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;
}


#content, #dog-content {
color: white;
height: 400px;
margin-bottom: 40px;
display: flex;
align-items: center;
justify-content: space-around;
}

#img-holder, #dog-img-holder {
width: 40%;
height: 100%;
}
  
#video-holder {
width: 40%;
height: 100%
}
  
video {
height: 100%;
}

#fact-remove, #dog-fact-remove {
width: 20%;
}

#fact-remove p {
text-align: justify;
text-justify: inter-word;
}

img {
height: 100%;
}
}
</style>