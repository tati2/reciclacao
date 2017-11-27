<template>
  <div class="hello">
    <main>
      <img src="../assets/logo-reciclação.png">
    </main>
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

.hello {  
  display: flex;
  background-image: url(../assets/fundo-home.jpg);
  background-size: cover;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(133, 194, 39, 0.5);
  min-height: 100vh;
  box-sizing: border-box;

}

img {
  width: 75%;
}

</style>
