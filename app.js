let currentLang = 'pt';
let currentCategory = 'all';

// Repositories Data

const projects = [

/*{

defines card's structure for each project(categories: ds, redes, game, software, sound-design). Tags shall be used for Stack/Tools/Skills/etc

title: '',
category: '',
desc_pt: '',
desc_en: '',
tags: ['', '', ''],
url: ''

},

*/];

function setLanguage(lang) {

    currentLang = lang;
    
    document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    //Translation EN/PT
    document.getElementById('theme-toggle').textContent = lang === 'pt' ? 'Tema Claro | Tema Escuro' : 'Light Theme | Dark Theme';
    document.getElementById('section-title').textContent = lang === 'pt' ? 'Repositórios' : 'Repositories';
    document.getElementById('subtitle').textContent = lang === 'pt' ? 'Desenvolvedor Freelancer | Sound Designer' : 'Freelance Developer | Sound Designer';
    document.getElementById('bio').textContent = lang === 'pt' ? 'Soluções em análise de dados, infraestrutura de redes, desenvolvimento de jogos e software' : 'Solutions for data analysis, network infrastructure, game development, and software.';
    document.getElementById('tab-all').textContent = lang === 'pt' ? 'Todos' : 'All';
    document.getElementById('tab-sound-design').textContent = 'Sound Design';
    document.getElementById('tab-ds').textContent = lang === 'pt' ? 'Ciência de Dados' : 'Data Science';
    document.getElementById('tab-redes').textContent = lang === 'pt' ? 'Redes' : 'Networking';
    document.getElementById('tab-game').textContent = lang === 'pt' ? 'Desenvolvimento de Jogos' : 'Game Dev';
    document.getElementById('tab-software').textContent = 'Software';

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
            <div class="tags-list">${p.tags.map(`span class="tag">{t}</span`).join('')}
            </div>
            `;
        grid.appendChild(card);
    });
}

renderProjects();
