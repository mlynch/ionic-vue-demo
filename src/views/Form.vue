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
            <IonInputVue v-model="user.address"></IonInputVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Notes</ion-label>
            <IonTextareaVue v-model="user.notes"></IonTextareaVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Toggle</ion-label>
            <IonToggleVue v-model="user.isCool"></IonToggleVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Radio</ion-label>
            <IonRadioVue v-model="user.enabled" value="enabled"></IonRadioVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Checkbox</ion-label>
            <IonCheckboxVue v-model="user.large"></IonCheckboxVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Search</ion-label>
            <IonSearchbarVue v-model="user.query"></IonSearchbarVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Picker</ion-label>
            <IonToggleVue v-model="user.isCool"></IonToggleVue>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Toggle</ion-label>
            <IonRangeVue min="-200" max="200" color="secondary" v-model="user.range">
              <ion-label slot="start">-200</ion-label>
              <ion-label slot="end">200</ion-label>
            </IonRangeVue>
          </ion-item>
        </ion-list>
        <ion-button expand="block" type="submit">Submit</ion-button>
      </form>
    </ion-content>
  </div>
</template>

<script>
import IonInputVue from '../components/IonInputVue';
import IonCheckboxVue from '../components/IonCheckboxVue';
import IonDatetimeVue from '../components/IonDatetimeVue';
import IonSelectVue from '../components/IonSelectVue';
import IonSearchbarVue from '../components/IonSearchbarVue';
import IonRadioVue from '../components/IonRadioVue';
import IonRangeVue from '../components/IonRangeVue';
import IonToggleVue from '../components/IonToggleVue';
import IonTextareaVue from '../components/IonTextareaVue';

export default {
  name: "myform",
  components: {
    IonInputVue,
    IonCheckboxVue,
    IonDatetimeVue,
    IonSearchbarVue,
    IonSelectVue,
    IonRadioVue,
    IonToggleVue,
    IonRangeVue,
    IonTextareaVue
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
        date2: '',
        range: 100,
        isCool: false,
        notes: 'Very legal, very cool',
        large: false,
        query: 'This is a query'
      }
    }
  }
};
</script>
