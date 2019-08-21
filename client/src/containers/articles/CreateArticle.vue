<template>
  <div>
    <h1 is="sui-header">Create an Article</h1>
    <sui-form>
      <sui-form-field>
        <label>Title</label>
        <input placeholder="Title of your new article" v-model="articleInfo.title" />
      </sui-form-field>
      <sui-form-field>
        <label>Content</label>
        <textarea placeholder="Start typing content..." v-model="articleInfo.content" />
      </sui-form-field>
      <sui-form-field>
        <sui-label basic color="red" v-if="errorMessage">{{errorMessage}}</sui-label>
      </sui-form-field>
      <sui-button type="submit" @click="onSubmitClick">Submit</sui-button>
    </sui-form>
  </div>
</template>

<script>
  import { createArticle } from '../../actions';

  export default {
    name: 'CreateArticle',
    data: function() {
      return {
        articleInfo: {
          title: '',
          content: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      onSubmitClick: function(e) {
        e.preventDefault();
        createArticle(this.articleInfo)
          .then(response => {
            this.$router.push({
              path: '/articles'
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
          })
      }
    }
  }
</script>