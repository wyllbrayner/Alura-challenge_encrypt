function getSelectorFromTag(tag) {
    return (document.querySelector(tag));
}

function insertTextIntoTag(tag, text) {
    document.getElementById(tag).innerHTML = text;
}

function startFields() {
    insertTextIntoTag('none', '');
    document.querySelector("#txt-area1").value = "";
}

startFields();

function encodeText (text) {
    text = text.replace(/e/igm, "enter");
    text = text.replace(/i/igm, "imes");
    text = text.replace(/a/igm, "ai");
    text = text.replace(/o/igm, "ober");
    text = text.replace(/u/igm, "ufat");
    return (text);
}

function decodeText(text) {
    text = text.replace(/enter/igm, 'e');
    text = text.replace(/imes/igm, 'i');
    text = text.replace(/ai/igm, 'a');
    text = text.replace(/ober/igm, 'o');
    text = text.replace(/ufat/igm, 'u');
    return (text);
}

function actualizeTxtArea2 (text) {
    document.querySelector('img.icone').style.display = "none";
    insertTextIntoTag('none', "");
    insertTextIntoTag('txt-area2', text);
    insertTextIntoTag('copy', 
        '<button onclick="copy()" class="btn-3">Copiar</button>');
}

function encrypt() {
    var textValue;

    textValue = getSelectorFromTag('#txt-area1');
    if (textValue.value.length == 0) {
        insertTextIntoTag('none', 
            "<h2 id='none'>Nenhuma mensagem encontrada</h2>");
    } else {
        var textEncypted;

        textEncypted = encodeText(textValue.value);
        actualizeTxtArea2(textEncypted);
    }
}

function decrypt() {
    var textValue;

    textValue = getSelectorFromTag('#txt-area1');
    if (textValue.value.length == 0) {
        insertTextIntoTag('none', 
            "<h2 id='none'>Nenhuma mensagem encontrada</h2>");
        document.querySelector('img.icone').style.display;
    } else {
        var textDecrypted;

        textDecrypted = decodeText(textValue.value);
        actualizeTxtArea2(textDecrypted);
    }
}

function copy() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    insertTextIntoTag("msg", "Texto copiado para a área de transferência!");
    document.querySelector("#txt-area1").value = "";
}
