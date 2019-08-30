# gatsby-remark-containers

[Gatsby.js][gatsby] [Remark][remark] plugin wrapper for
[remark-containers][remarkcontainers].

Provides parsing for `:::` delimited containers to wrap markdown blocks in
arbitrary html. This snippet:

```markdown
::: aside
# Header One

With container contents.
:::
```

Results in:

```html
<aside>
  <h1>Header One</h1>
  <p>With container contents.</p>
</aside>
```

## Install

```bash
npm install --save gatsby-remark-containers
```

## Usage

In your `gatsby-config.js`:

```javascript
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-containers'
      ],
    },
  },
];
```

## Test + Cover

```bash
npm test
```

## License

[MIT][mit]


[gatsby]: https://www.gatsbyjs.org/
[mit]: https://github.com/brev/gatsby-remark-contianers/blob/master/LICENSE
[remark]: https://remark.js.org/
[remarkcontainers]: https://github.com/Nevenall/remark-containers#readme

