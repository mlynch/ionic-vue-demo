<template>
  <ion-input
    v-bind="$attrs"
    v-bind:value="$attrs.value"
    v-on:ionInput ="$emit('input',    $event.target.value)"
    v-on:ionBlur  ="$emit('ionBlur',  $event); $emit('blur', $event)"
    v-on:ionFocus ="$emit('ionFocus', $event); $emit('focus', $event)"
    v-on:ionChange="$emit('ionChange',$event.target.value); $emit('change', $event.target.value)"
    />
</template>

<script>
export default {
}
</script>