<template>
  <sui-grid :columns="2" stackable>
    <sui-grid-column class="center-aligned">
      <h1 is="sui-header">Register</h1>
      <sui-form>
        <sui-form-field>
          <label>Name</label>
          <input placeholder="Your full name" v-model="registrationInfo.name">
        </sui-form-field>
        <sui-form-field>
          <label>Email</label>
          <input placeholder="Enter your email" v-model="registrationInfo.email">
        </sui-form-field>
        <sui-form-field>
          <label>Username</label>
          <input placeholder="Enter a username" v-model="registrationInfo.username">
        </sui-form-field>
        <sui-form-field>
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Create a password" v-model="registrationInfo.password"
          >
        </sui-form-field>
        <sui-form-field>
          <sui-label basic color="red" v-if="errorMessage">{{errorMessage}}</sui-label>
        </sui-form-field>
        <sui-button type="submit" @click="onSubmitClick">Submit</sui-button>
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
  import { registerUser } from '../actions';

  export default {
    name: 'Login',
    data: function() {
      return {
        registrationInfo: {
          name: '',
          email: '',
          username: '',
          password: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      onSubmitClick: function(e) {
        e.preventDefault();
        registerUser(this.registrationInfo)
          .then(response => {
            this.$router.push({
              path: '/login'
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
          })
      }
    }
  }
</script>