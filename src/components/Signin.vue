<template>
    <div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>
import { auth } from "../firebase/utils";
import * as firebaseui from "firebaseui"
import "../../node_modules/firebaseui/dist/firebaseui.css"

export default {
  mounted() {
    let uiConfig = {
      signInOptions: [
        auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult() {
          window.location.href = '/'
        }
      }
        }
    let ui = auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth())
    }
    ui.start("#firebaseui-auth-container", uiConfig)
  }
}
</script>
