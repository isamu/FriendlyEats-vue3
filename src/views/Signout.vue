<template>
<div>
  <span>Logging out . . .</span>
</div>
</template>
<script>
import { auth } from "../firebase/utils";

export default {
  mounted() {
    auth().signOut().then(() => {
      window.location.href = '/'
    })
  }
}
</script>
