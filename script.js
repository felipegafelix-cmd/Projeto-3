const inputUsuario = document.getElementById('username');

inputUsuario.addEventListener('input', function(e) {
    let valorAtual = e.target.value;
    const regexApenasLetras = /[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g;
    let novoValor = valorAtual.replace(regexApenasLetras, '');
    
    e.target.value = novoValor;
});