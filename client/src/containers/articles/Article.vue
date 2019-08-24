<template>
  <div>
    <sui-segment basic>
      Hello {{ user ? user.name : 'Guest'}}
    </sui-segment>
    <sui-segment basic>
      <h1 is="sui-header" color="blue">{{article.title}}</h1>
      <p>
        {{article.content}}
      </p>
      <sui-comment-group>
        <h3 is="sui-header" dividing>Comments</h3>
        <comment 
          v-for="comment in article.comments" 
          v-bind:comment="comment" 
          v-bind:key="comment.id"
          v-bind:user="user"
        />
      </sui-comment-group>
      <sui-form v-if="user">
        <sui-form-field>
          <label>Your Comment</label>
          <textarea 
            placeholder="Start typing your comment..." v-model="userComment.content"
            class="comment-textarea"
          />
        </sui-form-field>
        <sui-button size="mini" primary @click="createComment" type="submit">
          Submit
        </sui-button>
      </sui-form>
    </sui-segment>
  </div>
</template>

<script>
  import Comment from '../../components/Comment';
  import { createArticleComment } from '../../actions';

  export default {
    name: 'Article',
    props: {
      article: Object,
      user: Object
    },
    data() {
      return {
        userComment: { content: '' }
      }
    },
    methods: {
      createComment: function(e) {
        e.preventDefault();
        const data = {
          content: this.userComment.content
        };
        createArticleComment(this.article.id, data)
          .then(() => {
            this.$router.push({
              path: '/articles'
            });
          });
      }
    },
    components: {
      'comment': Comment
    }
  }
</script>