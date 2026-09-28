const games = [
  { id: 'valorant', name: 'Valorant', genre: 'Tactique', description: 'Un jeu en équipe où chaque agent a ses propres capacités.', symbol: 'V', art: 'valorant', mode: 'Stratégie et précision', details: ['Valorant est un jeu de tir tactique qui se joue en équipes. Au début d’une manche, chaque joueur choisit un agent : chacun possède des capacités différentes, comme poser un écran de fumée, repérer une zone ou aider ses coéquipiers. L’objectif change selon le camp : attaquer un site ou le défendre.', 'La précision compte, mais la stratégie aussi. Il faut observer la carte, écouter les informations de ses coéquipiers et décider quand avancer ensemble. Connaître les capacités des agents aide à mieux comprendre ce qui se passe, même quand on débute.', 'Les manches sont courtes et le rythme peut devenir intense. Entraîne-toi tranquillement, joue avec des personnes qui restent respectueuses et fais une pause si une partie t’énerve. Le jeu se joue en ligne : vérifie les réglages de discussion et de confidentialité avec un parent.'] },
  { id: 'minecraft', name: 'Minecraft', genre: 'Aventure', description: 'Construis, explore et invente ton propre monde, bloc après bloc.', symbol: '▧', art: 'minecraft', mode: 'Construction et exploration', details: ['Minecraft te laisse créer ton aventure comme tu le souhaites. Tu peux récolter du bois, fabriquer des outils, construire une maison ou partir explorer des montagnes, des grottes et des villages. Chaque monde est différent, ce qui donne envie de voir ce qu’il y a derrière la prochaine colline.', 'En mode Survie, il faut réunir des ressources et préparer son équipement avant de s’éloigner. En mode Créatif, tu peux construire sans manquer de matériaux et voler au-dessus de tes constructions. Tu peux aussi choisir des objectifs personnels : bâtir un château, aménager une ferme ou relier plusieurs maisons par un chemin.', 'Le jeu peut se découvrir seul ou avec d’autres personnes, selon l’édition et les paramètres choisis. Si tu rejoins un monde en ligne, fais-le avec des personnes que tu connais et garde tes informations privées. Il n’y a pas une seule bonne façon de jouer : inventer ses propres projets fait partie du plaisir.'] },
  { id: 'rocket-league', name: 'Rocket League', genre: 'Sport', description: 'Du football, des voitures turbo et des buts spectaculaires.', symbol: '◎', art: 'rocket', mode: 'Sport et compétition', details: ['Rocket League mélange le football et les voitures propulsées par des fusées. Deux équipes essaient d’envoyer un gros ballon dans le but adverse, dans une arène fermée. Les commandes de base sont faciles à comprendre : accélérer, tourner, sauter et utiliser un boost.', 'La difficulté vient du contrôle de la voiture dans les airs et du bon moment pour toucher le ballon. On progresse en apprenant à lire sa trajectoire, à ne pas se précipiter et à laisser parfois un coéquipier prendre le tir. Le mode entraînement permet de répéter des gestes sans la pression d’un match.', 'Une bonne équipe ne fonce pas tous en même temps vers le ballon. Essaie de garder une position utile et encourage les autres après une erreur : un match peut changer très vite. Les parties en ligne sont compétitives, alors règle les options de discussion et arrête-toi si les échanges deviennent désagréables.'] },
  { id: 'fortnite', name: 'Fortnite', genre: 'Action', description: 'Explore des îles, relève des défis et joue avec tes amis.', symbol: '✦', art: 'fortnite', mode: 'Défis et jeu en équipe', details: ['Fortnite rassemble plusieurs façons de jouer autour d’un univers coloré. Selon le mode, tu peux participer à une partie de survie, construire, explorer une île ou essayer des expériences créées par la communauté. Les objectifs et le rythme ne sont donc pas les mêmes d’un mode à l’autre.', 'Dans les modes en équipe, le plus utile est souvent de rester près de ses coéquipiers, de partager les objets trouvés et de se mettre d’accord sur un endroit où aller. Si tu préfères jouer à ton rythme, explore les autres modes et choisis celui qui te plaît le plus.', 'Certains éléments du jeu peuvent proposer des achats ou des échanges avec d’autres joueurs. Avant d’acheter quoi que ce soit ou d’accepter une demande, vérifie les réglages avec un parent. Utilise un nom de joueur qui ne révèle pas ton identité et ne donne jamais ton mot de passe ou tes coordonnées.'] },
  { id: 'roblox', name: 'Roblox', genre: 'Créativité', description: 'Découvre des mondes créés par les joueurs et imagine le tien.', symbol: '◇', art: 'roblox', mode: 'Création et découverte', details: ['Roblox est une plateforme qui réunit de nombreuses expériences conçues par des créateurs. Tu peux y trouver des parcours d’obstacles, des jeux de rôle, des défis de construction ou des aventures en équipe. Chaque expérience a ses propres règles : le mieux est de lire sa présentation et de commencer par celles qui t’intéressent.', 'Ce qui plaît souvent, c’est la variété : après une partie, tu peux essayer quelque chose de complètement différent. Certaines expériences encouragent aussi la création. Prends le temps de comprendre les commandes et les règles avant de rejoindre une partie avec d’autres joueurs.', 'Comme les contenus viennent de nombreux créateurs, toutes les expériences ne se ressemblent pas. Choisis les jeux avec un parent, utilise les outils de confidentialité et signale les comportements gênants. Ne partage jamais ton nom complet, ton école, ton adresse, tes coordonnées ni ton mot de passe, même si quelqu’un prétend en avoir besoin.'] },
  { id: 'fall-guys', name: 'Fall Guys', genre: 'Sport', description: 'Cours, saute et évite les obstacles dans des parcours loufoques.', symbol: '◉', art: 'fallguys', mode: 'Parcours et défis', details: ['Fall Guys transforme une course d’obstacles en compétition amusante. Ton personnage doit courir, sauter, plonger et garder l’équilibre pendant que le parcours bouge autour de lui. Il faut parfois atteindre une ligne d’arrivée, parfois rester sur une plateforme ou aider son équipe à réussir un défi.', 'Les premières tentatives servent surtout à découvrir les obstacles. Regarde comment les plateformes se déplacent, attends une seconde quand c’est nécessaire et ne t’inquiète pas si ton personnage tombe : la plupart des manches sont faites pour être imprévisibles.', 'Les parties sont rapides, ce qui permet d’en lancer une ou deux sans s’engager dans une longue aventure. Le jeu est particulièrement drôle quand on accepte les chutes et les retournements de situation. Félicite les autres joueurs et pense à faire une pause après plusieurs manches.'] },
  { id: 'stardew-valley', name: 'Stardew Valley', genre: 'Aventure', description: 'Fais pousser des cultures et découvre la vie à la campagne.', symbol: '✿', art: 'stardew', mode: 'Détente et exploration', details: ['Stardew Valley commence par une nouvelle vie à la campagne. Tu récupères une ferme à remettre en état, puis tu choisis comment organiser tes journées : planter des légumes, arroser les cultures, pêcher, explorer ou discuter avec les habitants du village.', 'Chaque journée offre un temps et une énergie limités, mais il n’y a pas besoin de tout réussir tout de suite. Tu peux te fixer un petit objectif, comme agrandir un champ ou découvrir un nouvel endroit, puis garder le reste pour une autre journée. Les saisons changent les cultures disponibles et donnent de nouvelles idées.', 'L’aventure récompense surtout la curiosité et la patience. Il est possible de découvrir progressivement les habitants, les objets et les lieux sans suivre un guide à chaque étape. C’est un bon jeu si tu aimes construire ton propre rythme et voir une ferme évoluer au fil du temps.'] },
  { id: 'overcooked', name: 'Overcooked! 2', genre: 'Action', description: 'Prépare des repas à plusieurs dans des cuisines mouvementées.', symbol: '♨', art: 'overcooked', mode: 'Coopération', details: ['Overcooked! 2 est un jeu de cuisine coopératif où l’équipe prépare des plats dans un temps limité. Il faut couper des ingrédients, les faire cuire, assembler les recettes et envoyer les assiettes. Au début, la cuisine est simple ; ensuite, des obstacles et des changements rendent les choses plus mouvementées.', 'La meilleure stratégie est de se répartir les tâches avant que tout le monde parte dans tous les sens. Une personne peut couper les légumes, une autre surveiller les casseroles, pendant qu’un équipier prépare les assiettes. Il faut aussi penser à laver les assiettes et à annoncer clairement ce qui manque.', 'Les niveaux demandent de communiquer, mais une partie ratée peut être aussi drôle qu’une victoire. Changez de rôle, essayez une autre organisation et recommencez sans vous accuser. Le jeu est surtout pensé pour jouer ensemble : il transforme une petite cuisine en défi d’équipe plein de surprises.'] }
];

const articles = {
  coop: { kicker: 'JOUER EN ÉQUIPE · 3 MIN', title: 'Les jeux coop, encore meilleurs entre amis', paragraphs: ['Dans un jeu coopératif, le but principal est d’avancer ensemble. L’équipe peut partager des rôles, résoudre des énigmes, construire un abri ou s’entraider pour terminer un niveau. La victoire devient un projet commun : chacun apporte quelque chose, même si son rôle change pendant la partie.', 'Avant de commencer, mettez-vous d’accord sur le jeu et sur la durée de la session. Tout le monde n’a pas forcément envie du même défi : certains préfèrent réfléchir, d’autres construire ou bouger. Choisir ensemble évite qu’un joueur impose le rythme aux autres.', 'Pendant la partie, dites clairement ce dont vous avez besoin. Dans Overcooked! 2, par exemple, annoncer « je coupe les légumes » aide l’équipe à s’organiser. Dans Minecraft, décider où bâtir la maison ou qui part chercher des ressources rend le projet plus amusant. Les consignes courtes fonctionnent souvent mieux que tout le monde qui parle en même temps.', 'Essayez de garder une bonne ambiance, surtout quand une mission échoue. Cherchez ce que vous pouvez changer à la prochaine tentative au lieu de vous accuser. Faites une pause si quelqu’un s’énerve ou si la partie dure plus longtemps que prévu. Une bonne soirée en équipe, c’est aussi quand tout le monde a envie de rejouer ensemble après.'] },
  choose: { kicker: 'CONSEILS · 4 MIN', title: 'Bien choisir son prochain jeu', paragraphs: ['Commence par te demander ce que tu as envie de ressentir. Tu veux construire un monde tranquille, faire une course, résoudre des énigmes, jouer en équipe ou apprendre un jeu compétitif ? Il n’existe pas un jeu parfait pour tout le monde : ce qui compte, c’est que le genre et le rythme te plaisent.', 'Regarde ensuite comment on joue réellement. Une bande-annonce montre souvent les moments les plus spectaculaires, mais elle n’explique pas toujours si les parties sont longues, s’il faut jouer en ligne ou si le jeu demande beaucoup de réflexes. Une fiche ou une vidéo de découverte peut t’aider à mieux comprendre.', 'Vérifie la classification par âge avec un parent, puis regardez ensemble si le jeu contient des achats, des conversations en ligne ou des options de confidentialité à régler. Si tu ne sais pas ce qu’un bouton d’achat va faire, demande avant de cliquer. Pour les jeux gratuits, vérifie aussi si des objets payants sont proposés dans le jeu.', 'Enfin, essaie de ne pas te sentir obligé de choisir le jeu que tout le monde possède. Tu peux commencer par un mode d’entraînement, une démo ou une partie avec quelqu’un de confiance, quand c’est possible. Si le jeu ne te plaît pas, tu peux en essayer un autre : découvrir ses goûts fait aussi partie du plaisir.'] },
  safe: { kicker: 'BONNES HABITUDES · 3 MIN', title: 'Jouer en ligne en toute tranquillité', paragraphs: ['Les jeux en ligne permettent de rencontrer d’autres joueurs, mais ton identité doit rester privée. N’écris pas ton nom complet, ton adresse, le nom de ton école, tes horaires, ton numéro de téléphone ou tes mots de passe dans une discussion. Choisis un pseudonyme qui ne révèle pas ces informations.', 'Avant de rejoindre une partie, regarde les paramètres de confidentialité avec un parent. Selon le jeu, tu peux choisir qui peut t’envoyer des messages, rejoindre ton équipe ou voir ton profil. Garde les conversations ouvertes aux personnes que tu connais et n’accepte pas une demande simplement parce que quelqu’un insiste.', 'Si une personne t’insulte, te met mal à l’aise, demande une photo ou veut poursuivre la discussion ailleurs, arrête de répondre. Utilise les fonctions de blocage et de signalement du jeu, puis raconte ce qui s’est passé à un parent ou à un adulte de confiance. Tu n’as pas besoin de gérer seul une situation inquiétante.', 'De ton côté, aide à garder la partie agréable : parle aux autres avec respect, accepte que tout le monde fasse des erreurs et fais une pause quand tu en as besoin. Tu peux quitter une partie sans te justifier si tu ne te sens plus à l’aise. Le jeu doit rester un moment sympa, jamais une obligation.'] }
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
const releaseGrid = document.querySelector('.release-grid');
const trailerDialog = document.querySelector('#trailer-dialog');
const trailerFrame = document.querySelector('#trailer-frame');
const trailerTitle = document.querySelector('#trailer-title');
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
    return `<article class="game-card" data-game-card="${game.id}">
      <div class="game-art art-${game.art}">
        <span class="game-genre">${game.genre.toLocaleUpperCase('fr')}</span>
        <span class="game-symbol" aria-hidden="true">${game.symbol}</span>
        <button class="favorite-button${isFavorite ? ' is-favorite' : ''}" type="button" data-favorite="${game.id}" aria-label="${isFavorite ? 'Retirer des' : 'Ajouter aux'} favoris : ${game.name}" aria-pressed="${isFavorite}">♥</button>
      </div>
      <div class="game-info"><h3><button class="game-title-button" type="button" data-game="${game.id}" aria-label="Voir la description de ${game.name}">${game.name}</button></h3><p>${game.description}</p><div class="game-meta"><span>${game.mode}</span><button class="details-button" type="button" data-game="${game.id}">Découvrir <span aria-hidden="true">↗</span></button></div></div>
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
  if (game) openDialog({ title: game.name, kicker: `${game.genre.toLocaleUpperCase('fr')} · ${game.mode.toLocaleUpperCase('fr')}`, paragraphs: game.details });
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
  const gameCard = event.target.closest('[data-game-card]');
  if (detailsButton) {
    openGame(detailsButton.dataset.game);
    return;
  }
  if (gameCard) openGame(gameCard.dataset.gameCard);
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

const newsGrid = document.querySelector('.news-grid');
function openArticleCard(card) {
  if (card && articles[card.dataset.article]) openDialog(articles[card.dataset.article]);
}
newsGrid.addEventListener('click', event => {
  openArticleCard(event.target.closest('[data-article]'));
});
newsGrid.addEventListener('keydown', event => {
  const card = event.target.closest('[data-article]');
  if (!card || (event.key !== 'Enter' && event.key !== ' ')) return;
  event.preventDefault();
  openArticleCard(card);
});

releaseGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-trailer]');
  if (!button) return;
  trailerTitle.textContent = button.dataset.trailerTitle;
  trailerFrame.title = `Trailer officiel de ${button.dataset.trailerTitle}`;
  trailerFrame.src = `https://www.youtube-nocookie.com/embed/${button.dataset.trailer}?autoplay=1&rel=0`;
  trailerDialog.showModal();
});
trailerDialog.querySelector('.trailer-close').addEventListener('click', () => trailerDialog.close());
trailerDialog.addEventListener('close', () => { trailerFrame.src = ''; });
trailerDialog.addEventListener('click', event => {
  if (event.target === trailerDialog) trailerDialog.close();
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
document.querySelectorAll('[data-release-date]').forEach(badge => {
  const [year, month, day] = badge.dataset.releaseDate.split('-').map(Number);
  const releaseDay = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((releaseDay - today) / 86400000);
  badge.textContent = days > 1 ? `Dans ${days} jours` : days === 1 ? 'Demain' : days === 0 ? 'Aujourd’hui' : `Sorti depuis ${Math.abs(days)} j`;
  badge.setAttribute('aria-label', badge.textContent);
});
saveFavorites();
renderGames();


const radarTabs = [...document.querySelectorAll('[data-radar-tab]')];
const radarPanels = [...document.querySelectorAll('[data-radar-panel]')];
function activateRadarTab(tab, moveFocus = false) {
  const selectedId = tab.dataset.radarTab;
  radarTabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  radarPanels.forEach(panel => { panel.hidden = panel.dataset.radarPanel !== selectedId; });
  if (moveFocus) tab.focus();
}
radarTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateRadarTab(tab));
  tab.addEventListener('keydown', event => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % radarTabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + radarTabs.length) % radarTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = radarTabs.length - 1;
    else return;
    event.preventDefault();
    activateRadarTab(radarTabs[nextIndex], true);
  });
});

const customCursor = document.querySelector('#custom-cursor');
if (window.matchMedia('(pointer: fine)').matches && customCursor) {
  document.body.classList.add('has-custom-cursor');
  const updateCursor = event => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
    customCursor.classList.add('is-visible');
    customCursor.classList.toggle('is-hovering', Boolean(event.target.closest('a, button, input, [role="tab"]')));
  };
  window.addEventListener('pointermove', updateCursor, { passive: true });
  document.addEventListener('pointerover', updateCursor, { passive: true });
  document.addEventListener('pointerout', event => {
    if (!event.relatedTarget) customCursor.classList.remove('is-visible');
  });
  window.addEventListener('blur', () => customCursor.classList.remove('is-visible'));
}

const scrollProgress = document.querySelector('#scroll-progress');
let progressFrame = 0;
function updateScrollProgress() {
  if (!scrollProgress || progressFrame) return;
  progressFrame = window.requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    scrollProgress.style.setProperty('--scroll-progress', String(Math.max(0, Math.min(1, progress))));
    progressFrame = 0;
  });
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress, { passive: true });
updateScrollProgress();
