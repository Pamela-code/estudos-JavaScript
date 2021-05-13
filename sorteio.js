function gerarNumero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

numeroAleatorio = gerarNumero(1,5)

function sorteio (numero, parouimpar){
    
    let soma = numero + numeroAleatorio
    let zeroum = soma % 2


    if (zeroum == 0 && parouimpar == "par") {

      console.log("parabéns, " +soma+ " é par, vc ganhou")
      
    } else if (zeroum == 1 && parouimpar == "impar"){

      console.log("parabéns, " +soma+ " é impar, vc ganhou")
      
    }
    else if (zeroum == 1 && parouimpar == "par"){

      console.log("Que pena, " +soma+ " é impar, vc perdeu")
      
    }
    else if (zeroum == 0 && parouimpar == "impar"){

      console.log("Que pena, " +soma+ " é par, vc perdeu")
      
    }
    
}

sorteio(2,"impar")


