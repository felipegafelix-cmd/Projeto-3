const inputCampo = document.getElementById(username); 

inputCampo.addEventListener('input', function() {

    const regexProibidos = /['"]/g;

    this.value = this.value.replace(regexProibidos, '');
});