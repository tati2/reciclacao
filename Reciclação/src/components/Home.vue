<template>
  <div class="hello">
    <Menu></Menu>
    <section class="home">
      <img src="../assets/logo-reciclação.png">
      <h1>Seja a mudança que<br> sua comunidade precisa</h1>
    </section>
    <div class="csobre">
      <Sobre></Sobre>
    </div>
    <div>
      <Acoes></Acoes>
    </div>
    <div>
      <impacto></impacto>
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import Acoes from "./Acoes"
import Menu from "./Menu"
import Sobre from "./Sobre"
import impacto from "./Text"

export default {
  name: 'hello',
  components: { Acoes, Menu, Sobre, impacto },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

* {
  margin: 0px;
  padding: 0px
}

.hello {  
  display: flex;
  flex-direction: column;
  
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/fundohome.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 105vh;
}

img {
  width: 85%;
}

h1 {
  text-align: center;
  color: white;
  font-size: 1.34em
}

.csobre {
  background-color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 720px){
  img {
    width: 50%
  }

  .csobre {
    min-height: 60vh
  }
}

@media screen and (min-width: 1024px){
  img {
    width: 35%
  }


  .csobre {
    min-height: 80vh
  }
}
</style>
