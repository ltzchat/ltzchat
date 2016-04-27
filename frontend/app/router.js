import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('company', {path: '/:company'}, function() {
    this.route('room', {path: '/:room'});
  });
});

export default Router;
