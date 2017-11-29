<template>
  <div class="acoes">
    <div class="munu">
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
    <div>
      <ul v-for="evento in eventos-acoes">
        <li>
          <div>
            <div class="descricao-evento">
              <span>{{}}</span>
              <p class="tag">{{}}</p>
            </div>
          </div>      
        </li>       
      </ul>   
    </div>  
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

.menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/fundo-acoes.jpg);
  padding: 5%
}

h1 {

}

ul {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

li {
  list-style: none;
  margin: 0
}
</style>