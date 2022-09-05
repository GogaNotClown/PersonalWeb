<br/>
<p align="center">
  <a href="https://github.com/GogaNotClown/PersonalWeb">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PersonalWeb</h3>

  <p align="center">
    Здесь находится самый крутой способ, чтобы рассказать о себе и о том, что вы делаете.
    <br/>
    <br/>
    <a href="https://github.com/GogaNotClown/PersonalWeb">Демо карточки</a>
    .
    <a href="https://github.com/GogaNotClown/PersonalWeb/issues">Report Bug</a>
    .
    <a href="https://github.com/GogaNotClown/PersonalWeb/pulls">Request Feature</a>
  </p>

![Downloads](https://img.shields.io/github/downloads/GogaNotClown/PersonalWeb/total) ![Contributors](https://img.shields.io/github/contributors/GogaNotClown/PersonalWeb?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/GogaNotClown/PersonalWeb?style=social) ![Issues](https://img.shields.io/github/issues/GogaNotClown/PersonalWeb) ![License](https://img.shields.io/github/license/GogaNotClown/PersonalWeb)

## О проекте

![Screen Shot](https://i.postimg.cc/jjWSVZNK/2022-09-05-214024650.png)

Имея много опыта позади в создании таких маленьких портфолио, в голову пришла гениальная идея о том, как же можно решить проблему в создании других страниц, если одной карточки не хватает.

Пришлось создать ещё такие же карточки с таким же наполнением, но дать им возможность двигаться по всему экрану

Почему же именно этот проект?

1. Красивый и приятный дизайн
2. Минимализм в котором всё понятно
3. Много возможностей для творчества

## Создавался с

Создавался данный проект не с кода, а с макета, который вы можете увидеть по ссылке ниже.

https://www.figma.com/community/file/1147183067830347304

## Стартуем

Здесь описаны некоторые подробности о том, как создавать ещё больше окон и не запутаться

### Гайд

Как же создать ещё одно окно?

Заходим в единственный js файл по пути js/script.js
Нас интересуют только последние строчки кода, где мы просто создаём до этого классы в css, копируем код других окон и просто меняем другой класс на свой, таким образом мы заставляем двигаться и ваше окно, только не забудьте прописать свой класс и в html

`
let jopa = document.querySelector('.your-class-name');
draggable(jopa);
`

## Использование

Перейдите по ссылке выше на макет в фигме и там есть страница со всеми компонентами для создания вашей собственной карточки, а также страница с примерами

## Лицензия

Находится под MIT License. Подробнее [LICENSE](https://github.com/GogaNotClown/PersonalWeb/blob/master/LICENSE) для большей информации

## Авторы

* **GogaNotClown** - *Freelance dummy* - [GogaNotClown](https://github.com/GogaNotClown/)
