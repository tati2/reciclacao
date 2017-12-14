<template>
  <div class="menu">
    <nav>
      <div class="logos">
        <img class="logoapp" src="../assets/menu-icon.png">
        <img class="logodesk" src="../assets/Logo_P.svg">
      </div>
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
  background-color: white;
}

nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 15vh;
}

.logos {
  display: flex;
  width: 10vh
}

img {
  display: flex;
  align-self: flex-start;
  width: 100%;
  height: 60%;
  align-items: center;
}

.logodesk {
  display: none;
}

ul {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-flow: row wrap ;
  padding: 0;
  margin: 0 5%;
  width: 70%;
}

li {
  display: flex;
  list-style: none;
  color: rgb(230, 120, 34);
  font-size: 1em;
  margin: 0% 0% 0% 0%;
  width: 50%;
}

@media screen and (min-width: 720px){

   .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%

  }

  .logos {
    display: flex;
    justify-content: center;
  }

  .logoapp {
    display: none;
  }

  .logodesk {
    display: block;
    width: 45%;
  } 

    img {
    width: 5%;
    height: 100%;
  }

  nav {
    height: 6vh;
    width: 100%;
    justify-content: space-around;
  }

  ul {
    width: 80%;
    align-self: center ;
    justify-content: flex-end;  
    align-content: center;
    margin: auto;
    flex-flow: row nowrap ;
    margin: 0px
  }
  
  li {
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: auto 0;
    font-size: 0.8em;
    width: 
  }
}

@media screen and (min-width: 1024px){
  li {
    font-size: 1em
  }

}
</style>

