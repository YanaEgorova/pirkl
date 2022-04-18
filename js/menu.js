'use strict';

import { refs } from './refs.js';

refs.headerBtn.addEventListener('click', openMenu);

function openMenu() {
    refs.body.classList.toggle('active');
    refs.headerNav.classList.toggle('active');
    refs.headerBtn.classList.toggle('active');
    refs.headerBtn.classList.toggle('not-active');
}

refs.projectToggleBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
    });
})