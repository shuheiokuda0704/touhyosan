import Sortable from 'stimulus-sortable'

// Connects to data-controller="sortable"
export default class extends Sortable {
  connect() {
    console.log('Do what you want here.')
    super.connect()
    console.log('Do what you want here.')

    // The sortable.js instance.
    this.sortable

    // Your options
    this.options

    // Your default options
    this.defaultOptions
  }

  // You can override the `onUpdate` method here.
  onUpdate(event) {
    super.onUpdate(event)
  }

  onStop(e) {
    console.log(e)
  }

  // You can set default options in this getter for all sortable elements.
  get defaultOptions() {
    return {
      animation: 500,
    }
  }
}
