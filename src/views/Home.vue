<template>
  <div class="home">
    <div id="options">
      <p>Choose either cats or dogs!</p>
      <button v-on:click="getCatItem">Cat</button>
      <button v-on:click="getDogItem">Dog</button>
    </div>
    <div id="content">
      <div id="img-holder">
        <img :src="currentImage" alt="Sorry, this image could not be displayed"/>
      </div>
      <div id="fact-save">
        <p>{{currentFact}}</p>
        <button v-on:click="saveItem">Save</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      currentImage: '',
      currentFact: 'You can save facts and images you like to view them on the Dog and Cat pages',
      currentType: 'cat'
    }
  },
  computed: {
    reactiveFact() {
      return this.currentFact;
    },
    reactiveImage() {
      return this.currentImage;
    }
  },
  created() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(facts => this.$root.$data.allCatFacts = facts.all);
    this.getCatItem();
  },
  methods: {
    getCatItem() {
      fetch("https://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => this.currentImage = data.file);
      this.currentFact = this.$root.$data.allCatFacts[Math.round(Math.random() * this.$root.$data.allCatFacts.length)].text;
      this.currentType = "cat";
    },
    getDogItem() {
      fetch("https://random.dog/woof.json")
        .then(response => response.json())
        .then(data => this.currentImage = data.url);
      fetch("https://cors-anywhere.herokuapp.com/https://some-random-api.ml/facts/dog")
        .then(response => response.json())
        .then(data => this.currentFact = data.fact);
      this.currentType = "dog";
    },
    saveItem() {
      if (this.currentType === "cat") {
        this.$root.$data.catpicsfacts.push({image: this.currentImage, fact: this.currentFact});
      }
      else {
        this.$root.$data.dogpicsfacts.push({image: this.currentImage, fact: this.currentFact});
      }
    }
  }
}
</script>

<style scoped>
.home {
color: white;
}
#options {
display: flex;
margin: 5px;
align-items: center;
justify-content: center;
}

#options p, #options button {
margin-left: 10px;
margin-right: 10px;
}

#content {
height: 400px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-around;
}

#img-holder {
width: 40%;
height: 100%;
}

#fact-save {
width: 30%;
}

img {
height: 100%;
}
</style>