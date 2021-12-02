import {createProfileAvatarTemplate} from './view/profile-avatar-view.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createFilmListTemplate } from './view/films-list-view.js';
import { createCardTemplate } from './view/card-list-view.js';

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const films = siteMainElement.querySelector('.films');
// const siteList = films.querySelector('.films-list');
// const siteListContainer = document.querySelector('.films-list__container');

renderTemplate(siteHeaderElement,createProfileAvatarTemplate(),RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement,createSiteMenuTemplate(),RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement,createFilmListTemplate(),RenderPosition.BEFOREEND);
renderTemplate(films,createCardTemplate(),RenderPosition.AFTERBEGIN);
