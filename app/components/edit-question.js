import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },

    edit1() {
      var params = {
        tag: this.get('tag'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit1', params);
    }
  }
});
