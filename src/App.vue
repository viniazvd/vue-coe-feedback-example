<template>
  <div id="app">
    <coe-feedbacks @close="feedback => $feedback.remove(feedback)" :feedbacks="$feedback.list" />

    <button @click="onSucces">show feedback success</button>
    <button @click="onInfo">show feedback info</button>
    <button @click="onError">show feedback error</button>

    <button @click="onCoe">set coe</button>
  </div>
</template>

<script>
import CoeFeedbacks from './lib/components/CoeFeedbacks'
// import { CoeFeedbacks } from 'vue-coe-feedback'

export default {
  components: { CoeFeedbacks },

  methods: {
    onSucces () {
      this.$feedback.add({ type: 'success', message: 'A Folha de pagamento', highlighted: 'foi reprovada' })
    },

    onInfo () {
      this.$feedback.add({ type: 'info', message: 'INFO', highlighted: 'MANÉ' })
    },

    onError () {
      this.$feedback.add({ type: 'error', message: 'ERROR' })
    },

    onCoe () {
      this.$store.dispatch('COE', { type: 'success', message: 'COÉ MANÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ!' })
    }
  }
}
</script>
