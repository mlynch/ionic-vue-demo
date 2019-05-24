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
            <IonInputVue v-model="user.custom" v-on:blur="handleBlur" v-on:ionBlur="handleIonBlur"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Date</ion-label>
            <IonDatetimeVue v-model="user.date" v-on:blur="handleBlur" v-on:ionBlur="handleIonBlur"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Date (Custom)</ion-label>
            <CustomDatetime v-model="user.date2" v-on:blur="handleBlur" v-on:ionBlur="handleIonBlur"/>
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
import IonDatetimeVue from '../components/IonDatetimeVue';
import CustomDatetime from '../components/CustomDatetime';

export default {
  name: "myform",
  components: {
    CustomDatetime,
    IonInputVue,
    IonDatetimeVue
  },
  methods: {
    handleBlur($event) {
      console.log('Blur', $event);
    },
    handleIonBlur($event) {
      console.log('Ion blur', $event);
    },
    submitForm() {
      console.log('Submitting form', this.user);
    }
  },
  data() {
    return {
      user: {
        name: 'Max',
        address: 'Home',
        custom: 'This is custom',
        date: '',
        date2: ''
      }
    }
  }
};
</script>
