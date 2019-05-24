<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Form</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Custom</ion-label>
            <IonInputVue v-model="user.custom" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input v-bind:value="user.name" v-on:input="user.name = $event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Address</ion-label>
            <ion-input v-model="user.address"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button expand="block" type="submit">Submit</ion-button>
      </form>
    </ion-content>
  </div>
</template>

<script>
import IonInputVue from '../components/IonInputVue';
export default {
  name: "myform",
  components: {
    IonInputVue
  },
  methods: {
    submitForm() {
      console.log('Submitting form', this.user);
    }
  },
  data() {
    return {
      user: {
        name: 'Max',
        address: 'Home',
        custom: 'This is custom'
      }
    }
  }
};
</script>
