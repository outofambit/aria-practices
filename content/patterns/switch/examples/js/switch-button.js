/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:  switch.js
 *
 *   Desc:  Switch widget that implements ARIA Authoring Practices
 */

'use strict';

class ButtonSwitch extends HTMLElement {
  #domNode;

  constructor() {
    super();
    this.#domNode = this.querySelector('button');
    this.#domNode.addEventListener('click', () => this.toggleStatus());

    // Set background color for the SVG container Rect
    const color = getComputedStyle(this).getPropertyValue('background-color');
    const containerNode = this.querySelector('rect.container');
    containerNode.setAttribute('fill', color);
  }

  // Switch state of a switch
  toggleStatus() {
    const currentState = this.#domNode.getAttribute('aria-checked') === 'true';
    const newState = String(!currentState);

    this.#domNode.setAttribute('aria-checked', newState);
  }
}

window.customElements.define('button-switch', ButtonSwitch);
