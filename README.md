# Google Docs Redirect

This Nextcloud app adds a few lines of JavaScript to open uploaded Google Docs
documents in a new tab (redirect to Google Docs) instead of downloading them.

The following file extensions are supported:

- `.gdoc`
- `.gddoc`
- `.gsheet`
- `.gdsheets`
- `.gslides`
- `.gdslides`
- `.gform`

## Development

Install the development dependencies:

```sh
npm install
```

On macOS you need to install `gtar`, additionally:

 ```sh
  brew install gnu-tar
  ```

### Make commands

```sh
make format
make release
```
