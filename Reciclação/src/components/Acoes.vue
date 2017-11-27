<template>
  <div class="acoes">
    <div class="munu-acoes">
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
      
    </div>  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

.menu-acoes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/fundo-acoes.jpg);
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