---
title: "Detect if user has scrolled to bottom"
date: 2018-08-12T10:24:39+02:00
description: Detect if the user has scrolled to bottom of a container element and executed a function (for example, load more posts à la infinite scrolling).
tags: [utility, DOM]
author:
  name: Phan An
  email: me@phanan.net
  homepage: https://www.phanan.net
  twitter: notphanan
  github: phanan
---

```html
<template>
  <div @scroll="onScroll"></div>
</template>

<script>
export default function () {
  methods: {
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMorePosts()
      }
    }
  }
}
</script>
```
