const botoes = document.querySelectorAll(".botao");
const textos = documemt.querySelectorAll(".aba-conteudo");
for (let i=0; i < botoes.length; i++){


    botoes[i].onlick=function{

        for(let j=0; j< botoes.length; j++){
            botoes[j]. classList.remove("ativo")
            textos[j].classlist.remove("ativo");
        }
    }
       botoes[i]
}