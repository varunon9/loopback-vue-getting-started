<template>
  <sui-comment>
    <sui-comment-content>
      <a is="sui-comment-author">
        {{comment.customUser ? comment.customUser.name : 'NA'}}
      </a>
      <sui-comment-metadata>
        {{ getFormattedDateText(comment.createdAt) }}
      </sui-comment-metadata>
      <sui-comment-text>
        {{ comment.content }}
      </sui-comment-text>
    </sui-comment-content>
  </sui-comment>
</template>

<script>
  import { getFormattedDateText } from '../utils';

  export default {
    name: 'Comment',
    props: {
      comment: Object
    },
    methods: {
      getFormattedDateText
    }
  }
</script>