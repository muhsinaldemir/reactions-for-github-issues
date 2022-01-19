import { setStorageData, getOneReactionWeightFromStorage } from './utils.js';

class WeightItem extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute('name');

    // Slider
    const slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('class', 'slider');
    slider.setAttribute('min', this.getAttribute('min') ?? -1.0);
    slider.setAttribute('max', this.getAttribute('max') ?? 1.0);
    slider.setAttribute('step', this.getAttribute('step') ?? 0.1);

    // Icon
    const imgUrl = this.getAttribute('img') ?? 'images/default.png';
    const img = document.createElement('img');
    img.src = imgUrl;
    img.width = 20;
    img.height = 20;
    img.alt = name;

    // Weight Value:
    const weightValue = document.createElement('span');
    weightValue.setAttribute('min-width', '10');

    getOneReactionWeightFromStorage(name)
      .then((weight) => {
        slider.setAttribute('value', weight);
        weightValue.innerHTML = parseFloat(weight).toFixed(1);
      })
      .catch((error) => {
        console.log('getReactionWeights error', error);
      });

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    slider.addEventListener('input', (val) => {
      weightValue.innerHTML = parseFloat(val.target.value).toFixed(1);
    });

    slider.addEventListener('change', (val) => {
      weightValue.innerHTML = parseFloat(val.target.value).toFixed(1);
      setStorageData(name, parseFloat(val.target.value));
    });

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
  img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .icon {
    margin-right: 5px;
  }
  .slider {
  margin-left: 10px;
  }
`;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(img);
    wrapper.appendChild(weightValue);
    wrapper.appendChild(slider);
  }
}

// Define the new element
customElements.define('weight-item', WeightItem);
