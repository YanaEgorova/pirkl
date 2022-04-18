'use strict';

import { refs } from './refs.js';

const grid = refs.projectsGrid;

function myFunction(x) {
  if (mediaQuery.matches) { 
    if(refs.projectsGrid) {
        const iso = new Isotope( grid, {
            itemSelector: '.grid-item',
            sortBy : 'original-order',
            masonry: {
                gutter: 40,
            }
        });
    }
  }
}
function myFunction2(x) {
    if (mediaQuery2.matches) { 
      if(refs.projectsGrid) {
          const iso = new Isotope( grid, {
              itemSelector: '.grid-item',
              sortBy : 'original-order',
              masonry: {
                  gutter: 40,
                  horizontalOrder: true
              }
          });
      }
    }
}

const mediaQuery = window.matchMedia("(min-width: 768px)")
myFunction(mediaQuery);
const mediaQuery2 = window.matchMedia("(min-width: 1440px)")
myFunction2(mediaQuery2);