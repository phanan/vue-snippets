---
title: "Manage Document Title"
date: 2018-08-22T11:32:48+02:00
description: Update the document's title with reactive data.
tags: [DOM]
author:
  name: Phan An
  email: me@phanan.net
  homepage: https://phanan.net
  twitter: notphanan
  github: phanan
---

```html
<script>
new Vue({
  el: '#app',
  data: () => ({
    documentTitle: document.title
  }),
  watch: {
    documentTitle: {
      immediate: true,
      handler (value) {
        document.title = value
      }
    }
  }
})
</script>
```

Since the root Vue instance is almost always initialized on a child element of `<body>`, we don't have access to elements in `<head>`. The solution is actually very simple: to watch a `data` attribute that corresponds to the document title, and then use DOM functions for updating.

This is only a proof of concept. If you want full power over a document's meta with SSR support, take a look at [vue-meta](https://github.com/declandewet/vue-meta).
