<template>
  <ion-input
    v-bind="$attrs"
    v-bind:value="$attrs.value"
    v-on:ionInput ="$emit('input',    $event.target.value)"
    v-on:ionBlur  ="$emit('ionBlur',  $event.target.value)"
    v-on:ionFocus ="$emit('ionFocus', $event.target.value)"
    v-on:ionChange="$emit('ionChange',$event.target.value)"
    />
</template>

<script>
export default {
}
</script>