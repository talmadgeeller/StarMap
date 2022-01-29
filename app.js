const globeLabel = document.querySelector('#globeLabel');
const globeOutlineLabel = document.querySelector('#globeOutlineLabel');
const starLabel = document.querySelector('#starLabel');
const constellationLabel = document.querySelector('#constellationLabel');
const constellationSliderLabel = document.querySelector('#constellationSliderLabel');
const constellationSlider = document.querySelector('#constellationSlider');
const graticuleLabel = document.querySelector('#graticuleLabel');
const graticuleSliderLabel = document.querySelector('#graticuleSliderLabel');
const graticuleSlider = document.querySelector('#graticuleSlider');

document.querySelector("#globe").addEventListener('change', function () {
    globeLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--globe-fill', this.value);
});

document.querySelector("#globeOutline").addEventListener('change', function () {
    globeOutlineLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--globe-outline', this.value);
});

document.querySelector("#star").addEventListener('change', function () {
    starLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--star-fill', this.value);
});

document.querySelector("#constellation").addEventListener('change', function () {
    constellationLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--constellation-fill', this.value);
});

constellationSlider.step = "0.05";

document.querySelector("#constellationSlider").addEventListener('change', function () {
    constellationSliderLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--constellation-opacity', this.value);
});

document.querySelector("#graticule").addEventListener('change', function () {
    graticuleLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--graticule-fill', this.value);
});

graticuleSlider.step = "0.05";

document.querySelector("#graticuleSlider").addEventListener('change', function () {
    graticuleSliderLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--graticule-opacity', this.value);
});