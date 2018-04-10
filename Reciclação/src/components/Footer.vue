<template>
  <section>
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
  </section>
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
  section{
    display: flex;
    background: #303030;
    min-height: 100vh;

  }
  .contato{
    display: flex;
    flex-direction:column;
    color: #85C226;


  }
  .contato-info{

    list-style: none;
    justify-content: center;
    line-height: 2em;
    


    
  }
  .img-contato{
    width: 20px;
    margin: 3px;

  }
</style>