const games = [
  { name: 'Valorant', genre: 'TACTIQUE', description: 'Un jeu de tir en équipe où chaque agent a ses propres capacités.', symbol: 'V', art: 'valorant', rating: '★ 4.8', mode: 'En équipe' },
  { name: 'Minecraft', genre: 'AVENTURE', description: 'Construis, explore et invente ton propre monde, bloc après bloc.', symbol: '▧', art: 'minecraft', rating: '★ 4.9', mode: 'Créativité' },
  { name: 'Rocket League', genre: 'SPORT', description: 'Du football, des voitures turbo et des buts spectaculaires.', symbol: '◎', art: 'rocket', rating: '★ 4.7', mode: 'Compétitif' },
  { name: 'Fortnite', genre: 'ACTION', description: 'Explore des îles, relève des défis et joue avec tes amis.', symbol: '✦', art: 'fortnite', rating: '★ 4.6', mode: 'En équipe' }
];

const grid = document.querySelector('#game-grid');
const search = document.querySelector('#game-search');
const emptyState = document.querySelector('#empty-state');

function renderGames(query = '') {
  const normalized = query.trim().toLocaleLowerCase('fr');
  const filteredGames = games.filter(game => `${game.name} ${game.genre} ${game.description} ${game.mode}`.toLocaleLowerCase('fr').includes(normalized));
  grid.innerHTML = filteredGames.map(game => `
    <article class="game-card">
      <div class="game-art art-${game.art}">
        <span class="game-genre">${game.genre}</span><span class="game-symbol" aria-hidden="true">${game.symbol}</span><span class="game-rating">${game.rating}</span>
      </div>
      <div class="game-info"><h3>${game.name}</h3><p>${game.description}</p><div class="game-meta"><span>${game.mode}</span><span>À découvrir ↗</span></div></div>
    </article>`).join('');
  emptyState.hidden = filteredGames.length > 0;
}

search.addEventListener('input', event => renderGames(event.target.value));
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    search.focus();
  }
  if (event.key === 'Escape' && document.activeElement === search) search.blur();
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  nav.classList.toggle('open', !isOpen);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  }
});

renderGames();
