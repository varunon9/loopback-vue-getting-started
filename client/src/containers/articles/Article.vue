<template>
  <div>
    <sui-segment basic>
      <h1 is="sui-header">Article</h1>
      <sui-comment-group>
        <h3 is="sui-header" dividing>Comments</h3>
      </sui-comment-group>
      <sui-form v-if="user">
        <sui-form-field>
          <label>Your Comment</label>
          <textarea 
            placeholder="Start typing your comment..." v-model="userComment[0].content"
            class="comment-textarea"
          />
        </sui-form-field>
        <sui-button @click="createComment" type="submit">Submit</sui-button>
      </sui-form>
    </sui-segment>
  </div>
</template>

<script>
  import { createArticleComment, patchComment } from '../../actions';

  export default {
    name: 'Article',
    props: {
      article: Object,
      user: Object
    },
    data() {
      const userComment = this.article.comments.filter(comment => comment.userId === this.user.id);
      if (userComment.length === 0) {
        userComment.push({
          content: ''
        });
      }
      return {
        userComment
      }
    },
    methods: {
      createComment: function(e) {
        e.preventDefault();
        const data = {
          content: this.userComment[0].content
        };
        if(this.userComment[0].id) {
          // patch
          patchComment(this.userComment[0].id, data)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          // create
          createArticleComment(this.article.id, data)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
</script>

<style scoped>
  .comment-textarea {
    max-height: 4em !important;
  }
</style>