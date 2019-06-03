import Vue from 'vue';

/**
 * Create a wrapped input component that captures typical ionic input events
 * and emits core ones so v-model works.
 * @param {} name the vue name of the component
 * @param {*} coreTag the actual tag to render (such as ion-datetime)
 */
export const createInputComponent = (name, coreTag) => {
  return Vue.component(name, {
    render(createElement) {
      return createElement(coreTag, {
        'attrs': this.attrs,
        'on': {
          'ionChange': this.handleChange,
          'ionInput': this.handleInput,
          'ionBlur': this.handleBlur,
          'ionFocus': this.handleFocus
        }
      }, this.$slots.default);
    },
    methods: {
      handleChange($event) {
        this.$emit('ionChange', $event);
        this.$emit('change', $event);
        this.$emit('input', $event.target.value);
      },
      handleInput($event) {
        this.$emit('ionInput', $event);
        this.$emit('input', $event.target.value);
      },
      handleBlur($event) {
        this.$emit('ionBlur', $event);
        this.$emit('blur', $event);
      },
      handleFocus($event) {
        this.$emit('ionFocus', $event);
        this.$emit('focus', $event);
      }
    }
  });
};