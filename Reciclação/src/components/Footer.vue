<template>
  <section class="section-principal">
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
      <p class="projetos-envolvido">Projetos Relacionados</p>
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
      <div class="parceria">
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
      </div>
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
  .section-principal{
    display: flex;
    align-items:center;
    justify-content: space-around;
  /*  flex-direction: center*/;
    padding: 10px;
    background: #303030;
    height: 50vh;
    font-family: 'Roboto Slab, Bold';

  }
  .contato {
    display: flex;
    flex-direction:column;
    color: #85C226;
  }

  .contato-endereco{
    font-size: 2em;
    margin: 10px;
    padding-left: 5px;
    margin-left: 10%;
  }

  .contato-social{
    color: #E67816; 
    margin-top: 5px;
  }

  .contato-info{
    list-style: none;
    font-size: 'Roboto Slab, Light';
    justify-content: center;
    line-height: 1.7;
  }

  .endereco{
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .projeto{
    display: flex;
    flex-direction: column;
    color: #85C226;
  }

  .projetos-envolvido{
    font-size: 2em;
    margin: 10px;
    margin-left: 10%;
  }

  .projetos-topicos{
    list-style: none;
    line-height: 1.5;
    font-size: 'Roboto Slab, Thin'
  } 

  .img-contato{
    width: 15px;
    margin-right:3%;
  }

  .footer{
    display: flex;
    flex-direction: column;
    color: #85C226;
  }

  .parceirolinha{
    list-style: none;
    line-height: 1.5;
  }

  .parceiro-info{
    font-size:2em;

    margin: 10px;
    margin-left: 9%;

  }
  .parceria{
    display:flex;
    font-size: 'Roboto Slab, Thin';
  }

  a {
    text-decoration:none;
    color: #E67816; 
  }

  @media screen and (max-width: 640px) {
    .section-principal {
      display: flex;
      flex-direction: column;
      height: 100%;
      
    }
    .endereco{
      line-height: 1.5;
    }
    .contato-info{
      line-height: 1.5;
      margin: 3px;
      margin-top: 15%;
    }
    .projeto{
      align-items: center;
      margin-top: 4%;
    }
    .projetos-envolvido{
      margin-right: 9%;
    }
    .projetos-topicos{
      font-size: 1em;
    }
       
    }
  
</style>