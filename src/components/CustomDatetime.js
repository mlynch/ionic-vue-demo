export default {
  name: 'CustomDatetime',
  render(createElement) {
    return createElement('ion-datetime', {
      'attrs': this.attrs,
      'on': {
        'ionChange': this.handleChange
      }
    })
  },
  methods: {
    handleChange($event) {
      this.$emit('ionChange', $event.target.value);
      this.$emit('change', $event.target.value);
      this.$emit('input', $event.target.value);
    }
  }
}