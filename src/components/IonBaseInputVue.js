import Vue from 'vue';

/**
 * Create a wrapped input component that captures typical ionic input events
 * and emits core ones so v-model works.
 * @param {} name the vue name of the component
 * @param {*} coreTag the actual tag to render (such as ion-datetime)
 * @param {*} modelEvent the event name to use for 
 * @param {*} valueProperty the property to use as value. For example: value vs checked for toggles
 */
export const createInputComponent = (name, coreTag, modelEvent = 'ionChange', valueProperty = 'value') => {
  return Vue.component(name, {
    model: {
      event: modelEvent,
      prop: valueProperty
    },
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
        if (modelEvent === 'ionChange') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('ionChange', $event.target[valueProperty]);
        } else {
          this.$emit('ionChange', $event);
        }
      },
      handleInput($event) {
        if (modelEvent === 'ionInput') {
          // Vue expects the value to be sent as the argument for v-model, not the
          // actual event object
          this.$emit('ionInput', $event.target[valueProperty]);
        } else {
          this.$emit('ionInput', $event);
        }
      },
      handleBlur($event) {
        this.$emit('ionBlur', $event);
      },
      handleFocus($event) {
        this.$emit('ionFocus', $event);
      }
    }
  });
};