<template>
  <div>
    <h1 is="sui-header">Create an Article</h1>
    <sui-form>
      <sui-form-field>
        <label>Title</label>
        <input placeholder="Title of your new article">
      </sui-form-field>
      <sui-form-field>
        <label>Content</label>
        <textarea placeholder="Start typing content..." />
      </sui-form-field>
      <sui-button type="submit">Submit</sui-button>
    </sui-form>
  </div>
</template>