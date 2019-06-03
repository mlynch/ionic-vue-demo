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
            <ion-label position="floating">Select</ion-label>
            <IonSelectVue v-model="user.pet">
              <ion-select-option value="cats">Cats</ion-select-option>
              <ion-select-option value="dogs">Dogs</ion-select-option>
            </IonSelectVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Date</ion-label>
            <IonDatetimeVue v-model="user.date" v-on:blur="handleBlur" v-on:ionBlur="handleIonBlur"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input v-bind:value="user.name" v-on:input="user.name = $event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Address</ion-label>
            <ion-input v-model="user.address"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Radio</ion-label>
            <IonRadioVue v-model="user.enabled" value="enabled"></IonRadioVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Toggle</ion-label>
            <IonToggleVue v-model="user.isCool"></IonToggleVue>
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
import IonSelectVue from '../components/IonSelectVue';
import IonRadioVue from '../components/IonRadioVue';
import IonToggleVue from '../components/IonToggleVue';

export default {
  name: "myform",
  components: {
    IonInputVue,
    IonDatetimeVue,
    IonSelectVue,
    IonRadioVue,
    IonToggleVue
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
