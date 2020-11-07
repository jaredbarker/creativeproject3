<template>
  <div class="home">
    <div id="options">
      <p>Choose either cats or dogs!</p>
      <button v-on:click="getCatItem">Cat</button>
      <button v-on:click="getDogItem">Dog</button>
    </div>
    <div id="content">
      <div v-if="isMP4" id="video-holder">
        <video :src="reactiveImage" autoplay loop>Sorry, this mp4 file could not be displayed, try another dog image</video>
      </div>
      <div v-else id="img-holder">
        <img :src="reactiveImage" alt="Sorry, this file could not be displayed, try another dog image"/>
      </div>
      <div id="fact-save">
        <p>{{reactiveFact}}</p>
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
      currentFact: 'You can save facts and images you like and view them on the Dog and Cat pages',
      currentType: 'cat'
    }
  },
  computed: {
    reactiveFact() {
      return this.currentFact;
    },
    reactiveImage() {
      return this.currentImage;
    },
    isMP4() {
      return this.currentImage.substring(this.currentImage.length - 3, this.currentImage.length) === "mp4";
    }
  },
  created() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(facts => this.$root.$data.allCatFacts = facts.all);
    this.getDogItem();
  },
  methods: {
    getCatItem() {
      fetch("https://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => this.currentImage = data.file);
      this.currentFact = this.$root.$data.allCatFacts[Math.round(Math.random() * this.$root.$data.allCatFacts.length)].text;
      this.currentType = "cat";
    },
    async getDogItem() {
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
  @media only screen and (max-width: 600px) {
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
  margin-bottom: 15px;
  margin-top: 15px;
  }

  #content {
  height: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  }

  #img-holder {
  height: 67%;
  }

  #video-holder {
  height: 67%;
  }

  #fact-save {
  height: 20%;
  width: 93%;
  margin: auto;
  }

  #fact-save p {
  text-align: center
  }

  img {
  height:100%
  }

  video {
  height: 100%;
  }
  }
  @media only screen and (min-width: 601px) and (max-width: 1200px) {
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
  margin-bottom: 15px;
  margin-top: 15px;
  }

  #content {
  height: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  }

  #img-holder {
  height: 67%;
  }

  #video-holder {
  height: 67%;
  }

  #fact-save {
  height: 20%;
  width: 93%;
  margin: auto;
  }

  #fact-save p {
  text-align: center
  }

  img {
  height:100%
  }

  video {
  height: 100%;
  }
  }

  @media only screen and (min-width: 1201px) {
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
  margin-bottom: 30px;
  margin-top: 30px;
  }

  #content {
  height: 395px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  }

  #img-holder {
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

  #fact-save {
  width: 20%;
  }

  #fact-save p {
  text-align: justify;
  text-justify: inter-word;
  }

  img {
  height: 100%;
  }
  }
</style>