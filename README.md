@mediapop/ember-viewport
==============================================================================

*This ember addon is maintained by [Media Pop](https://www.mediapop.co), a software consultancy. Hire us to solve your web application challenges.*

[![Build Status](https://travis-ci.org/mediapop/ember-viewport.svg?branch=master)](https://travis-ci.org/mediapop/ember-viewport)
[![Ember Observer Score](https://emberobserver.com/badges/-mediapop-ember-viewport.svg)](https://emberobserver.com/addons/@mediapop/ember-viewport)
<a href="https://codeclimate.com/github/mediapop/ember-viewport/maintainability"><img src="https://api.codeclimate.com/v1/badges/afe2d4d60342ea89b4fd/maintainability" /></a>
[![dependencies](https://david-dm.org/mediapop/ember-viewport/status.svg)](https://david-dm.org/poetic/ember-cli-github-pages)
[![devDependencies](https://david-dm.org/mediapop/ember-viewport/dev-status.svg)](https://david-dm.org/poetic/ember-cli-github-pages?type=dev)

Provides a `viewport` service and inserts accurate faux-viewport units into CSS variable `--vh`. View the [demo app](https://mediapop.github.io/ember-viewport/) on mobile.

```css
/* Before */
.full-height {
  height: 100vh; /* Inaccurate on mobile */
}

/* After */
.full-height {
  height: calc(--vh * 100);
}
```

It can also be used as a service:

```js
export default Component.create({
  viewport: service(),
  someProperty: computed('viewport.height', function(){
    return this.viewport.height / 2;
  })
});
```


Installation
------------------------------------------------------------------------------

```
ember install @mediapop/ember-viewport
```


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
