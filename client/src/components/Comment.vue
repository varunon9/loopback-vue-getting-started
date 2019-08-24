<template>
  <div>
    <sui-comment>
      <sui-comment-content>
        <a is="sui-comment-author">
          {{comment.customUser ? comment.customUser.name : 'NA'}}
        </a>
        <sui-comment-metadata>
          {{ getFormattedDateText(comment.createdAt) }}
          <sui-button 
            icon="edit" 
            size="mini"
            @click="onEditCommentButtonClick(comment, $event)" 
            v-if="isUserCommentAuthor(comment)" 
          />
        </sui-comment-metadata>
        <sui-comment-text>
          {{ comment.content }}
        </sui-comment-text>
      </sui-comment-content>
      <div v-if="showReplies">
        <sui-comment-group v-for="reply in replies" v-bind:key="reply.id">
          <sui-comment>
            <sui-comment-content>
              <a is="sui-comment-author">
                {{reply.customUser ? reply.customUser.name : 'NA'}}
              </a>
              <sui-comment-metadata>
                {{ getFormattedDateText(reply.createdAt) }}
                <sui-button
                  icon="edit" 
                  size="mini"
                  @click="onEditCommentButtonClick(reply, $event)"
                  v-if="isUserCommentAuthor(reply)"
                />
              </sui-comment-metadata>
              <sui-comment-text>
                {{ reply.content }}
              </sui-comment-text>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
        <sui-comment-group v-if="user">
          <sui-form>
            <sui-form-field>
              <label>Your Reply</label>
              <textarea 
                v-model="userReply.content"
                class="comment-textarea"
                placeholder="Your reply goes here..."
              />
            </sui-form-field>
            <sui-button 
              size="mini" 
              @click="onSubmitButtonClick(comment.id, $event)" type="submit"
              secondary
            >
              Submit
            </sui-button>
          </sui-form>
        </sui-comment-group>
        <sui-divider v-if="user" hidden />
      </div>
      <sui-button size="mini" @click="toggleReplies()">
        {{comment.comments.length}} Replies
      </sui-button>
      <sui-divider hidden />
    </sui-comment>
    <patch-comment-modal 
      v-if="showUpdateCommentModal"
      v-bind:onUpdateCommentModalCloseButtonClick="onUpdateCommentModalCloseButtonClick"
      v-bind:userComment="commentDataToBeUpdated"
    >
    </patch-comment-modal>
  </div>
</template>

<script>
  import PatchCommentModal from './PatchCommentModal';

  import { getFormattedDateText } from '../utils';
  import { getCommentReplies, createReply } from '../actions';

  export default {
    name: 'Comment',
    props: {
      comment: Object,
      user: Object
    },
    methods: {
      getFormattedDateText,
      toggleReplies: function() {
        this.showReplies = !this.showReplies;
        if (!this.getRepliesCalled) {
          this.getRepliesCalled = true;
          this.getReplies();
        }
      },
      getReplies: function() {
        getCommentReplies(this.comment.id)
          .then(response => {
            this.replies = response.data.comments;
          });
      },
      onEditCommentButtonClick: function(commentDataToBeUpdated, e) {
        e.preventDefault();
        this.commentDataToBeUpdated = commentDataToBeUpdated;
        this.showUpdateCommentModal = true;
      },
      onUpdateCommentModalCloseButtonClick: function() {
        this.showUpdateCommentModal = false;
      },
      isUserCommentAuthor: function(comment) {
        return this.user && comment.userId === this.user.id;
      },
      onSubmitButtonClick: function(commentId, e) {
        e.preventDefault();
        createReply(commentId, this.userReply)
          .then(() => {
            this.$router.push({
              path: '/articles'
            });
          });
      }
    },
    data: function() {
      return {
        showReplies: false,
        replies: [],
        userReply: {},
        showUpdateCommentModal: false,
        commentDataToBeUpdated: {},
        getRepliesCalled: false
      }
    },
    components: {
      'patch-comment-modal': PatchCommentModal
    }
  }
</script>