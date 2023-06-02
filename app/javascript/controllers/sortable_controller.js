import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sortable"
export default class extends Controller {
  connect() {
    console.log("connect")
  }

  update() {
    console.log("update")
  }
}
