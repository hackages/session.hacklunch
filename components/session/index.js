import angular         from 'angular';
import sessionTemplate from './session.html';

import './session.css';

const session = {
  template: sessionTemplate
};

export default angular.module('core.session', [])
                      .component('hlSession', session).name;
