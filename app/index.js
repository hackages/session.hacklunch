import angular from 'angular';

import sessionsComponent from '../components/sessions/';
console.log(sessionsComponent);

import sessionComponent  from '../components/session/';
console.log(sessionComponent);

export default angular.module('hl.sessions', [sessionsComponent, sessionComponent]).name;


