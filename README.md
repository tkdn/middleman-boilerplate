# Middleman Boilerplate with external pipeline Gulp, Webpack

## Require

- Ruby =>2.2
- Node.js >=4.0.0
- npm >=3.3.7

It's optimized for Windows.

## Installation

```bash
$ bundle install
$ npm install
```

## Development

```bash
$ bundle exec middleman server
```

Middleman server starts and external pipelines run as the npm scripts below.

- `npm run watch`
  - `gulp`
- `npm run js:dev`
  - `webpack --progress --colors --watch --config webpack.config.dev.js`

read `packge.json`.

## Build

```bash
$ bundle exec middleman build --clean
```

After middleman runs build, the npm script below runs.

- `npm run build`
  - `set NODE_ENV=production&& gulp build`

## Documents

Read [middleman document](https://middlemanapp.com/)
