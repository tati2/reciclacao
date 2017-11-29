<template>
  <div class="acoes">
    <section>
      <div class="menu">  
        <h1>Ações</h1>
          <ul>
            <li>Encontros com Escolas >></li>
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

section {
  background-image: url(../assets/fundo-acoes.jpg);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.menu{
  display: flex;
  flex-direction: column;
  color: white;
  background: rgba(122, 180, 32, 0.6);
  min-height: 100vh;
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
  list-style: none;
  margin: 0;
  background-color: white;
  color: #E67816;

}
</style>