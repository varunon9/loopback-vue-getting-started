<template>
  <sui-grid :columns="2" stackable>
    <sui-grid-column class="center-aligned">
      <h1 is="sui-header">Please login</h1>
      <sui-form>
        <sui-form-field>
          <label>Username</label>
          <input placeholder="username" v-model="loginInfo.username">
        </sui-form-field>
        <sui-form-field>
          <label>Password</label>
          <input type="password" placeholder="your password" v-model="loginInfo.password">
        </sui-form-field>
        <sui-form-field>
          <sui-label basic color="red" v-if="errorMessage">{{errorMessage}}</sui-label>
        </sui-form-field>
        <sui-button type="submit" @click="onSubmitClick">Submit</sui-button>
        <p>
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
  import { loginUser, getUser } from '../actions';
  import { customLocalStorage } from '../utils';

  export default {
    name: 'Login',
    data: function() {
      return {
        loginInfo: {
          username: '',
          password: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      onSubmitClick: function(e) {
        e.preventDefault();
        loginUser(this.loginInfo)
          .then(response => {
            const loginData = response.data;
            getUser(loginData)
              .then(response => {
                const user = { ...response.data, loginData };
                customLocalStorage.setItem('user', user);
                this.$router.push({
                  path: '/articles'
                });
              })
              .catch(error => {
                this.errorMessage = error.message;
              });
          })
          .catch(error => {
            this.errorMessage = error.message;
          })
      }
    }
  }
</script>

<style scoped>
</style>