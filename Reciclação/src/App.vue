<template>
  <div class="menu">
    <nav>
      <ul>
        <li>Sobre</li>
        <li>Ações</li>
        <li>Impacto</li>
        <li>Pontos de Coleta</li>
        <li>Você Sabia?</li>
        <li>Contato</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
. {
  margin: 0
}
.menu {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  background-color: blue;
  height: 5%;
}

ul {
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
}

li {
  display: flex;
  list-style: none;
  margin: 0 15px;
}
</style>
