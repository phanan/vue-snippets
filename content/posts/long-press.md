---
title: 'Long press directive'
date: 2018-08-13T08:38:53+02:00
description: A simple directive to execute a function when the element is long-pressed.
tags: [event, directive, dom]
author:
  name: Nosakhare Obaseki
  email: fredobaseki@gmail.com
  homepage: http://c0depanda.com
  twitter: c0depanda
  github: c0depanda
---

```html
<template>
  <button v-longpress='showOptions'>Hold me for a while</button>
</template>

<script>
const PRESS_TIMEOUT = 1000

Vue.directive('longpress', {
  bind: function (el, { value }, vNode) {
    if (typeof value !== 'function') {
      console.warn(`Expect a function, got ${value}`)
      return
    }

    let pressTimer = null

    const start = e => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => value(e), PRESS_TIMEOUT)
      }
    }

    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    ;['mousedown', 'touchstart'].forEach(e => el.addEventListener(e, start))
    ;['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel))
  }
})
</script>
```

A more in-depth article with commented code can be found [here](https://blog.logrocket.com/building-a-long-press-directive-in-vue-3408d60fb511).