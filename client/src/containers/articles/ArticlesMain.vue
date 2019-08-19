<template>
  <router-view :user="user"></router-view>
</template>

<script>
  import { customLocalStorage } from '../../utils';

  export default {
    name: 'ArticlesMain',
    data: function() {
      return {
        user: customLocalStorage.getItem('user')
      };
    }
  };
</script>