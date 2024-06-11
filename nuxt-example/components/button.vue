<template>
  <button @click="haptic">
    haptic
  </button>
</template>
<script setup>
import { useTawasalSDK } from '@tawasal/vue'

const handlers = useTawasalSDK()
const haptic = handlers.haptic;
console.log(handlers)

</script>
