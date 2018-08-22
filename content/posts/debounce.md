---
title: "Debounce"
date: 2018-08-11T11:58:34+02:00
description: Prevent your methods or events from being executed so often using lodash's [`debounce()`](https://www.npmjs.com/package/lodash.debounce) function.
tags: [utility]
author:
  name: Phan An
  email: me@phanan.net
  homepage: https://www.phanan.net
  twitter: notphanan
  github: phanan
---

```html
<template>
  <input type="search" v-on:input="filter">
</template>

<script>
import { debounce } from 'lodash'

export default {
  methods: {
    filter: debounce(function () {
      // your logic here
    }, 200)
  }
}
</script>
```
