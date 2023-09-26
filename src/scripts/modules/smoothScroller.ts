import { Component } from '@verndale/core';
import Lenis from '@studio-freight/lenis';

class SmoothScroller extends Component {
  lenis: Lenis | null = null;

  constructor(el: HTMLElement) {
    super(el);
    this.lenis = new Lenis();
  }

  setupDefaults() {
    this.dom = {
      triggers: this.el.querySelectorAll('.accordion__item-trigger'),
      panels: this.el.querySelectorAll('.accordion__item-panel')
    };
    requestAnimationFrame(this.raf.bind(this));
  }

  raf(time: number) {
    if (!this.lenis) return;
    this.lenis.raf(time);
    requestAnimationFrame(this.raf.bind(this));
  }
}

export default SmoothScroller;
