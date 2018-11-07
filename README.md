# ember-viewport

*This ember addon is maintained by [Media Pop](https://www.mediapop.co), a software consultancy. Hire us to solve your web application challenges.*

Provides a `viewport` service and inserts accurate faux-viewport units into CSS variable `--vh`.

```css
/* Before */
.full-height {
  height: 100vh; // Inaccurate on mobile
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

## Installation

* `ember install ember-viewport`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
