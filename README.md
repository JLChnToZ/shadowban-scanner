# Shadowban Scanner

[![Node.js CI (build)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/build.yml/badge.svg)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/build.yml) [![Node.js CI (lint)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/lint.yml/badge.svg)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/lint.yml) [![Node.js CI (format)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/format.yml/badge.svg)](https://github.com/Robot-Inventor/shadowban-scanner/actions/workflows/format.yml)

![Shadowban Scanner's logo](doc/image/logo.svg)

[日本語で読む](README_ja.md) | [한국어로 읽기](README_ko.md) | [以繁體字閱讀](README_zh_tw.md)

A browser extension that detects shadowbans on Twitter.

## Installation

- [Chrome](https://chrome.google.com/webstore/detail/enlganfikppbjhabhkkilafmkhifadjd/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/shadowban-scanner/kfeecmboomhggeeceipnbbdjmhjoccbl)
- [Firefox](https://addons.mozilla.org/firefox/addon/shadowban-scanner/)

### User Scripts

The settings cannot be changed in the user script version. If you need detailed customization, please use the Browser Extensions version.

- [English](https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/en.user.js)
- [日本語](https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ja.user.js)
- [한국어](https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/ko.user.js)
- [繁體字](https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/zh_TW.user.js)

## Features

- Detects shadowbans per account
- Detect sensitive flags for profile media (icon and header image)
- Detects sensitive flags per tweet
- Detects age restrictions on tweets

![Screenshot of per-account shadowban detection](doc/image/screenshot2_en.png)

![Screenshot of per-tweet shadowban detection](doc/image/screenshot1_en.png)

## Accuracy

When it comes to detecting shadowbans on an account level, like many other tools, there can be instances of false positives and false negatives. However, when it comes to detecting sensitive flags and age restrictions on a tweet level, it can be almost perfectly accurate. Therefore, it is recommended to use Shadowban Scanner to continuously monitor the status of your account and tweets, while also utilizing other tools alongside it.

## Detection Methods

For more information on detection methods and technical details, please refer to the following documents.

- [How Shadowban Scanner Works and About Shadowban](./doc/en/about-shadowban.md)
- [Technical Information on Shadowban Scanner (Japanese)](./doc/en/technical-information.md)

## Privacy Policy

This extension performs all processing on the user's computer. No data is transmitted to an external server. There is no attempt to access internal APIs by obtaining the user's credentials without their permission, as is the case with some extensions.

## License

This extension is released under the MIT License.

## Adding Language Localization

To add a new language, see the [Localization Guide (English)](doc/localization.md).

## Development

### Manifest

To generate a Manifest file or change the version, run the following command. ``<manifestVersion>`` can be 2 or 3. Also, the ``version`` field in the Manifest file will be the value of the ``version`` field in ``package.json``.

```console
npm run switchManifest <manifestVersion>
```

### Build

```console
npm run build
```

### Package

```console
npm run package
```
