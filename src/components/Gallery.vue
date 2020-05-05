<template>
<!-- <div class="container"> -->
  <b-container fluid="md">
    <b-row class="mt-5" v-if="!images.length">
      <b-col>
        <b-spinner label="Loading images" variant="primary"></b-spinner>
      </b-col>
    </b-row>
    <div class="gallery">
      <template v-for="image in images">
        <img
          :src="image.url"
          :key="image.id"
          :alt="`Image of ${image.name} meme`"
          class="meme-thumb"
          v-b-modal.modal-1
          @click="imgToEdit = image.url"
        />
      </template>
    </div>
    <b-modal :hide-footer="true" size="lg" id="modal-1" title="Create you mem">
      <Editor :imgToEdit="imgToEdit" />
    </b-modal>
  </b-container>
<!-- </div> -->
</template>
<script>
import Editor from '@/components/Editor.vue'
export default {
  name: 'Gallery',
  components: { Editor },
  data () {
    return {
      images: [],
      imgToEdit: ''
    }
  },
  created () {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => (this.images = response.data.memes))
      .catch((err) => console.log(err))
  }
}
</script>
<style scoped>

.gallery {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

.gallery img{
  height: 250px;
  min-width: 150px;
  margin: 1px;
}

</style>
