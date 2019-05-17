// var tem acesso global , let tem acesso local  e const nao pode ser alterado 
//var 
function iniciarTime(iniciaJogoEmUberlandia) {
    var nome = 'messi e amigos';
    var cidade = "em São Paulo";
    if (iniciaJogoEmUberlandia) {
        cidade = 'Uberlândia;';
    }
    console.log(nome + " v\u00E3o jogar " + cidade + " ");
}
iniciarTime(false);
