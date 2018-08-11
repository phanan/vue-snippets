# Vue Snippets

A collection of Vue.js snippets -- little trips, tricks, useful directives, some nice practices, you name it.

The [website](https://www.vuesnippets.com) is powered by [Hugo](https://gohugo.io/).

## Contribute

So you have a trick or two up your sleeve and want to share them with the world? Great! You're only a couple of steps away:

1. Make sure you have Hugo >= 0.46 installed. If you're on a Mac, just do a `brew install hugo` and you're good to go.
2. Fork this repo (duh!)
3. Execute `hugo new posts/your-awesome-tip.md` in your terminal. A file `content/posts/your-awesome-tip.md` will be created with some placeholder content, like this:
  ````yaml
  ---
  title: "Your Awesome Tip"
  date: 2018-08-11T19:58:07+02:00
  description: A short description for the snippet.
  tags: [max, three, tags]
  author:
    name: Your Name
    email: your@email.tld
    homepage: https://domain.tld
    twitter: twitter_handle_without_@
    github: github_handle
  ---

  ```html
  <template>
  </template>

  <script>
  </script>

  <style lang="scss" scoped>
  </style>
  ```
  ````
4. Update the file with your tip (and some of your details). You don't need to fill in everything -- only title, date, description, your name, and the snippet itself, are really required. The tip can be previewed with `hugo server`.
5. Once you're happy with how it looks, commit the file and create a PR 🎉