const casas = document.querySelectorAll(".casa")
const colunas = document.querySelectorAll(".coluna")
let vez = "Brancas"
let casas_ocupadas = []
let tabuleiro = [
                    ['', '', ''],
                    ['', '', ''], 
                    ['', '', ''],
                    ['', '', '', '', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ]

Push()

/*Função que Coloca as Peças*/
function Push(){
    for(const vez_jogador of casas){
        vez_jogador.addEventListener("click", () => {
            const peca = document.createElement("div");

            if (vez == "Brancas"){
                peca.classList.add("peca_branca");
                vez = "Pretas"
            }
            else{
                peca.classList.add("peca_preta");
                vez = "Brancas"
            }

            vez_jogador.appendChild(peca);
            peca.removeEventListener("click", Push);
            casas_ocupadas[peca.id] = vez ? "peca_branca" : "peca_preta"
        })
    }
}

/*Função que Remove as peças*/
function Shift(){
    
}

function Move(){
    if(peca_branca + peca_preta === 18){
        //fazer parte para mover as peças caso todas as peças ja estejam no tabuleiro os tenham sido conquistadas
    }
}