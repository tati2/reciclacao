<template>
  <div class="hello">
    <img src="../assets/logo-reciclação.png">
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
  align-items: center;
  color: red;
  background-image: url(../assets/fundo-home.jpg) center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 320px
}
img {
  width: 30%;
  height: 20%
}

</style>
