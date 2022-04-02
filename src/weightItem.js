import { setStorageData, getOneReactionWeightFromStorage, createElement } from './utils.js';

class WeightItem extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute('name');

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = createElement('span', shadow, {
      properties: { id: 'wrapper' },
    });

    // Emoji
    // eslint-disable-next-line no-unused-vars
    const img = createElement('img', wrapper, {
      properties: {
        src: this.getAttribute('img') ?? 'images/default.png',
        alt: name,
      },
    });

    // Weight Value:
    const weightValue = createElement('span', wrapper, {
      properties: {
        id: 'weightValue',
      },
    });

    // Slider
    const slider = createElement('input', wrapper, {
      properties: {
        type: 'range',
        id: 'slider',
        min: this.getAttribute('min') ?? -1.0,
        max: this.getAttribute('max') ?? 1.0,
        step: this.getAttribute('step') ?? 0.1,
      },
      eventListeners: {
        input: (val) => {
          weightValue.innerHTML = parseFloat(val.target.value).toFixed(1);
        },
        change: (val) => {
          weightValue.innerHTML = parseFloat(val.target.value).toFixed(1);
          setStorageData(name, parseFloat(val.target.value));
        },
      },
    });

    getOneReactionWeightFromStorage(name)
      .then((weight) => {
        slider.setAttribute('value', weight);
        weightValue.innerHTML = parseFloat(weight).toFixed(1);
      })
      .catch((error) => {
        console.log('getReactionWeights error', error);
      });

    // Create some CSS to apply to the shadow dom
    const style = createElement('style', shadow);
    style.textContent = `
  img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
  }
  #wrapper {
    display: flex;
    flex-direction: row;
  }
  #icon {
    margin-right: 55px;
  }
  #slider {
  margin-left: 10px;
  }
  #weightValue {
    min-width: 25px;
  }
`;
  }
}

// Define the new element
customElements.define('weight-item', WeightItem);
