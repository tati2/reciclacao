<template>

<section>
  <section class="titulo">
    <h1>Você sabia?</h1>
    <p class="sub-titulo">Responda perguntas sobre:</p>

   </section> 
  <section class="menu">
    <router-link to="meioambiente">
    <div class="contenier1">
      <div class="meio-ambiente">
        <p class="menu-item">Meio Ambiente</p>           
      </div>
    </div>
    </router-link> 
   <router-link to="saude">
      <div class="contenier2">
        <div class="saude">
          <p class="menu-item">Saúde</p>   
        </div>
      </div>
    </router-link>
  <router-link to="consumoconsciente">
      <div class="contenier3">
        <div class="consumo-consciente">
          <p class="menu-item">Consumo Consciente</p>
        </div>
      </div>
  </router-link> 
  </section>
  <div class="comp">
    <quiz :quest="quest"></quiz>
  </div>
</section>

</template>

<script>

</script>
<style scoped>


h1{
  margin: 0;
  text-align: left;
  font-weight: normal;
  color:#FFF;
  font-size: 2em;
}
p {
  color:#fff;
  top: 40%;
}

 section {
  background-color: #ADFF2F;
  margin: 0;
  position: 0;

}
.titulo {
  text-align: center;
  margin: 0 15px  20px
}
.sub-titulo{
  margin:2%;
  text-align: left;
  color: #006400;
  font-size: 1.25em;
  margin: 0;
}
.menu{ 
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column; 
  text-decoration:none; 
  font-size: 1.25em;
}
@media screen and(min-width: 728px){
  .menu{
    display: flex;
    justify-content: space-between;
  }
}

.menu-item{
height: 120px;
}

a:link, a:visited {
  text-decoration: none;
  color: #E67816;
}

.meio-ambiente{ 
background-color: rgba(230,120,88,0.5);  
height: 100%;
display: flex;
justify-content: center;
align-items: center;
  
}

.contenier1{
  background-image:url(../assets/meioambiente.jpg);
  height: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
 

}

.saude{
  background-color: rgba(230,120,88,0.5);  
  height:100%;
}

.contenier2{
  background-image: url(../assets/saude.jpg);
  height: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; 
}
.consumo-consciente{
  background-color: rgba(230,120,88,0.5); 
   height: 100%;
}
.contenier3{
   background-image: url(../assets/consumoconsciente.jpg);
    height:40%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

/*.comp{
  display: none;
}*/

/*@media screen and (max-width: 320px)*/

</style>

 

