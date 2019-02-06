import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.set('object_type', {
     name: 'obj',
     id: 22
    });
  }
});
