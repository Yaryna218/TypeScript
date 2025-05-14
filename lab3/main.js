"use strict";
document.getElementById('homeBtn').onclick = () => location.reload();
document.getElementById('catalogBtn').onclick = () => fetchCategories();
function fetchCategories() {
    fetch('assets/categories.json')
        .then(res => res.json())
        .then((data) => {
        const catalog = document.getElementById('catalog');
        catalog.innerHTML = '<h2>Категорії</h2>';
        data.forEach(cat => {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = cat.name;
            a.onclick = () => loadCategory(cat.shortname);
            catalog.appendChild(a);
            catalog.appendChild(document.createElement('br'));
        });
        const specials = document.createElement('a');
        specials.href = '#';
        specials.textContent = 'Specials';
        specials.onclick = () => {
            const rand = data[Math.floor(Math.random() * data.length)];
            loadCategory(rand.shortname);
        };
        catalog.appendChild(document.createElement('br'));
        catalog.appendChild(specials);
    });
}
function loadCategory(shortname) {
    fetch(`assets/${shortname}.json`)
        .then(res => res.json())
        .then((data) => {
        const catalog = document.getElementById('catalog');
        catalog.innerHTML = `<h2>${data.category}</h2>`;
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>${item.price}</p>
        `;
            catalog.appendChild(div);
        });
    });
}
