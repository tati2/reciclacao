<template>
  <footer>
    <div class="contato">
      <p class="contato-endereco">Contato</p>
      <ul class="endereco">
        <li class="endereco-item">Rua Gomes Lopes, 12 fundos</li>
        <li class="endereco-item">Morro dos Prazeres - Santa Teresa, RJ</li>
      </ul>
      <ul class="contato-info">
        <li class="contato-tel"><img class="img-contato" src="../assets/telefone.svg">+55 21 99227-6574</li>
        <li class="contato-social"><img class="img-contato" src= "../assets/facebook.svg"> facebook.com/Reciclacao</li>        
      </ul>      
    </div>
    <div class="projeto">
      <p class="projetos-desen">Projetos Relacionados</p>
      <ul class="projetos-topicos">
        <li class="projetos-item">Jovens Construtores - Morro do Prazeres</li>
        <li class="projetos-item">Núcleo de Desenvolvimento Econômico Sustentável</li>
        <li class="projetos-item">Rede Potencializa Lucas do Rio Verde</li>
        <li class="projetos-item">Centrais de Triagem de Material Reciclável</li>
        <li class="projetos-item">Rede Potencializa Querência</li>
      </ul>
    </div>
    <div class="footer">      
      <div class="parceiro">
        <p class="parceiro-info">Parceiros</p>
      </div>
      <section>
        <div class="footer-parceiro">
          <ul>
            <li class="parceirolinha"<a href="">BrasilPet</a></li>
            <li class="parceirolinha"><a href="http://www.rio.rj.gov.br/web/comlurb">COMLURB</a></li>
            <li class="parceirolinha"><a href="https://www.institutobrf.com/">Instituto BRF</a></li>  
            <li class="parceirolinha"><a href="http://enactuscefetrj.com/">ENACTUS/CEFET-RJ</a></li>
            <li class="parceirolinha"><a href="https://www.britannica.com/topic/Environmental-Protection-Agency">US Environmental Protection Agency - EPa</a></li>
          </ul>
        </div>
        <div class="footer-parceiro2">
          <ul>
            <li class="parceirolinha"><a href="http://cedaps.org.br/">CEDAPS</a></li>
            <li class="parceirolinha"><a href="http://www.rio.rj.gov.br/web/smac">SMAC</a></li>
            <li class="parceirolinha"><a href="http://www.recicoleta.com.br/">Recicoleta</a></li>  
            <li class="parceirolinha"><a href="https://proario.wordpress.com/">Grupo PROA</a></li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'hello',
  data () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  
}

footer{
  background: #303030;
  text-align: left;
  min-height: 100vh;
}
  @media (min-width: 1024px){
footer{
    width: 100%;
    display: flex; 
    justify-content: space-around;
    align-items: center;
  }
}
 @media (min-width: 1024px){
.contato{
  width: 25%;
  }
}

.contato-endereco{
  color: #85C226;
  font-size: 2em;
  margin-left: 15px;
  font-family: 'Roboto Slab', bold;;
}

.endereco-item{
  color: #85C226;
  font-size: 1.25em;
  margin-left: 15px;
  font-family: 'Roboto Slab';
  line-height: 1.25em;
}
.contato-tel{
  color: #85C226;
  font-size: 1.45em;
  font-family: 'Roboto Slab', lighter;
  line-height: 4em;
}
.img-contato{
  width: 4%;
  margin-left: 10px;
  margin-right: 15px;
}

.contato-social{
  color:#E67816;
  font-size: 1.45em;
  font-family: 'Roboto Slab', lighter;
}
  @media (min-width: 1024px){
  .projeto{
    margin:20px;
  }
}

.projetos-desen{
  color: #85C226;
  font-size: 2em;
  margin-left: 15px;
  font-family: 'Roboto Slab',bold;
}
  @media (min-width: 1024px){
    .projetos-desen{
      font-size: 2.37em;
  }
}

.projetos-item{
  color: #85C226;
  font-size: 1.05em;
  margin-left: 15px;
  font-family: 'Roboto', thin;
}

.parceiro{
  display: flex;
  width: 80%;
  font-size:11px;
  line-height: 1,5em;
  margin-left: 20px; 
}
ul{
  margin-left: 0;
  list-style: none;
  color: #85C226;
  font-size: 11px; 
  line-height: 18px;
}


.parceiro-info{
  width: 100%;
  color: #85C226;
  font-size: 3em;
  margin-left: 15px;
  font-family: 'Roboto Slab', bold;;
}

    @media (min-width: 1024px){
      .parceiro-info{
        margin: 0;
      }
    }

.projetos-topicos{
  color:#85C226;
  line-height: 2em; 
}

.footer{
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  padding: 0 0 0 15px;
}

.footer-parceiro{
  width: 55%;
  color: #E67816;
  font-size: 11px;
  line-height: 1,5em;
  display: flex;
  left: 10px;
  bottom: 79px;
  flex-direction: column;
  align-self: auto stretch;
}

.footer-parceiro ul {
  width: 100%
}

.footer-parceiro2{
  color: #E67816;
  font-size: 11px;
  display: flex;
  margin-left: 15px;
}

a:link, a:visited{
  text-decoration: none;
  color: #E67816;
}
</style>