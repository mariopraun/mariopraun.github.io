let currentLang = 'pt';
let currentCategory = 'all';

// Repositories Data

const projects = [

/*{

define card's structure for each project(categories: ds, redes, game, software, sound-design)

title: 'ds-churn-prediction',
category: 'ds',
desc_pt: 'Machine Learning Model for customer attrition prediction.',
desc_en: 'Machine Learning model predicting customer churn.',
 tags: ['Python', 'XGBoost', 'Pandas'],

url: 'https://github.com/seu-usuario/ds-churn-prediction'

},

{

title: 'net-packet-inspector',
 category: 'redes',
desc_pt: 'Analisador de pacotes de rede leve em CLI para inspeção de IP/TCP',
desc_en: 'Lightweight CLI network packet analyzer for IP/TCP inspection.',
tags: ['Python', 'Sockets', 'CLI'],

url: 'https://github.com/seu-usuario/net-packet-inspector'

},

{

title: 'game-cyberpulse-2d',
 category: 'game',
desc_pt: 'Plataforma 2D desenvolvido em Godot com design sonoro autoral.',
desc_en: '2D platformer created with Godot using unique sound design.',
tags: ['Godot', 'GDScript', 'FMOD'],

url: 'https://github.com/seu-usuario/game-cyberpulse-2d'

},

{

title: 'sw-audio-synth-engine',
category: 'software','sound-design',
desc_pt: 'Audio modular synthesizer written in C++ with VST3 support.',
title_en: 'Modular C++ audio synthesizer engine (VST3)',
tags: ['C++', 'JUCE', 'DSP'],

url: 'https://github.com/seu-usuario/sw-audio-synth-engine'

}

*/];

function setLanguage(lang) {

    currentLang = lang;

    document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    //Translation EN/PT

    GetElementById('section-title').textContent = lang === 'pt' ? 'Repositórios' : 'Repositories';

    renderProjects();

}

function filterCategory(cat) {

    currentCategory = cat;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`tab-${cat}`).classList.add('active');

    renderProjects();

}

function toggleTheme() {

    document.body.classList.toggle('light-theme');

}

function renderProjects() {

    const grid = document.getElementById('projects-grid');

    grid.innerHTML = '';

    const filtered = projects.filter(p => currentCategory === 'all' || p.category === currentCategory);

    filtered.forEach(p => {

        const card = document.createElement('div');

        card.className = 'project-card';

        card.innerHTML = `
            <h3 class = "repo-title">'${ p.title }</h3>
            <p class = "repo-desc">${currentLang === 'pt' ? p.desc_pt : p.desc_en }</p>
            <div class="tags-list">${p.tags.map(t => $, { t }).join('')}
            </div>
            `;

        grid.appendChild(card);

    });

}

renderProjects();