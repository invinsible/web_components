// автономные пользовательские элементы наследуем от HTMLElement
// пользовательские встроенные элементы наследуем от класса элемента, например HTMLButtonElement 

const template = document.createElement('template');
template.innerHTML = `
  <div class="card">
    <h4>hello</h4>
  </div>
`;
class NewsCard extends HTMLElement {

  constructor() {
    super();
    this._title = null;
    this._rendered = false;
  }

  static observedAttributes = ['title'];

  render() {
    console.log('rendering');
    this._title = this.getAttribute('title') || '_заголовок_новости_';
    this.innerHTML = `<h4>${this._title}</h4>`;
  }  

  connectedCallback() {
    console.log('connectedCallback..');
    if (!this._rendered) {
      this.render();
      this._rendered = true;
    }   
  }


  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('attrChange..');
    this.render();
  }
};


customElements.define('news-card', NewsCard);