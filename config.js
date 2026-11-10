// 設定ファイル。ここだけ書き換えます。
window.APP_CONFIG = {
  mock: false,                 // true：LINEに繋がず見た目だけ確認する試運転モード。本番は false
  liffId: '2012487241-2TDjoRbH',               // LINE Developers で作ったLIFFアプリのID
  gasUrl: 'https://script.google.com/macros/s/AKfycbyg7WNjuYNGgpS9IimtptLnmB5XCe8I8IoOZXU-szYC-3Eq8bZztn3eMrMuYGX8NGnO/exec',                 // GASを「ウェブアプリ」として公開したURL
  shopName: 'ACT Sound Product',        // お店の名前
  privacyText:
    '【仮の文面】ご入力いただいたお名前・電話番号は、会員証の発行とお店でのご案内の' +
    '目的にのみ使います。（お店の正式な文面に差し替えます）',
};
