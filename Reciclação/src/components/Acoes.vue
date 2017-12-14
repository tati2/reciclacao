<template>
  <div class="acoes">
    <section>
      <div class="menu">  
        <h1>Ações</h1>
          <ul>
            <li class="menuAcoes01">Encontros com Escolas >></li>
            <li>Cefé no ponto >></li>
            <li>Palestras temáticas >></li>
            <li>Mutirão de limpeza >></li>
            <li>10 min contra o Aedes Aegypti >></li>
            <li>Coleta seletiva >></li>
          </ul>
      </div>
      <div class="">
        <p>Próximas ações</p>
        <ul v-for="evento in eventos_acoes">
          <li>
            <div>
              <div class="descricao-evento">                  
              </div>
            </div>      
          </li>       
        </ul>   
      </div>
    </section> 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      eventos_acoes: [

      ]
    }
  }
}
</script>

<style scoped>

.acoes {
  background-image: url(../assets/fundo-acoes.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

section {
  background: rgba(133, 194, 38, 0.6);
  background-size: 100%;
 
}

.menu{
  display: flex;
  flex-direction: column;
  padding: 5%
}

ul {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0;
}

li {
  display: flex;
  list-style: none;
  color: #E67816;
  margin: 0;
  padding: 1%;
}

.menuAcoes01 {
  display: flex;
  width: auto;
  background-color: white;
  background-size: 0 auto ;
}
</style>