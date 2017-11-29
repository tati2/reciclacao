<template>
  <div class="menu">
    <nav>
      <img src="../assets/menu-icon.png">
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
  name: 'menu'
}
</script>

<style scoped>
. {
  margin: 0
}
.menu {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 5%;
}

nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}

img {
  display: flex;
  align-self: flex-start;
  width: 13%;
  height: 60%;
}

ul {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-flow: row wrap ;
  padding: 0;
  margin: 0 5%;
}

li {
  display: flex;
  list-style: none;
  color: rgb(230, 120, 34);
  font-size: 1em;
  margin: 2%;
  width: 45%;
}
</style>
