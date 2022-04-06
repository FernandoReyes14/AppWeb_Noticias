<template>
  <div>
    <Tweet/>
    <Form/>
  </div>
</template>

<script>
  import Form from '../components/Form.vue'
  import Tweet from '../components/Tweet.vue'

  export default {
    name: 'form',

    components: {
      Form,
      Tweet
    }
  }
</script>
