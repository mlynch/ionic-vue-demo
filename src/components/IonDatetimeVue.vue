<template>
  <ion-datetime
    v-bind="$attrs"
    v-bind:value="$attrs.value"
    v-on:ionInput ="$emit('input',    $event.target.value)"
    v-on:ionBlur  ="$emit('ionBlur',  $event); $emit('blur', $event)"
    v-on:ionFocus ="$emit('ionFocus', $event.target.value)"
    v-on:ionChange="handleChange($event)"
    />
</template>

<script>
export default {
  methods: {
    handleChange($event) {
      this.$emit('ionChange', $event.target.value);
      this.$emit('change', $event.target.value);
      this.$emit('input', $event.target.value);
    }
  }
}
</script>