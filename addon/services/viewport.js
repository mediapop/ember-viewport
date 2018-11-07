import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  resize: service(),
  init() {
    function updateViewport(){
      this.setProperties({
        height: window.innerHeight / 100,
        width: window.innerWidth / 100
      });
      // We don't have to update vw because it should always be accurate.
      document.documentElement.style.setProperty('--vh', `calc(${window.innerHeight}px / 100)`);
    }

    if(document && window){
      this.resize.on('didResize', updateViewport.bind(this));
      updateViewport.call(this);
    }

    this._super(...arguments);
  }
})
