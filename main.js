// автономные пользовательские элементы наследуем от HTMLElement
// пользовательские встроенные элементы наследуем от класса элемента, например HTMLButtonElement 

const template = document.createElement('template');
template.innerHTML = `
  <div class="card">
    <h4>Это карточка новости</h4>
  </div>
`;
class NewsCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //this.innerHTML = this.getAttribute('title');
    this.innerHTML = template;
  }
};

customElements.define('news-card', NewsCard);