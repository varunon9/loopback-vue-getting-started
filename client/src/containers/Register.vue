<template>
  <sui-grid :columns="2" stackable>
    <sui-grid-column class="center-aligned">
      <h1 is="sui-header">Register</h1>
      <sui-form>
        <sui-form-field>
          <label>Name</label>
          <input placeholder="Your full name">
        </sui-form-field>
        <sui-form-field>
          <label>Email</label>
          <input placeholder="Enter your email">
        </sui-form-field>
        <sui-form-field>
          <label>Username</label>
          <input placeholder="Enter a username">
        </sui-form-field>
        <sui-form-field>
          <label>Password</label>
          <input placeholder="Create a password">
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>