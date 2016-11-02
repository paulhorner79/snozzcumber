var snozz = new Snozzcumber();

function showOutput() {
    $('.output').addClass("loading")
    $('.output').html("");

    var val = $("input[name='paragraphs']").val();
    snozz.paragraphs(val);

    $('.output').html(snozz.toHtml())
    $('.output').removeClass("loading");
}

$("form").submit(function (e) {
    e.preventDefault();
    showOutput();
});

showOutput();
