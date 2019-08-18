<template>
  <div>
    <sui-grid :columns="2">
      <sui-grid-column>
        Hello {{ user ? user.name : 'Guest'}}
      </sui-grid-column>
      <sui-grid-column class="right-menu" v-if="user">
        <router-link to="/articles/create">Create an article</router-link>
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
            <a class="title">
              {{ article.title }}
            </a> 
            <sui-feed-date>
              {{ getFormattedDateText(article.createdAt) }}
            </sui-feed-date>
          </sui-feed-summary>
          <sui-feed-extra text>
            {{ article.content }}
          </sui-feed-extra text>
          <sui-feed-meta>
            <sui-feed-like>
              4 comments
            </sui-feed-like>
          </sui-feed-meta>
        </sui-feed-content>
      </sui-feed-event>
    </sui-feed>
  </div>
</template>

<script>
import { customLocalStorage } from '../../utils';
import { getArticles } from '../../actions';

export default {
  name: 'ArticlesMain',
  data: function() {
    return {
      user: customLocalStorage.getItem('user'),
      articles: []
    };
  },
  methods: {
    getFormattedDateText: (date) => {
      return new Date(date).toDateString();
    }
  },
  mounted: function () {
    getArticles()
      .then(response => {
        this.articles = response.data;
      })
      .catch(error => {
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
</style>