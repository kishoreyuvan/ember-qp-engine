import Route from '@ember/routing/route';

export default Route.extend({

  serializeQueryParam(value, urlKey, defaultValueType) {
  if (urlKey === 'object_type') {
    return typeof value === 'object' ? JSON.stringify(value) : `${value}`;
  }
  return this._super(value, urlKey, defaultValueType);
},

deserializeQueryParam(value, urlKey, defaultValueType) {
  if (urlKey === 'object_type') {
    return JSON.parse(value);
  }
  return this._super(value, urlKey, defaultValueType);
}

});
