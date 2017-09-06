<template>
  <v-container class="justify-width">
    <div class="title grey--text pl-3 mb-3">Epilogue</div>
    <div class="exp-section pl-3">
      <div class="subheadline">
        <span class="headline light-blue--text accent-4">{{ headline }}</span>
        {{ body }}
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'resume-epilogue',

    props: {
      epilogue: String
    },

    computed: {
      headline () {
        return this.epilogue.substr(0, 3)
      },

      body () {
        return this.epilogue.substring(3)
      }
    }
  }
</script>