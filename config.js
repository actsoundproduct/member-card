// 設定ファイル。ここだけ書き換えます。
window.APP_CONFIG = {
  mock: false,                 // true：LINEに繋がず見た目だけ確認する試運転モード。本番は false
  liffId: '2012487241-2TDjoRbH',               // LINE Developers で作ったLIFFアプリのID
  gasUrl: 'https://script.google.com/macros/s/AKfycbyg7WNjuYNGgpS9IimtptLnmB5XCe8I8IoOZXU-szYC-3Eq8bZztn3eMrMuYGX8NGnO/exec',                 // GASを「ウェブアプリ」として公開したURL
  shopName: 'ACT Sound Product',        // お店の名前
  privacyText: [
    '【個人情報のお取り扱いについて】',
    'ACT Sound Product（以下「当店」）は、ご入力いただく情報を、次のとおり取り扱います。',
    '',
    '■取得する情報',
    'お名前、フリガナ、電話番号、LINEのユーザーID（LINEの識別用の番号です。LINEの表示名やトーク内容は取得しません）',
    '',
    '■利用目的',
    '・会員証の発行と管理',
    '・ポイントの管理',
    '・ご来店時の会員確認、お問い合わせへの対応',
    '・当店からのご案内（セール、イベントなど）の連絡',
    '',
    '■保管と第三者への提供',
    '情報は、当店が利用するクラウドサービス（Googleスプレッドシート）と、当店のレジシステム（スマレジ）で保管します。法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。',
    '',
    '■開示・訂正・削除のご依頼',
    '下記までお申し付けください。',
    '電話：06-4400-2946',
    'メール：contact@actsound.co.jp',
    '',
    '同意いただけない場合は、会員登録をご利用いただけません。',
  ].join('\n'),
};
