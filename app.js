const globeLabel = document.querySelector('#globeLabel');
const globeOutlineLabel = document.querySelector('#globeOutlineLabel');
const starLabel = document.querySelector('#starLabel');
const constellationLabel = document.querySelector('#constellationLabel');
const graticuleLabel = document.querySelector('#graticuleLabel');
const customizations = document.querySelector('#customizations');

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

document.querySelector("#graticule").addEventListener('change', function () {
    graticuleLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--graticule-fill', this.value);
});

document.querySelector("#exportButton").addEventListener('click', function () {
    const results = {
        backgroundColor: globeLabel.textContent,
        outlineColor: globeOutlineLabel.textContent,
        starColor: starLabel.textContent,
        constellationColor: constellationLabel.textContent,
        graticuleColor: graticuleLabel.textContent
    }
    customizations.innerText = JSON.stringify(results, null, 4);
});