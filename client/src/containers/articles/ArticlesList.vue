<template>
  <div>
    <sui-grid :columns="2">
      <sui-grid-column>
        Hello {{ user ? user.name : 'Guest'}}
      </sui-grid-column>
      <sui-grid-column class="right-menu" v-if="user">
        <router-link to="/articles/create" class="margin-right-16">Create an article</router-link>
        <router-link to="/logout">Logout</router-link>
      </sui-grid-column>
      <sui-grid-column class="right-menu" v-else>
        <router-link to="/login">Login</router-link>
      </sui-grid-column>
    </sui-grid>
    <h1 is="sui-header">Articles</h1>
    <sui-feed>
      <sui-feed-event v-for="article in articles" v-bind:key="article.id" class="margin-bottom-8">
        <sui-feed-content>
          <sui-feed-summary>
            <router-link class="title" :to="{name: 'Article', params: { article, id: article.id }}">
              {{ article.title }}
            </router-link> 
            <sui-feed-date v-if="article.customUser">
              {{ article.customUser.name }} on
            </sui-feed-date>
            <sui-feed-date>
              {{ getFormattedDateText(article.createdAt) }}
            </sui-feed-date>
          </sui-feed-summary>
          <sui-feed-extra text>
            {{ article.content }}
          </sui-feed-extra>
          <sui-feed-meta>
            <sui-feed-like>
              {{ article.comments.length }} comments
            </sui-feed-like>
          </sui-feed-meta>
        </sui-feed-content>
      </sui-feed-event>
    </sui-feed>
  </div>
</template>

<script>
import { getArticles } from '../../actions';
import { getFormattedDateText } from '../../utils';

export default {
  name: 'ArticlesList',
  props: {
    user: {
      type: Object,
      validator: typeof user === 'object'
    }
  },
  data: function() {
    return {
      articles: []
    };
  },
  methods: {
    getFormattedDateText
  },
  mounted: function () {
    getArticles()
      .then(response => {
        this.articles = response.data;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      })
  }
}
</script>

<style scoped>
  .right-menu {
    text-align: right;
  }
  .title {
    font-size: 20px;
  }
  .margin-bottom-8 {
    margin-bottom: 8px !important;
  }
  .margin-right-16 {
    margin-right: 16px;
  }
</style>