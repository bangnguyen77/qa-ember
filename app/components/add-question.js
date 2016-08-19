import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        tag: this.get('tag'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion1', params);
    }
  }
});
