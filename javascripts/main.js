var uicolorComponentToHex = function (component) {
    return (component * 255).toString(16);
};

var uicolorToHex = function (red, green, blue, alpha) {
    return '#' + [red, green, blue].map(uicolorComponentToHex).join('');
};

var isValidFloat = function(float) {
    return float === float;
};

$(function () {
    var $rgbaInputs = $('#red, #green, #blue, #alpha');

    $rgbaInputs.change(function () {
        var strings = $rgbaInputs.map(function () {return $(this).val();});
        var floats = strings.map(parseFloat);
        if (floats.filter(isValidFloat).length === 4) {
            $('#hex').val(uicolorToHex.apply(this, floats));
        }
    });
});
