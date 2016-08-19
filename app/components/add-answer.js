import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer1() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer1', params);
    }
  }
});
