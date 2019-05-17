// var tem acesso global , let tem acesso local  e const nao pode ser alterado 


//var 

function iniciarTime(iniciaJogoEmUberlandia: boolean){

    const nome:string ='messi e amigos';
    let cidade:string = "em São Paulo";


    if(iniciaJogoEmUberlandia){
         cidade= 'Uberlândia;'
    }

    console.log(`${nome} vão jogar ${cidade} `);

}

iniciarTime(false);