<template>
  <div class="hello">
    <Menu></Menu>
    <section>
      <img src="../assets/logo-reciclação.png">
      <h1>Seja a mudança que<br> sua comunidade precisa</h1>
    </section>
    <div>
      <Acoes></Acoes>
    </div>
  </div>
</template>

<script>
import Acoes from "./Acoes"
import Menu from "./Menu"

export default {
  name: 'hello',
  components: { Acoes, Menu },
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
  background-image: url(../assets/fundo-home.jpg);
  background-size: cover;
  background-position: center;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(122, 180, 32, 0.6);
  min-height: 100vh;
}

img {
  width: 85%;
}

h1 {
  text-align: center;
  color: white;
  font-size: 1.34em
}

</style>
