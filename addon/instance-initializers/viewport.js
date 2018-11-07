import ViewportService from '../services/viewport';

export function initialize(appInstance) {
  appInstance.register('service:viewport', ViewportService);
  appInstance.inject('controller:application', 'viewport', 'service:viewport');
}

export default {
  initialize,
  name: 'viewport'
};
