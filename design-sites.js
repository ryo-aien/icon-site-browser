const iconSites = sites.slice();
const iconCategories = preferredCategories.slice();

const designSites = [
  { name: 'SANKOU!', url: 'https://sankoudesign.com/', description: '国内Webデザインの定番。業種・色・テイストなど細かく探せる。', categories: ['日本', 'Webサイト', 'ギャラリー'] },
  { name: 'MUUUUU.ORG', url: 'https://muuuuu.org/', description: '高品質な日本の縦長Webサイトを中心に厳選。', categories: ['日本', 'Webサイト', 'ギャラリー'] },
  { name: 'Web Design Clip', url: 'https://webdesignclip.com/', description: '国内中心。業種・カラー・レイアウトから探しやすい。', categories: ['日本', 'Webサイト', 'ギャラリー'] },
  { name: 'I/O 3000', url: 'https://io3000.com/', description: '国内外のWebデザインを幅広く収録。', categories: ['日本', '海外', 'Webサイト'] },
  { name: '81-web', url: 'https://81-web.com/', description: '日本のWebサイトを中心に集めたデザインギャラリー。', categories: ['日本', 'Webサイト', 'ギャラリー'] },
  { name: 'Web Design Garden', url: 'https://webdesigngarden.com/', description: 'コーポレート、EC、採用、LPなど用途別に探せる。', categories: ['日本', 'Webサイト', 'LP'] },
  { name: 'S5-Style', url: 'https://bm.s5-style.com/', description: '日本のWebデザインを横断的に見られるギャラリー。', categories: ['日本', 'Webサイト', 'ギャラリー'] },
  { name: '1GUU', url: 'https://1guu.jp/', description: '国内外のアニメーションやクリエイティブ表現に強い。', categories: ['日本', '海外', 'Webサイト'] },
  { name: 'KASOU', url: 'https://kasoudesign.com/', description: '洗練された日本のブランド・コーポレートサイト中心。', categories: ['日本', 'Webサイト', 'ブランド'] },

  { name: 'Awwwards', url: 'https://www.awwwards.com/', description: '世界的なWebデザインアワード。最先端の表現を探せる。', categories: ['海外', 'Webサイト', 'アワード'] },
  { name: 'CSS Design Awards', url: 'https://www.cssdesignawards.com/', description: '国際的なWebデザインアワード・ギャラリー。', categories: ['海外', 'Webサイト', 'アワード'] },
  { name: 'SiteInspire', url: 'https://www.siteinspire.com/', description: '洗練されたWebサイトをスタイルや用途で探せる。', categories: ['海外', 'Webサイト', 'ギャラリー'] },
  { name: 'Godly', url: 'https://godly.website/', description: 'モダンでインタラクティブなサイト事例に強い。', categories: ['海外', 'Webサイト', 'SaaS'] },
  { name: 'Land-book', url: 'https://land-book.com/', description: 'LP、SaaS、ポートフォリオなど高品質なWebサイト集。', categories: ['海外', 'LP', 'SaaS'] },
  { name: 'One Page Love', url: 'https://onepagelove.com/', description: '1ページ構成・ランディングページ専門のギャラリー。', categories: ['海外', 'LP', 'Webサイト'] },
  { name: 'Lapa Ninja', url: 'https://www.lapa.ninja/', description: 'SaaSやスタートアップのLPを大量に収録。', categories: ['海外', 'LP', 'SaaS'] },
  { name: 'Landingfolio', url: 'https://www.landingfolio.com/', description: 'Hero、Pricing、CTAなどセクション単位でも参考にできる。', categories: ['海外', 'LP', 'UIパターン'] },
  { name: 'Minimal Gallery', url: 'https://minimal.gallery/', description: 'ミニマルでタイポグラフィ重視のWebサイト集。', categories: ['海外', 'Webサイト', 'ミニマル'] },
  { name: 'Brutalist Websites', url: 'https://brutalistwebsites.com/', description: 'ブルータリズム・実験的Webデザインに特化。', categories: ['海外', 'Webサイト', '実験的'] },
  { name: 'Httpster', url: 'https://httpster.net/', description: 'デザイナー向けの洗練されたブランド・ポートフォリオサイト集。', categories: ['海外', 'Webサイト', 'ブランド'] },
  { name: 'Commerce Cream', url: 'https://commercecream.com/', description: 'Shopify・D2C・ECサイトのデザイン事例に特化。', categories: ['海外', 'EC', 'Webサイト'] },
  { name: 'Typewolf', url: 'https://www.typewolf.com/', description: 'Webタイポグラフィとフォント組み合わせの参考に強い。', categories: ['海外', 'タイポグラフィ', 'Webサイト'] },
  { name: 'Fonts In Use', url: 'https://fontsinuse.com/', description: '実案件でのフォント使用例を幅広く収録。', categories: ['海外', 'タイポグラフィ', 'ギャラリー'] },
  { name: 'Dribbble', url: 'https://dribbble.com/', description: 'Web、UI、カード、コンポーネントなどデザイン全般の参考。', categories: ['海外', 'UIパターン', 'ギャラリー'] },
  { name: 'Behance', url: 'https://www.behance.net/', description: 'Web・ブランド・UIのケーススタディを豊富に閲覧できる。', categories: ['海外', 'Webサイト', 'ギャラリー'] },

  { name: 'Mobbin', url: 'https://mobbin.com/', description: '実在Web・モバイルアプリの画面とフローを検索できる。', categories: ['Webアプリ', 'UIパターン', 'UXフロー', 'SaaS'] },
  { name: 'Page Flows', url: 'https://pageflows.com/', description: '登録、購入、設定など実サービスのUXフローを動画と画面で確認。', categories: ['Webアプリ', 'UXフロー', 'SaaS'] },
  { name: 'Refero', url: 'https://refero.design/', description: '実在サービスのWeb UIを画面・パターン単位で探せる。', categories: ['Webアプリ', 'UIパターン', 'SaaS'] },
  { name: 'Screenlane', url: 'https://screenlane.com/', description: 'Web・モバイルのUIスクリーンを継続的に収集。', categories: ['Webアプリ', 'UIパターン', 'ギャラリー'] },
  { name: 'UI Sources', url: 'https://uisources.com/', description: '実アプリの操作パターンやUXフロー研究に強い。', categories: ['Webアプリ', 'UXフロー', 'UIパターン'] },
  { name: 'SaaSFrame', url: 'https://www.saasframe.io/', description: 'SaaSのLPからDashboard、Account Setupまで幅広い実例。', categories: ['SaaS', 'Webアプリ', 'Dashboard', 'LP'] },
  { name: 'SaaSUI', url: 'https://www.saasui.design/', description: 'Dashboard、Settings、Table、OnboardingなどSaaS UIを画面タイプ別に整理。', categories: ['SaaS', 'Webアプリ', 'Dashboard', 'UIパターン'] },
  { name: 'Nicelydone', url: 'https://nicelydone.club/', description: '多数のSaaS製品から画面とユーザーフローを収集。', categories: ['SaaS', 'Webアプリ', 'UXフロー', 'UIパターン'] },
  { name: 'SaaS Interface', url: 'https://saasinterface.com/', description: 'Dashboard、Billing、Settings、TableなどSaaS内部画面に特化。', categories: ['SaaS', 'Webアプリ', 'Dashboard', 'UIパターン'] },
  { name: 'Saaspo', url: 'https://saaspo.com/', description: 'SaaSのLP、Pricing、Product、Customersページなどマーケティング側に強い。', categories: ['SaaS', 'LP', 'Webサイト'] },
  { name: 'WebInspoo', url: 'https://webinspoo.com/', description: 'SaaSサイトを色・フォント・技術など複数軸で探せる。', categories: ['SaaS', 'Webサイト', '海外'] },
  { name: 'SaaS Landing Page Examples', url: 'https://saaslandingpageexamples.com/', description: 'SaaS LPをPricing、Product Screenshotなど要素別にも探索できる。', categories: ['SaaS', 'LP', 'Webサイト'] }
];

const designCategories = ['すべて', 'SaaS', 'Webアプリ', 'Dashboard', 'UIパターン', 'UXフロー', 'LP', 'Webサイト', '日本', '海外', 'EC', 'タイポグラフィ', 'アワード'];
const loadedGuidelineSites = typeof guidelineSites === 'undefined' ? [] : guidelineSites;
const loadedGuidelineCategories = typeof guidelineCategories === 'undefined' ? ['すべて'] : guidelineCategories;
const modeState = { current: 'icons' };

const modeConfig = {
  icons: {
    sites: iconSites,
    categories: iconCategories,
    eyebrow: 'ICON DIRECTORY',
    searchPlaceholder: 'サイト名・特徴で検索…',
    previewPrompt: 'アイコンサイトを選択してください',
    emptyTitle: '左の一覧からアイコンサイトを選択'
  },
  design: {
    sites: designSites,
    categories: designCategories,
    eyebrow: 'WEB DESIGN DIRECTORY',
    searchPlaceholder: 'デザインサイト名・用途で検索…',
    previewPrompt: 'デザインサイトを選択してください',
    emptyTitle: '左の一覧からデザインサイトを選択'
  },
  guidelines: {
    sites: loadedGuidelineSites,
    categories: loadedGuidelineCategories,
    eyebrow: 'DESIGN GUIDELINE DIRECTORY',
    searchPlaceholder: '定義書名・企業名・特徴で検索…',
    previewPrompt: 'デザイン定義書を選択してください',
    emptyTitle: '左の一覧からデザイン定義書を選択'
  }
};

function resetPreviewForMode() {
  const config = modeConfig[modeState.current];
  state.selectedUrl = null;
  state.query = '';
  state.category = 'すべて';
  state.favoritesOnly = false;
  els.searchInput.value = '';
  els.favoritesOnlyButton.setAttribute('aria-pressed', 'false');
  els.previewTitle.textContent = config.previewPrompt;
  els.previewUrl.textContent = '';
  els.previewStatus.classList.remove('is-active');
  els.openExternalLink.href = '#';
  els.openExternalLink.classList.add('is-disabled');
  els.openExternalLink.setAttribute('aria-disabled', 'true');
  els.reloadButton.disabled = true;
  els.previewFrame.removeAttribute('src');
  els.frameWrap.hidden = true;
  els.emptyState.hidden = false;
  const emptyTitle = els.emptyState.querySelector('h2');
  const emptyText = els.emptyState.querySelector('p');
  if (emptyTitle) emptyTitle.textContent = config.emptyTitle;
  if (emptyText) emptyText.textContent = 'クリックすると、ここにサイトのプレビューを表示します。';
}

function switchResourceMode(mode) {
  const config = modeConfig[mode];
  if (!config) return;
  modeState.current = mode;

  sites.splice(0, sites.length, ...config.sites);
  preferredCategories.splice(0, preferredCategories.length, ...config.categories);

  document.querySelectorAll('[data-resource-mode]').forEach(button => {
    const active = button.dataset.resourceMode === mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = config.eyebrow;

  els.searchInput.placeholder = config.searchPlaceholder;

  resetPreviewForMode();
  renderFilters();
  renderSites();
}

document.querySelectorAll('[data-resource-mode]').forEach(button => {
  button.addEventListener('click', () => switchResourceMode(button.dataset.resourceMode));
});

switchResourceMode('icons');
