const mainContainerEl = document.querySelector('#mainContainer')

for (let i = 0; i < 16; i++) {
  const containerEl = document.createElement('div')
  containerEl.classList.add('container')
  for (let j = 0; j < 16; j++) {
    const squareEl = document.createElement('div')
    squareEl.classList.add('square')

    containerEl.appendChild(squareEl)
  }
  mainContainerEl.appendChild(containerEl)
}