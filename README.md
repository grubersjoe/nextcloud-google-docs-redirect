# Google Docs Redirect

This Nextcloud app adds a few lines of JavaScript to open uploaded Google Docs
documents in a new tab (redirect to Google Docs) instead of downloading them.

> [!IMPORTANT] This plugin is deprecated and does not work for Nextcloud
> versions newer than v28. See this
> [comment](https://github.com/grubersjoe/nextcloud-google-docs-redirect/issues/8#issuecomment-2567125303)
> for more context.

The following file extensions are supported:

- `.gdoc`
- `.gddoc`
- `.gsheet`
- `.gdsheets`
- `.gslides`
- `.gdslides`
- `.glink`
- `.gdlink`
- `.gform`

## Development

For development, you need the following dependencies:

- on mac OS: `gtar`: `brew install gnu-tar`
- [Prettier](https://prettier.io/) in your path

There is a Makefile to perform the following tasks:

```sh
make format
make release
```
