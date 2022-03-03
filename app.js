const globeLabel = document.querySelector('#globeLabel');
const globeOutlineLabel = document.querySelector('#globeOutlineLabel');
const outlineWidthLabel = document.querySelector('#outlineWidthLabel');
const starLabel = document.querySelector('#starLabel');
const constellationOpacityLabel = document.querySelector('#constellationOpacityLabel');
const constellationWidthLabel = document.querySelector('#constellationWidthLabel');
const graticuleLabel = document.querySelector('#graticuleLabel');
const graticuleOpacityLabel = document.querySelector('#graticuleSliderLabel');
const dashLabel = document.querySelector('#dashSliderLabel');
const exportText = document.querySelector('#exportText');

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
    exportText.value = `backgroundColor=${globeLabel.textContent}&outlineColor=${globeOutlineLabel.textContent}&starColor=${starLabel.textContent
        }&constellationColor=${constellationLabel.textContent
        }&constellationOpacity=${constellationOpacityLabel.value
        }&graticuleColor=${graticuleLabel.textContent
        }&graticuleOpacity=${graticuleOpacityLabel.value
        }&graticuleDash=${dashLabel.value
        }&constellationWidth=${constellationWidthLabel.value
        }&outlineWidth=${outlineWidthLabel.value}`.replace('#', '%23');
});

$('.btn-number').click(function (e) {
    e.preventDefault();

    const fieldName = $(this).attr('data-field');
    let type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseFloat(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 0.25).change();
            }
            if (parseFloat(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 0.25).change();
            }
            if (parseFloat(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
        }
    } else {
        input.val(0);
    }
});

$('.btn-number-sm').click(function (e) {
    e.preventDefault();

    const fieldName = $(this).attr('data-field');
    let type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseFloat(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 0.1).change();
            }
            if (parseFloat(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 0.1).change();
            }
            if (parseFloat(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
        }
    } else {
        input.val(0);
    }
});

$('.btn-number-lg').click(function (e) {
    e.preventDefault();

    const fieldName = $(this).attr('data-field');
    let type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
        }
    } else {
        input.val(0);
    }
});

$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});

function changeProp(name, value) {

    switch (name) {
        case 'constellationWidth':
            return document.documentElement.style.setProperty('--constellation-width', value);
        case 'globeOutlineWidth':
            return document.documentElement.style.setProperty('--globe-outline-width', value);
        case 'constellationOpacity':
            return document.documentElement.style.setProperty('--constellation-opacity', value);
        case 'graticuleOpacity':
            return document.documentElement.style.setProperty('--graticule-opacity', value);
        case 'dashLength':
            return document.documentElement.style.setProperty('--graticule-dash', value);
    }
}

$('.input-number').change(function () {

    const minValue = parseFloat($(this).attr('min'));
    const maxValue = parseFloat($(this).attr('max'));
    const valueCurrent = parseFloat($(this).val());


    const name = $(this).attr('name');

    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        $(".btn-number-sm[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        $(".btn-number-lg[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        $(".btn-number-sm[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        $(".btn-number-lg[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        $(this).val($(this).data('oldValue'));
    }

    if (valueCurrent <= maxValue && minValue <= valueCurrent)
        changeProp(name, valueCurrent);
});

$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});