import angular, {module, bootstrap} from 'angular';

import sessionsComponents           from '../components/sessions/';
import sessionComponents            from '../components/session/';

export default  module('hl.sessions', [])
  .component('hlSessions', sessionsComponents)
  .component('hlSession', sessionComponents).name;

