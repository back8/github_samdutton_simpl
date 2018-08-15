/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

const data = document.querySelector('p#data');
const start = Date.now(); // for browsers that don't support window.performance

export function log(...args) {
  const message = args.join('<br>');
  let time;
  if (window.performance) {
    time = (window.performance.now() / 1000).toFixed(3);
  } else {
    time = ((Date.now() - start) / 1000).toFixed(3);
  }
  data.innerHTML += `<span class = "time">${time}</span> s:<br>${message}<br><br>`;
}

