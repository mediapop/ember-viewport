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
      this.resize.on('didResize', updateViewport.bind(this));
      updateViewport.call(this);
    }

    this._super(...arguments);
  }
})
