# next-arraybuffer2url
> Array buffer to blob url.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-arraybuffer2url
```

## usage
```js
import '@jswork/next-arraybuffer2url';

const xhrOverride = new XMLHttpRequest();
xhrOverride.responseType = 'arraybuffer';
$.ajax({
  url: '/url/of/your/binary/data',
  method: 'GET',
  xhr: function() {
      return xhrOverride;
  }
}).then(function (responseData) {
  const url = nx.arraybuffer2url(responseData);

  // <img src={url} />
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-arraybuffer2url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-arraybuffer2url
[version-url]: https://npmjs.org/package/@jswork/next-arraybuffer2url

[license-image]: https://img.shields.io/npm/l/@jswork/next-arraybuffer2url
[license-url]: https://github.com/afeiship/next-arraybuffer2url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-arraybuffer2url
[size-url]: https://github.com/afeiship/next-arraybuffer2url/blob/master/dist/next-arraybuffer2url.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-arraybuffer2url
[download-url]: https://www.npmjs.com/package/@jswork/next-arraybuffer2url
