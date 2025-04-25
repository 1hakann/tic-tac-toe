import React from 'react';

export default function setup() {
  global.React = React;
}

if (typeof window !== 'undefined') {
  window.React = React;
}