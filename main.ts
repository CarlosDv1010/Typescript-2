import { series } from './data.js';

const table = document.querySelector('.table tbody')!;


series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${serie.numero}</th>
        <td class="show-card">${serie.nombre}</td>
        <td>${serie.distribuidora}</td>
        <td>${serie.temporadas}</td>
    `;
    table.appendChild(row);

    row.querySelector('.show-card')?.addEventListener('click', () => {
        const card = document.querySelector('#details')!;
        card.innerHTML = `
        <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${serie.imagen}" alt="${serie.nombre} picture">
        <div class="card-body">
            <h5 class="card-title">${serie.nombre}</h5>
            <p class="card-text">${serie.resumen}</p>
            <a href="${serie.link}" target="_blank">${serie.link}</a>
        </div>
        </div>`;
    });

    table.appendChild(row);
});


const summary = document.querySelector('p')!;

let avgSeasons = 0;
series.forEach((serie) => {
    avgSeasons += serie.temporadas/series.length;
});
summary.innerHTML = `Seasons average: ${avgSeasons}`;