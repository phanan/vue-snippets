---
title: "Smarter Watchers"
date: 2018-08-12T21:55:58+02:00
description: Watchers that are called immediately when the component is ready.
tags: [watcher]
author:
  name: Chris Fritz
  email: chrisvfritz@gmail.com
  homepage: patreon.com/chrisvuefritz
  twitter: chrisvfritz
  github: chrisvfritz
---

```js
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true
  }
},

methods: {
  fetchUserList () {
    //
  }
}
```
