<template>
  <sui-grid :columns="2" stackable>
    <sui-grid-column class="center-aligned">
      <h1 is="sui-header">Please login</h1>
      <sui-form>
        <sui-form-field>
          <label>Username</label>
          <input placeholder="username">
        </sui-form-field>
        <sui-form-field>
          <label>Password</label>
          <input placeholder="your password">
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
        <p>
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<style scoped>
</style>