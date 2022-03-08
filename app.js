const globeLabel = document.querySelector('#globeLabel');
const globeOutlineLabel = document.querySelector('#globeOutlineLabel');
const starLabel = document.querySelector('#starLabel');
const constellationLabel = document.querySelector('#constellationLabel');
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
    var r = document.createRange();
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