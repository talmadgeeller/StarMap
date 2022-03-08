const globeLabel = document.querySelector('#globeLabel');
const globeOutlineLabel = document.querySelector('#globeOutlineLabel');
const starLabel = document.querySelector('#starLabel');
const constellationLabel = document.querySelector('#constellationLabel');
const customizations = document.querySelector('#customizations');

document.querySelector("#globe").addEventListener('change', function () {
    globeLabel.textContent = this.value.toString();
    document.documentElement.style.setProperty('--globe-fill', this.value);
    if (hexToHSL(globeLabel.textContent).l >= 0.6)
        document.documentElement.style.setProperty('--graticule-fill', "#000000");
    else
        document.documentElement.style.setProperty('--graticule-fill', "#ffffff");
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

document.querySelector("#exportButton").addEventListener('click', function () {
    const results = {};

    if (globeLabel.textContent !== "#000000")
        results.backgroundColor = globeLabel.textContent;
    if (globeOutlineLabel.textContent !== "#ffffff")
        results.outlineColor = globeOutlineLabel.textContent;
    if (starLabel.textContent !== "#ffffff")
        results.starColor = starLabel.textContent;
    if (constellationLabel.textContent !== "#ffffff")
        results.constellationColor = constellationLabel.textContent;

    if (Object.keys(results).length === 0) {
        customizations.innerText = "No Customizations Made!";
        $("#copyTextButton").hide();
    }
    else {
        customizations.innerText = JSON.stringify(results, null, 4);
        $("#copyTextButton").show();
    }
});

function CopyToClipboard(id) {
    var r = document.createRange(0, 99999);
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    $("#copyTextButton").attr('data-bs-original-title', 'Copied to Clipboard!')
        .tooltip('update')
        .tooltip('show');
}

function outFunc() {
    $("#copyTextButton").attr('data-bs-original-title', 'Copy to Clipboard')
        .tooltip('update');
}

// Enable all tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("#copyTextButton").hide();
})

function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    var HSL = new Object();
    HSL['h'] = h;
    HSL['s'] = s;
    HSL['l'] = l;
    return HSL;
}