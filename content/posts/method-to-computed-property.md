---
title: "Methods to computed properties"
date: 2018-08-14T08:17:15+02:00
description: When you find yourself in need of using an argument for a computed property, consider creating and moving the logic into a child component.
tags: [component, computed property]
author:
  name: Phan An
  email: me@phanan.net
  homepage: https://phanan.net
  twitter: notphanan
  github: phanan
---

```html
<!-- BEFORE -->
<template>
  <section class="posts">
    <article v-for="post in posts">
      <a :href="getUrl(post)">{{ getTitle(post) }}</a>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    getUrl (post) { ... },
    getTitle (post) { ... }
  }
}
</script>


<!-- AFTER -->
<!-- 1. PostList.vue -->
<template>
  <section class="posts">
    <PostItem v-for="post in posts" :post="post"/>
  </section>
</template>

<!-- 2. PostItem.vue -->
<template>
  <article v-for="post in posts">
    <a :href="url">{{ title }}</a>
  </article>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    url () { /* compute on this.post */ },
    title () { /* compute on this.post */ }
  }
}
</script>
```

This results in simpler and decoupled components, structured and moduralized code, plus you have the benefits of computed property's caching for free.

Originally tweeted by [@alexjoverm](https://twitter.com/alexjoverm/status/1028907524504870912).