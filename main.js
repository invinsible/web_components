const template = document.createElement('template');
template.innerHTML = `
  <style>
    h4 {
      margin: 0;
      color: blue;
    }
    p {
      margin: 0;
    }
  </style>
  <h4></h4>
  <div class="contacts">
    <p><slot name="phone"></slot></p>
    <p><slot name="email"></slot></p>    
  </div>
  <button id="hideBtn">Скрыть контакты</button>
`;

class CustomQuiz extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let shadowH4 = this.shadowRoot.querySelector('h4');
    shadowH4.innerText = `${this.getAttribute('title') || 'Опрос'}`;    
  }

  toggleShow() {
    const contacts = this.shadowRoot.querySelector('.contacts');
    const btn = this.shadowRoot.querySelector('#hideBtn');
    this.showInfo = !this.showInfo;
    
    if (this.showInfo) {
      contacts.style.display = 'block';
      btn.innerText = 'Скрыть контакты';
    } else {
      contacts.style.display = 'none';
      btn.innerText = 'Показать контакты';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#hideBtn').addEventListener('click', () => this.toggleShow());
  }
};

customElements.define('custom-quiz', CustomQuiz);