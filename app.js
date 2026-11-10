// 共通処理：LINEログイン確認・GASとの通信・バーコード表示
(function () {
  var C = window.APP_CONFIG;

  // ---- 試運転モード（LINEに繋がず、見た目と流れだけ確認する） ----
  var MOCK_KEY = 'mock_member';
  function mockApi(action, p) {
    var m = null;
    try { m = JSON.parse(localStorage.getItem(MOCK_KEY) || 'null'); } catch (e) {}
    if (action === 'getCard') {
      return Promise.resolve(m ? { ok: true, registered: true, code: m.code, name: m.name } : { ok: true, registered: false });
    }
    if (action === 'register') {
      m = { code: 'M0000002', name: p.sei + ' ' + p.mei };
      try { localStorage.setItem(MOCK_KEY, JSON.stringify(m)); } catch (e) {}
      return Promise.resolve({ ok: true, existing: false, code: m.code, name: m.name });
    }
    return Promise.resolve({ ok: false, message: '不明な操作です。' });
  }

  // ---- LINEログイン ----
  function init() {
    if (C.mock) return Promise.resolve();
    return liff.init({ liffId: C.liffId }).then(function () {
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: location.href });
        return new Promise(function () {}); // ログイン画面へ移動するので待ち続ける
      }
    });
  }

  // ---- GASへ送る ----
  function api(action, payload) {
    if (C.mock) return mockApi(action, payload || {});
    var body = Object.assign({ action: action, idToken: liff.getIDToken() }, payload || {});
    // text/plain にすると事前確認（プリフライト）が不要になり、GASでも通信できる
    return fetch(C.gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
    }).then(function (r) { return r.json(); });
  }

  // ---- バーコード（CODE128）を描く ----
  function drawBarcode(svgEl, code) {
    JsBarcode(svgEl, code, {
      format: 'CODE128',
      width: 3,
      height: 120,
      margin: 16,          // 左右の余白（読み取りに必要）
      displayValue: false,
      background: '#ffffff',
      lineColor: '#000000',
    });
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');
    svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  }

  window.App = { config: C, init: init, api: api, drawBarcode: drawBarcode };
})();
