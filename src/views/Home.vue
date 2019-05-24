<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <p>
        <router-link to="/about"><ion-button expand="block" size="small">Go to About Page</ion-button></router-link>
      </p>
      <p>
        <router-link to="/form"><ion-button expand="block" size="small">Go to Form Page</ion-button></router-link>
      </p>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    doIt: () => {
      console.log('Do it');
    }
  }
};
</script>