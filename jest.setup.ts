/**
 * Jest setup file for A.T.L.A.S application tests
 * Polyfills for Node.js APIs needed by jsdom
 */
(globalThis.TextEncoder = globalThis.TextEncoder || function() {}).prototype.encode = function() { return new Uint8Array(); };
(globalThis.TextDecoder = globalThis.TextDecoder || function() {}).prototype.decode = function() { return ''; };

import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  runScripts: 'dangerously',
  resources: 'usable',
});

global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

// Mock matchMedia
globalThis.matchMedia = globalThis.matchMedia || function () {
  return {
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  };
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  callback = (entries) => {
      for (const entry of entries) {
      entry.target._resizeObserverLastHeight = entry.target.offsetHeight;
      entry.target._resizeObserverLastWidth = entry.target.offsetWidth;
    }
  };
  observe(target) {
    target._resizeObserver = this;
    this.callback([{ target, contentRect: { width: target.offsetWidth, height: target.offsetHeight } }]);
  }
  unobserve() {}
  disconnect() {}
};

// Mock next/navigation methods
globalThis.go = () => {};
globalThis.replace = () => {};
