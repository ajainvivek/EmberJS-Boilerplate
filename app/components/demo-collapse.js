import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isToggled'], 
  isToggled : false,
  actions : {
    toggleContent () {
      let isToggled = this.get("isToggled");
      this.set("isToggled", !isToggled);
    }
  }
});
