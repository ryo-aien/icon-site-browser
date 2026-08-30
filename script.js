const sites = [
  { name: 'FLAT ICON DESIGN', url: 'http://flat-icon-design.com/', description: 'カラフルなフラット素材。資料やWeb制作向き。', categories: ['フラット', '日本語', '素材'] },
  { name: 'ICOOON MONO', url: 'https://icooon-mono.com/', description: '日本の定番モノクロアイコン素材サイト。', categories: ['モノクロ', '日本語', 'SVG'] },
  { name: 'SATO ICONS', url: 'https://sato-icons.com/', description: '丸みのある親しみやすい日本語アイコン集。', categories: ['シンプル', '日本語', 'SVG'] },
  { name: 'SVG Repo', url: 'https://www.svgrepo.com/', description: '膨大なSVGアイコンを横断検索。', categories: ['SVG', '素材', '大量'] },
  { name: 'Freeicon', url: 'https://freeicon.com/ja', description: 'フラット・ライン・デュオトーンなど多彩。', categories: ['フラット', '日本語', '素材'] },
  { name: 'IconScout', url: 'https://iconscout.com/icons', description: 'アイコン、イラスト、3D素材まで幅広い。', categories: ['素材', 'フラット', '3D'] },
  { name: 'Flaticon', url: 'https://www.flaticon.com/', description: '世界最大級のアイコン素材検索サイト。', categories: ['素材', '大量', 'SVG'] },
  { name: 'Icons8', url: 'https://icons8.com/icons', description: 'スタイルを揃えやすいアイコン・イラスト群。', categories: ['素材', 'UI', 'SVG'] },
  { name: 'The Noun Project', url: 'https://thenounproject.com/', description: '概念やニッチな題材のアイコンに強い。', categories: ['素材', '大量', 'シンプル'] },
  { name: 'Roundicons', url: 'https://roundicons.com/', description: 'カラフルで完成度の高いアイコンセット。', categories: ['フラット', '素材'] },
  { name: 'Iconoir', url: 'https://iconoir.com/', description: 'ミニマルなアウトラインUIアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Lucide', url: 'https://lucide.dev/icons/', description: '開発者向けの人気オープンソースアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Tabler Icons', url: 'https://tabler.io/icons', description: '統一感の高い豊富な線画SVGアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Heroicons', url: 'https://heroicons.com/', description: 'Tailwind系UIと相性の良いアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Phosphor Icons', url: 'https://phosphoricons.com/', description: '複数ウェイトとFillを備えたUIアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Material Symbols', url: 'https://fonts.google.com/icons', description: 'Google公式のMaterial系UIアイコン。', categories: ['UI', 'Google', 'SVG'] },
  { name: 'Font Awesome', url: 'https://fontawesome.com/icons', description: 'Web開発の定番アイコンライブラリ。', categories: ['UI', '開発', 'SVG'] },
  { name: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/', description: 'Bootstrap公式。単体利用もできるSVG集。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Remix Icon', url: 'https://remixicon.com/', description: 'Web・アプリ向けの統一されたUIアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Feather Icons', url: 'https://feathericons.com/', description: '軽量でミニマルなアウトラインアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Simple Icons', url: 'https://simpleicons.org/', description: 'ブランド・サービスのロゴアイコンに特化。', categories: ['ブランド', 'SVG', 'OSS'] },
  { name: 'Boxicons', url: 'https://boxicons.com/', description: 'Line・Solid・Logoを揃えたWeb向けセット。', categories: ['UI', 'SVG', '開発'] },
  { name: 'Eva Icons', url: 'https://akveo.github.io/eva-icons/', description: 'モダンなOutline / Fillアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Ionicons', url: 'https://ionic.io/ionicons', description: 'Ionic公式のモバイルUI向けアイコン。', categories: ['UI', 'モバイル', 'SVG'] },
  { name: 'Octicons', url: 'https://primer.style/foundations/icons/', description: 'GitHub Primerで利用されるUIアイコン。', categories: ['UI', 'GitHub', 'SVG'] },
  { name: 'Radix Icons', url: 'https://www.radix-ui.com/icons', description: '小サイズでも視認性が高いUIアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Ant Design Icons', url: 'https://ant.design/components/icon/', description: '業務システムや管理画面向け。', categories: ['UI', '業務', '開発'] },
  { name: 'Carbon Icons', url: 'https://carbondesignsystem.com/elements/icons/library/', description: 'IBM Carbon Design Systemのアイコン群。', categories: ['UI', '業務', 'SVG'] },
  { name: 'Fluent UI Icons', url: 'https://github.com/microsoft/fluentui-system-icons', description: 'Microsoft Fluent系のシステムアイコン。', categories: ['UI', 'Microsoft', 'OSS'] },
  { name: 'CSS.gg', url: 'https://css.gg/', description: 'CSSのみでも扱えるミニマルアイコン。', categories: ['UI', 'CSS', 'OSS'] },
  { name: 'IconPark', url: 'https://iconpark.oceanengine.com/official', description: 'ByteDance製。多スタイル・大量収録。', categories: ['UI', 'SVG', '大量'] },
  { name: 'Hugeicons', url: 'https://hugeicons.com/', description: 'SaaS・業務系カテゴリが非常に豊富。', categories: ['UI', '大量', 'SVG'] },
  { name: 'Iconify', url: 'https://icon-sets.iconify.design/', description: '多数のアイコンライブラリを横断検索。', categories: ['横断検索', '大量', 'SVG'] },
  { name: 'Icones', url: 'https://icones.js.org/', description: 'Iconify系のアイコンを高速に横断検索。', categories: ['横断検索', '開発', 'SVG'] },
  { name: 'UXWing', url: 'https://uxwing.com/', description: 'UI・ビジネス系のSVG/PNG素材が豊富。', categories: ['素材', 'SVG', 'UI'] },
  { name: 'SVG Silh', url: 'https://svgsilh.com/', description: 'シルエット系SVG・PNG素材。', categories: ['素材', 'SVG', 'シルエット'] },
  { name: 'Game-icons.net', url: 'https://game-icons.net/', description: 'ゲーム・道具・記号など特殊カテゴリに強い。', categories: ['ゲーム', 'SVG', 'OSS'] },
  { name: 'Streamline', url: 'https://www.streamlinehq.com/icons', description: '大規模で品質の高い統一アイコンシリーズ。', categories: ['素材', 'UI', '大量'] },
  { name: 'Iconsax', url: 'https://iconsax.io/', description: 'モダンでバランスの良いUIアイコン。', categories: ['UI', 'SVG'] },
  { name: 'Lineicons', url: 'https://lineicons.com/', description: 'Web・SaaS向けのラインアイコン。', categories: ['UI', 'SVG', '開発'] },
  { name: 'CoreUI Icons', url: 'https://icons.coreui.io/', description: '管理画面・Bootstrap系UI向け。', categories: ['UI', '業務', 'SVG'] },
  { name: 'Circum Icons', url: 'https://circumicons.com/', description: '丸みのあるミニマルなアウトライン系。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Majesticons', url: 'https://www.majesticons.com/', description: 'シンプルで少し太めのUIアイコン。', categories: ['UI', 'SVG'] },
  { name: 'MingCute', url: 'https://www.mingcute.com/', description: '柔らかく親しみやすいUIアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Atlas Icons', url: 'https://atlasicons.vectopus.com/', description: 'SaaS・管理画面向けのミニマル系。', categories: ['UI', 'SaaS', 'SVG'] },
  { name: 'Teenyicons', url: 'https://teenyicons.com/', description: '小サイズでも崩れにくいミニマルアイコン。', categories: ['UI', 'SVG', 'OSS'] },
  { name: 'Zondicons', url: 'https://www.zondicons.com/', description: 'シンプルなSolid / Outlineアイコン。', categories: ['UI', 'SVG'] },
  { name: 'Google Fonts Icons', url: 'https://fonts.google.com/icons', description: 'Material Icons / Symbolsを検索。', categories: ['UI', 'Google', 'SVG'] },
  { name: 'Fontello', url: 'https://fontello.com/', description: '必要なアイコンだけ選んでWeb Font化。', categories: ['開発', 'Web Font', 'UI'] },
  { name: 'IcoMoon', url: 'https://icomoon.io/app/', description: 'SVGやWeb Fontのアイコンセットを構築。', categories: ['開発', 'Web Font', 'SVG'] },
  { name: 'OpenMoji', url: 'https://openmoji.org/', description: 'オープンソースのカラフルな絵文字アイコン。', categories: ['カラー', 'SVG', 'OSS'] },
  { name: 'Health Icons', url: 'https://healthicons.org/', description: '医療・ヘルスケア分野に特化したアイコン。', categories: ['医療', 'SVG', 'OSS'] }
];

const state = {
  query: '',
  category: 'すべて',
  favoritesOnly: false,
  selectedUrl: null,
  favorites: new Set(JSON.parse(localStorage.getItem('iconSiteFavorites') || '[]'))
};

const els = {
  searchInput: document.querySelector('#searchInput'),
  filters: document.querySelector('#categoryFilters'),
  resultCount: document.querySelector('#resultCount'),
  clearButton: document.querySelector('#clearButton'),
  siteList: document.querySelector('#siteList'),
  favoritesOnlyButton: document.querySelector('#favoritesOnlyButton'),
  themeButton: document.querySelector('#themeButton'),
  previewTitle: document.querySelector('#previewTitle'),
  previewUrl: document.querySelector('#previewUrl'),
  previewStatus: document.querySelector('#previewStatus'),
  openExternalLink: document.querySelector('#openExternalLink'),
  embedFallbackLink: document.querySelector('#embedFallbackLink'),
  reloadButton: document.querySelector('#reloadButton'),
  emptyState: document.querySelector('#emptyState'),
  frameWrap: document.querySelector('#frameWrap'),
  previewFrame: document.querySelector('#previewFrame')
};

const preferredCategories = ['すべて', '素材', 'UI', 'フラット', '日本語', 'SVG', 'OSS', '大量', '横断検索', '開発'];

function domainOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return url; }
}

function faviconUrl(url) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domainOf(url))}&sz=64`;
}

function renderFilters() {
  els.filters.innerHTML = preferredCategories.map(category => `
    <button class="filter-chip ${state.category === category ? 'is-active' : ''}" type="button" data-category="${category}">${category}</button>
  `).join('');
}

function filteredSites() {
  const q = state.query.trim().toLowerCase();
  return sites.filter(site => {
    const matchesQuery = !q || [site.name, site.description, ...site.categories].join(' ').toLowerCase().includes(q);
    const matchesCategory = state.category === 'すべて' || site.categories.includes(state.category);
    const matchesFavorite = !state.favoritesOnly || state.favorites.has(site.url);
    return matchesQuery && matchesCategory && matchesFavorite;
  });
}

function renderSites() {
  const list = filteredSites();
  els.resultCount.textContent = `${list.length} sites`;

  if (!list.length) {
    els.siteList.innerHTML = '<div class="no-results">条件に一致するサイトがありません。</div>';
    return;
  }

  els.siteList.innerHTML = list.map(site => {
    const selected = state.selectedUrl === site.url;
    const favorite = state.favorites.has(site.url);
    return `
      <button class="site-card ${selected ? 'is-selected' : ''}" type="button" data-url="${site.url}">
        <span class="site-logo"><img src="${faviconUrl(site.url)}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='${site.name.slice(0, 1)}'"></span>
        <span class="site-meta">
          <span class="site-name">${site.name}</span>
          <span class="site-description">${site.description}</span>
          <span class="site-tags">${site.categories.slice(0, 3).map(tag => `<span class="site-tag">${tag}</span>`).join('')}</span>
        </span>
        <span class="favorite-button ${favorite ? 'is-favorite' : ''}" role="button" tabindex="0" data-favorite-url="${site.url}" aria-label="${site.name}をお気に入り${favorite ? 'から外す' : 'に追加'}">${favorite ? '★' : '☆'}</span>
      </button>
    `;
  }).join('');
}

function selectSite(url) {
  const site = sites.find(item => item.url === url);
  if (!site) return;

  state.selectedUrl = url;
  els.previewTitle.textContent = site.name;
  els.previewUrl.textContent = domainOf(site.url);
  els.previewStatus.classList.add('is-active');
  els.openExternalLink.href = site.url;
  els.embedFallbackLink.href = site.url;
  els.openExternalLink.classList.remove('is-disabled');
  els.openExternalLink.removeAttribute('aria-disabled');
  els.reloadButton.disabled = false;
  els.emptyState.hidden = true;
  els.frameWrap.hidden = false;

  // Some websites block iframe embedding via X-Frame-Options/CSP.
  // The browser enforces those policies, so the external-link fallback remains visible.
  els.previewFrame.src = site.url;
  renderSites();
}

function toggleFavorite(url) {
  if (state.favorites.has(url)) state.favorites.delete(url);
  else state.favorites.add(url);
  localStorage.setItem('iconSiteFavorites', JSON.stringify([...state.favorites]));
  renderSites();
}

function clearFilters() {
  state.query = '';
  state.category = 'すべて';
  state.favoritesOnly = false;
  els.searchInput.value = '';
  els.favoritesOnlyButton.setAttribute('aria-pressed', 'false');
  renderFilters();
  renderSites();
}

function initTheme() {
  const saved = localStorage.getItem('iconSiteTheme');
  const darkBySystem = matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (darkBySystem ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  els.themeButton.textContent = theme === 'dark' ? '☀' : '☾';
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('iconSiteTheme', next);
  els.themeButton.textContent = next === 'dark' ? '☀' : '☾';
}

els.searchInput.addEventListener('input', event => {
  state.query = event.target.value;
  renderSites();
});

els.filters.addEventListener('click', event => {
  const chip = event.target.closest('[data-category]');
  if (!chip) return;
  state.category = chip.dataset.category;
  renderFilters();
  renderSites();
});

els.siteList.addEventListener('click', event => {
  const favorite = event.target.closest('[data-favorite-url]');
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favoriteUrl);
    return;
  }
  const card = event.target.closest('[data-url]');
  if (card) selectSite(card.dataset.url);
});

els.siteList.addEventListener('keydown', event => {
  const favorite = event.target.closest('[data-favorite-url]');
  if (favorite && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favoriteUrl);
  }
});

els.favoritesOnlyButton.addEventListener('click', () => {
  state.favoritesOnly = !state.favoritesOnly;
  els.favoritesOnlyButton.setAttribute('aria-pressed', String(state.favoritesOnly));
  renderSites();
});

els.clearButton.addEventListener('click', clearFilters);
els.themeButton.addEventListener('click', toggleTheme);
els.reloadButton.addEventListener('click', () => {
  if (!state.selectedUrl) return;
  els.previewFrame.src = 'about:blank';
  requestAnimationFrame(() => { els.previewFrame.src = state.selectedUrl; });
});

initTheme();
renderFilters();
renderSites();
