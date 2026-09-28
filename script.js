const games = [
  { id: 'valorant', name: 'Valorant', genre: 'Tactique', description: 'Un jeu en équipe où chaque agent a ses propres capacités.', symbol: 'V', art: 'valorant', mode: 'Stratégie et précision', details: 'Chaque manche demande de communiquer et de réfléchir ensemble. C’est un jeu compétitif : pense à faire des pauses et à garder une bonne ambiance avec ton équipe.' },
  { id: 'minecraft', name: 'Minecraft', genre: 'Aventure', description: 'Construis, explore et invente ton propre monde, bloc après bloc.', symbol: '▧', art: 'minecraft', mode: 'Construction et exploration', details: 'Construis une maison, pars explorer ou invente tes propres règles. En mode créatif, tu as toutes les ressources pour laisser parler ton imagination.' },
  { id: 'rocket-league', name: 'Rocket League', genre: 'Sport', description: 'Du football, des voitures turbo et des buts spectaculaires.', symbol: '◎', art: 'rocket', mode: 'Sport et compétition', details: 'Des voitures jouent au foot dans une arène. Les premières parties sont faciles à comprendre; apprendre à maîtriser les sauts et les boosts prend du temps.' },
  { id: 'fortnite', name: 'Fortnite', genre: 'Action', description: 'Explore des îles, relève des défis et joue avec tes amis.', symbol: '✦', art: 'fortnite', mode: 'Défis et jeu en équipe', details: 'Fortnite propose plusieurs expériences et modes de jeu. Vérifie les paramètres de confidentialité et les achats avec un parent avant de jouer.' },
  { id: 'roblox', name: 'Roblox', genre: 'Créativité', description: 'Découvre des mondes créés par les joueurs et imagine le tien.', symbol: '◇', art: 'roblox', mode: 'Création et découverte', details: 'Roblox rassemble beaucoup d’expériences créées par la communauté. Les contenus et les échanges varient selon les jeux : choisis-les avec un parent et garde tes informations privées.' },
  { id: 'fall-guys', name: 'Fall Guys', genre: 'Sport', description: 'Cours, saute et évite les obstacles dans des parcours loufoques.', symbol: '◉', art: 'fallguys', mode: 'Parcours et défis', details: 'Des parcours colorés, des obstacles et beaucoup de chutes rigolotes. Le but est d’arriver au bout en gardant le sourire.' },
  { id: 'stardew-valley', name: 'Stardew Valley', genre: 'Aventure', description: 'Fais pousser des cultures et découvre la vie à la campagne.', symbol: '✿', art: 'stardew', mode: 'Détente et exploration', details: 'Tu peux t’occuper d’une ferme à ton rythme, rencontrer les habitants et explorer les environs. C’est une aventure tranquille qui laisse le temps de choisir quoi faire.' },
  { id: 'overcooked', name: 'Overcooked! 2', genre: 'Action', description: 'Prépare des repas à plusieurs dans des cuisines mouvementées.', symbol: '♨', art: 'overcooked', mode: 'Coopération', details: 'Pour réussir les commandes, il faut se répartir les tâches et se parler. Les cuisines changent et rendent chaque partie un peu folle.' }
];

const articles = {
  coop: { kicker: 'JOUER EN ÉQUIPE · 3 MIN', title: 'Les jeux coop, encore meilleurs entre amis', paragraphs: ['Dans un jeu coopératif, le but est d’avancer ensemble. On peut partager des rôles, résoudre des énigmes ou s’entraider pour terminer un niveau.', 'Pour une bonne partie, choisissez un jeu qui plaît à tout le monde, mettez-vous d’accord sur la durée et gardez une équipe sympa. Overcooked! 2, Minecraft et certains modes de Fortnite sont des exemples à découvrir.'] },
  choose: { kicker: 'CONSEILS · 4 MIN', title: 'Bien choisir son prochain jeu', paragraphs: ['Demande-toi d’abord ce que tu as envie de faire : construire, explorer, résoudre des énigmes, jouer au sport ou relever un défi avec des amis.', 'Regarde ensuite la fiche du jeu avec un parent : âge conseillé, achats intégrés, jeu en ligne et paramètres de confidentialité. Une bande-annonce ne montre pas toujours toute l’expérience.'] },
  safe: { kicker: 'BONNES HABITUDES · 2 MIN', title: 'Jouer en ligne en toute tranquillité', paragraphs: ['Garde ton nom complet, ton adresse, ton école, tes mots de passe et tes coordonnées privés. Utilise les paramètres de confidentialité du jeu.', 'Si quelqu’un t’embête, arrête la conversation, bloque ou signale la personne et parle-en à un adulte de confiance. Un bon coéquipier respecte les autres.'] }
};

const grid = document.querySelector('#game-grid');
const search = document.querySelector('#game-search');
const emptyState = document.querySelector('#empty-state');
const resultsCount = document.querySelector('#results-count');
const favoriteCount = document.querySelector('#favorite-count');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const dialog = document.querySelector('#detail-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogContent = document.querySelector('#dialog-content');
const toast = document.querySelector('#toast');
let activeFilter = 'Tout';
let toastTimer;

function readFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem('gaming-co-favorites') || '[]'));
  } catch {
    return new Set();
  }
}

const favorites = readFavorites();

function saveFavorites() {
  try {
    localStorage.setItem('gaming-co-favorites', JSON.stringify([...favorites]));
  } catch {
    showToast('Favoris indisponibles dans ce navigateur.');
  }
  favoriteCount.textContent = favorites.size;
}

function renderGames() {
  const query = search.value.trim().toLocaleLowerCase('fr');
  const visibleGames = games.filter(game => {
    const matchesQuery = `${game.name} ${game.genre} ${game.description} ${game.mode}`.toLocaleLowerCase('fr').includes(query);
    const matchesFilter = activeFilter === 'Tout' || (activeFilter === 'Favoris' ? favorites.has(game.id) : game.genre.toLocaleLowerCase('fr') === activeFilter.toLocaleLowerCase('fr'));
    return matchesQuery && matchesFilter;
  });

  grid.innerHTML = visibleGames.map(game => {
    const isFavorite = favorites.has(game.id);
    return `<article class="game-card">
      <div class="game-art art-${game.art}">
        <span class="game-genre">${game.genre.toLocaleUpperCase('fr')}</span>
        <span class="game-symbol" aria-hidden="true">${game.symbol}</span>
        <button class="favorite-button${isFavorite ? ' is-favorite' : ''}" type="button" data-favorite="${game.id}" aria-label="${isFavorite ? 'Retirer des' : 'Ajouter aux'} favoris : ${game.name}" aria-pressed="${isFavorite}">♥</button>
      </div>
      <div class="game-info"><h3>${game.name}</h3><p>${game.description}</p><div class="game-meta"><span>${game.mode}</span><button class="details-button" type="button" data-game="${game.id}">Découvrir <span aria-hidden="true">↗</span></button></div></div>
    </article>`;
  }).join('');

  emptyState.hidden = visibleGames.length > 0;
  resultsCount.textContent = `${visibleGames.length} jeu${visibleGames.length > 1 ? 'x' : ''} affiché${visibleGames.length > 1 ? 's' : ''}`;
  favoriteCount.textContent = favorites.size;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

function openDialog({ title, kicker, paragraphs }) {
  dialogTitle.textContent = title;
  dialogKicker.textContent = kicker;
  dialogContent.replaceChildren(...paragraphs.map(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }));
  dialog.showModal();
}

function openGame(gameId) {
  const game = games.find(item => item.id === gameId);
  if (game) openDialog({ title: game.name, kicker: `${game.genre.toLocaleUpperCase('fr')} · ${game.mode.toLocaleUpperCase('fr')}`, paragraphs: [game.description, game.details] });
}

search.addEventListener('input', renderGames);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  renderGames();
}));

grid.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) {
    const gameId = favoriteButton.dataset.favorite;
    favorites.has(gameId) ? favorites.delete(gameId) : favorites.add(gameId);
    saveFavorites();
    renderGames();
    return;
  }
  const detailsButton = event.target.closest('[data-game]');
  if (detailsButton) openGame(detailsButton.dataset.game);
});

document.querySelector('.code-list').addEventListener('click', async event => {
  const button = event.target.closest('[data-code]');
  if (!button) return;
  const code = button.dataset.code;
  try {
    await navigator.clipboard.writeText(code);
  } catch {
    const temporaryInput = document.createElement('textarea');
    temporaryInput.value = code;
    temporaryInput.style.position = 'fixed';
    temporaryInput.style.opacity = '0';
    document.body.append(temporaryInput);
    temporaryInput.select();
    const copied = document.execCommand('copy');
    temporaryInput.remove();
    if (!copied) {
      showToast('Copie impossible. Sélectionne le code pour le copier.');
      return;
    }
  }
  showToast(`${code} copié — c’est un exemple fictif.`);
});

document.querySelector('.news-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-article]');
  if (button && articles[button.dataset.article]) openDialog(articles[button.dataset.article]);
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

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

const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const activeId = entry.target.id === 'codes-list' ? 'codes' : entry.target.id;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${activeId}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach(section => sectionObserver.observe(section));

document.querySelector('#current-year').textContent = new Date().getFullYear();
saveFavorites();
renderGames();
