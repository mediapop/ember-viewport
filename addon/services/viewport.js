import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  resize: service(),
  init() {
    function updateViewport(){
      const height = window.innerHeight;
      const width = window.innerWidth;
      this.setProperties({height, width});
      // We don't have to update vw because it should always be accurate.
      document.documentElement.style.setProperty('--vh', `calc(${height}px / 100)`);
    }

    if(typeof document !== 'undefined' && typeof window !== 'undefined' ){
      /**
       * didResize in the embedded slack browser will fire multiple times and when rotating from landscape to portrait
       * it will also report the landscape mode height.
       *
       * Until we have a strategy of discerning slack from regular safari, use debouncedDidResize.
       * https://github.com/mediapop/ember-viewport/issues/1
       */
      this.resize.on('debouncedDidResize', updateViewport.bind(this));
      updateViewport.call(this);
    }

    this._super(...arguments);
  }
});
