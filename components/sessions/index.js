import angular          from 'angular';
import sessionsTemplate from './sessions.html';
import './sessions.css';

const sessions = {
  template: sessionsTemplate,
  controller: function(){
    debugger
  }
};


export default angular.module('core.sessions', []).component('sessions', sessions).name;
