<template>  
  <section>
    <div class="sobre">
      <h1 class="sobre-title">Sobre nós</h1>
      <p class="sobre-txt">O ReciclAção propõe estimular e mobilizar a comunidade a
          descartar adequadamente seus materiais recicláveis,
          retirando-os do meio ambiente e dando origem a um ciclo fértil
          e produtivo que retorna em forma de recursos locais, com
          ênfase na educação e na cooperação</p>
      <p class="sobre-txt">O Projeto reciclação começou 3 anos após o desabamento do
          campinho, na Rua Gomes Lopes em 2010, provocado pelo
          temporal e acúmulo de lixo nas encostas.36 pessoas morreram
          e 7 mil ficaram desabrigadas. A partir disso o grupo PROA,
          junto com a Cris dos Prazeres e sua equipe de trabalho, criaram
          o projeto ReciclAção para promover ações de conservação e
          conscientização ambiental no morro dos Prazeres,
          concentradas no bem-estar das pessoas através do combate de
          doenças como dengue, zica e chikungunya e outras doenças
          causadas por acúmulo de lixo.</p>
          <h3><a href="">Saiba mais >></a></h3>
      </div>
        <div class="sobre-img">
            <img src="../assets/01.jpg">
        </div>      
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Sobre',
  data () {
    return {
      respostas: [],
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/users`)
    .then(response => {
      this.respostas = response.data
    })
  }
}
</script>

<style scoped
 >
*{
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: border-box;
} 

section{
  width: 100%;
  background-image: url("../assets/01.jpg")no-repeat center center;
}
  @media (min-width: 768px){              
      section{
        margin: 0;        
        width: 100%;
        display: flex;
    }
}
.sobre{
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
} 

@media (min-width: 1024px) {
              .sobre{
                width: 34%;
                line-height: 2em;
              }
            }

.sobre-title{          
  font-family: 'Roboto Slab, Bold';
  color: #00923F;
  margin-left:  15px;
  font-size: 2.45em;
  margin-bottom: 0;
}

.sobre-txt{
  width: 90%;
  font-family:'Roboto Slab, Regular';
  font-size: 0.75em;  
  line-height: 1.25em;
}
  @media (min-width: 1024px) {
            .sobre-txt{
                width: 93%;
                margin:15px;
                font-size: 0.75em; 
                line-height: 1.25em;
              }
            }
h3{
  width: 100%;
  margin-left: 20px;
  font-family: 'Roboto Slab, Bold';
  color: #E67816;

}

a:link, a:visited {
  text-decoration: none;
  color: #E67816;
}

img{
  width: 100%;
        }


            @media (min-width: 768px) {
              h1{
                width: 413px;
                height: 50px;
                size: 89px;
              }

              h3{ 
                  width: 282px;
                  height: 23px;
                  size:44px;
                  font-size: 20px;
                }

              .sobre-img{
                        display: flex;
                        align-items: center;
                        width: 50%;
              }

              img{
                width: 100%;
                }
              }
      
</style>
