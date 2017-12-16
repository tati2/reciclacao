<template>
  <div class="cabecario">
    <div class="header">
      <h1 class="headerTitle">Impacto gerado</h1>
      <p  class="headerParagraph">O ReciclAção propõe estimular e mobilizar a comunidade a descartar adequadamente seus materiais recicláveis, retirando-os do meio ambiente e dando origem a um ciclo fértil e produtivo que retorna em forma de recursos locais, com ênfase na educação e na cooperação
      <p  class="headerParagraph">O Projeto reciclação começou 3 anos após o desabamento do campinho,
      na Rua Gomes Lopes em 2010, provocado pelo temporal e acúmulo de lixo nas encostas. 36 pessoas
      morreram e 7 mil ficaram desabrigadas. A partir disso o grupo PROA, junto com a Cris dos razeres e sua equipe de trabalho, criaram o projeto ReciclAção para promover ações de conservação e conscientização ambiental no morro dos Prazeres, concentradas no bem-estar das pessoas através do combate de doenças como dengue, zica e chikungunya e outras doenças causadas por acúmulo de lixo.</p>
    </div>
    <div class="container">
      <div class="Chart">
          <h2>2017</h2>
          <line-example style="position: relative; height:40vh; width:80vw"></line-example>
        </div>
    </div>
  </div>
</template>

<script>
import lineExample from './components/Line.js'

export default {
  components: {
    LineExample
  }
}
</script>

<style>
.cabecario{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #333333;
}
.header
 {
  text-align: left;
  width: 80vw;
}

.headerTitle {
  color: #85c226;
  font-size: 3.25em;
}

.headerParagraph{
  color: #fff;
  font-size: 1.50em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  color: #85c226;
  font-size: 2.25em;
}
</style>