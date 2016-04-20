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
        console.log('hmmm');
        var strings = $rgbaInputs.map(function () {return $(this).val();});
        console.log(strings);
        var floats = strings.map(function (string) {return parseFloat(string);});
        console.log(floats);
        if (floats.filter(isValidFloat).length === 4) {
            console.log('arg');
            $('#hex').val(uicolorToHex.apply(this, floats));
        }
    });
});
