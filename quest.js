(() => {
  const originalButtons = [...document.querySelectorAll('[data-quest]')];
  const questButtons = originalButtons.map(button => {
    const freshButton = button.cloneNode(true);
    button.replaceWith(freshButton);
    return freshButton;
  });
  const questStorageKey = 'gaming-co-quest-progress';
  const questRounds = [
    [
      { id: 'fiche', category: 'EXPLORATION', title: 'Découvre une fiche de jeu', description: 'Choisis un jeu et lis sa description.', xp: 30 },
      { id: 'guide', category: 'CONSEILS', title: 'Lis un guide gaming', description: 'Récupère une astuce pour ta prochaine partie.', xp: 25 },
      { id: 'favori', category: 'COLLECTION', title: 'Choisis ton jeu favori', description: 'Ajoute un jeu à tes favoris.', xp: 45 }
    ],
    [
      { id: 'sortie', category: 'NOUVEAUTÉS', title: 'Repère une sortie à venir', description: 'Découvre un jeu qui arrive bientôt.', xp: 25 },
      { id: 'trailer', category: 'CINÉMA GAMING', title: 'Lance un trailer', description: 'Regarde la bande-annonce d’un jeu.', xp: 35 },
      { id: 'radar', category: 'TENDANCES', title: 'Explore le radar gaming', description: 'Trouve une nouvelle idée de jeu.', xp: 40 }
    ],
    [
      { id: 'filtre', category: 'EXPLORATION', title: 'Trouve un jeu à ton style', description: 'Utilise la recherche pour repérer un jeu.', xp: 30 },
      { id: 'securite', category: 'BONNES HABITUDES', title: 'Lis le guide de sécurité', description: 'Découvre des conseils pour jouer sereinement.', xp: 25 },
      { id: 'creativite', category: 'CRÉATIVITÉ', title: 'Découvre un jeu créatif', description: 'Explore un jeu où tu peux construire ou inventer.', xp: 45 }
    ]
  ];
  const ranks = [
    { name: 'Rookie', className: 'rookie', emblem: '✦' },
    { name: 'Explorateur', className: 'explorateur', emblem: '⟁' },
    { name: 'Stratège', className: 'stratege', emblem: '◎' },
    { name: 'As du gamepad', className: 'as-du-gamepad', emblem: '✧' },
    { name: 'Légende', className: 'legende', emblem: '♛' }
  ];
  let progress = { xp: 0, round: 0, completed: [] };
  let toastTimer;
  function currentQuests() { return questRounds[progress.round % questRounds.length]; }
  function saveProgress() {
    try { localStorage.setItem(questStorageKey, JSON.stringify(progress)); } catch { /* La progression reste en mémoire pendant cette visite. */ }
  }
  function notify(message) {
    const toast = document.querySelector('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2400);
  }
  try {
    const saved = JSON.parse(localStorage.getItem(questStorageKey) || '{}');
    progress.xp = Number.isFinite(Number(saved.xp)) ? Math.max(0, Number(saved.xp)) : 0;
    progress.round = Number.isInteger(saved.round) && saved.round >= 0 ? saved.round : 0;
    const validIds = new Set(currentQuests().map(quest => quest.id));
    progress.completed = Array.isArray(saved.completed) ? [...new Set(saved.completed.filter(id => validIds.has(id)))] : [];
    if (progress.completed.length === currentQuests().length) {
      progress.round += 1;
      progress.completed = [];
      saveProgress();
    }
  } catch { /* Un stockage vide suffit si le navigateur bloque les données locales. */ }

  let previousLevel = Math.floor(progress.xp / 100) + 1;
  function renderProgress() {
    const level = Math.floor(progress.xp / 100) + 1;
    const levelXp = progress.xp % 100;
    const rank = ranks[Math.min(level - 1, ranks.length - 1)];
    const profile = document.querySelector('.quest-level-card');
    if (profile) profile.className = 'quest-level-card rank-' + rank.className;
    document.querySelector('.quest-emblem').textContent = rank.emblem;
    document.querySelector('#quest-level').textContent = String(level).padStart(2, '0');
    document.querySelector('#quest-rank-name').textContent = rank.name;
    document.querySelector('#quest-series').textContent = String(progress.round + 1).padStart(2, '0');
    document.querySelector('#quest-current-xp').textContent = levelXp + ' XP';
    document.querySelector('#quest-next-xp').textContent = '100 XP';
    document.querySelector('#quest-total-xp').textContent = progress.xp + ' XP au total';
    document.querySelector('#quest-completed-count').textContent = progress.completed.length + ' / ' + questButtons.length + ' missions';
    const progressBar = document.querySelector('.quest-progress');
    progressBar.setAttribute('aria-valuenow', String(levelXp));
    document.querySelector('#quest-progress-fill').style.width = levelXp + '%';
    currentQuests().forEach((quest, index) => {
      const button = questButtons[index];
      const card = button.closest('[data-quest-card]');
      const complete = progress.completed.includes(quest.id);
      card.dataset.questCard = quest.id;
      card.querySelector('.quest-index').textContent = String(index + 1).padStart(2, '0');
      card.querySelector('.quest-description small').textContent = quest.category;
      card.querySelector('.quest-description b').textContent = quest.title;
      card.querySelector('.quest-description p').textContent = quest.description;
      button.dataset.quest = quest.id;
      button.dataset.xp = String(quest.xp);
      card.classList.toggle('is-complete', complete);
      button.disabled = complete;
      button.innerHTML = complete ? 'Mission validée <span>✓</span>' : 'Valider <span>+' + quest.xp + ' XP</span>';
      button.setAttribute('aria-label', complete ? 'Mission validée' : 'Valider cette mission pour ' + quest.xp + ' points XP');
    });
    if (level > previousLevel && profile) {
      profile.classList.add('is-leveling');
      window.setTimeout(() => profile.classList.remove('is-leveling'), 850);
    }
    previousLevel = level;
  }

  questButtons.forEach(button => button.addEventListener('click', () => {
    const quest = currentQuests().find(item => item.id === button.dataset.quest);
    if (!quest || progress.completed.includes(quest.id)) return;
    const oldLevel = previousLevel;
    progress.completed.push(quest.id);
    progress.xp += quest.xp;
    const seriesComplete = progress.completed.length === questButtons.length;
    if (seriesComplete) {
      progress.round += 1;
      progress.completed = [];
    }
    saveProgress();
    const level = Math.floor(progress.xp / 100) + 1;
    renderProgress();
    if (seriesComplete && level > oldLevel) notify('Nouvelle série ! Tu passes niveau ' + level + ' : ' + ranks[Math.min(level - 1, ranks.length - 1)].name + ' !');
    else if (seriesComplete) notify('Série terminée ! De nouvelles quêtes sont disponibles.');
    else notify('Mission réussie : +' + quest.xp + ' XP !');
  }));
  renderProgress();
})();
