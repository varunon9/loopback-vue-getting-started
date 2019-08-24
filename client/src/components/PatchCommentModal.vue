<template>
  <div>
    <sui-modal v-model="show">
      <sui-modal-header>Update your comment</sui-modal-header>
      <sui-modal-content>
        <sui-form>
          <sui-form-field>
            <label>Your Comment</label>
            <textarea 
              v-model="commentData.content"
              class="comment-textarea"
            />
          </sui-form-field>
          <sui-button @click="onSubmitButtonClick" type="submit">
            Submit
          </sui-button>
        </sui-form>
      </sui-modal-content>
    </sui-modal>
  </div>
</template>

<script>
  import { patchComment } from '../actions';

  export default {
    name: 'PatchCommentModal',
    props: {
      userComment: Object,
      onUpdateCommentModalCloseButtonClick: Function
    },
    data: function() {
      return {
        commentData: {
          content: this.userComment.content
        },
        show: true
      }
    },
    methods: {
      onSubmitButtonClick: function(e) {
        e.preventDefault();
        patchComment(this.userComment.id, this.commentData)
          .then(() => {
            this.onUpdateCommentModalCloseButtonClick();
            this.$router.push({
              path: '/articles'
            });
          });
      }
    }
  }
</script>