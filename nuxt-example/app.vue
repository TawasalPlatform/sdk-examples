<template>
  <div>
    <h1>Parsed Cookies</h1>
    <pre>{{JSON.stringify(cookie, null, 2)}}</pre>
    <Button />
  </div>
</template>

<script setup>

import { useCookie } from 'nuxt/app'
import { getUser } from '@tawasal/node'
import Button from "~/components/button.vue";
let cookie
try {
   cookie = useCookie("tawasal", { decode: getUser})
} catch (e) {
  console.log(e)
}

</script>
