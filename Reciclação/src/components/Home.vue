<template>
  <div class="hello">
    <Menu></Menu>
    <section>
      <img src="../assets/logo-reciclação.png">
      <h1>Seja a mudança que<br> sua comunidade precisa</h1>
    </section>
    <div>
      <Acoes></Acoes>
    </div>
    <section>
    <div>
      <h1>Encontros com Escolas</h1>
      <p>Para o sucesso da ação no território, conectar os espaços de educação é para nós a garantia do sucesso. Dialogando com coordenação, direção, professores e alunos (muitos destes moradores do Morro dos Prazeres). 
      Tais espaços são a Creche Municipal José Marinho de Oliveira, Centro de Desenvolvimento e Educação Integrada Amália Fernandes Conde (Casarão dos Prazeres), Creche Cantinho Feliz, E.M. Julia Lopes de Almeida, E.M. Machado de Assis e C.E. Monteiro de Carvalho</p>
      </div>
      <div class="galeria">
           <img class="foto" src="./AcoesComponents/img01.jpg">
          <img class="foto" src="./AcoesComponents/img02.jpg">
           <img class="foto" src="./AcoesComponents/img03.jpg">
        </div>

    </section>
  </div>
</template>

<script>
import Acoes from "./Acoes"
import Menu from "./Menu"

export default {
  name: 'hello',
  components: { Acoes, Menu },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

* {
  margin: 0px;
  padding: 0px
}

.hello {  
  display: flex;
  flex-direction: column;
  background-image: url(../assets/fundo-home.jpg);
  background-size: cover;
  background-position: center;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(122, 180, 32, 0.6);
  min-height: 100vh;
}

img {
  width: 85%;
}

h1 {
  text-align: center;
  color: white;
  font-size: 1.34em
}

.galeria {
  margin: 200px auto;
  width: 480px;
  height: 270px;
  position: relative;
  overflow: hidden;
}

.fotos {
  position: absolute;
  opacity: 0;
  animation-name: animacao;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}

@keyframes animacao {

  25% {
    opacity: 1;
    transform: scale(1.1, 1.1.);
  }

  50% {
    opacity: 0;
  }
}

</style>
