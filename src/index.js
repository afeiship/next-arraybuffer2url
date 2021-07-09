(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.arraybuffer2url = function (inArrayBuffer) {
    var bytes = new Uint8Array(inArrayBuffer);
    var blob = new Blob([bytes.buffer]);
    return URL.createObjectURL(blob);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arraybuffer2url;
  }
})();
