<template>
  <div class="hello">
    <img src="../assets/logo-reciclação.jpg">
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
  justify-content: center;
  align-content: center;
  background-color: rgba( 104 176 36 50);
  background-image: url(../assets/fundo-home.jpg);
  background-size: cover;
  height: 100%;
}
img {
  width: 30%;
  height: 20%
}

</style>
