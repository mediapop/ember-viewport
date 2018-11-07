import ViewportService from '../services/viewport';

export function initialize(appInstance) {
  appInstance.register('service:fullheight', ViewportService);
  appInstance.inject('controller:application', 'fullheight', 'service:fullheight');
}

export default {
  initialize,
  name: 'viewport'
};
