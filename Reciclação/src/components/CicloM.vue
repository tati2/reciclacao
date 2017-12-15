<template>
<section id="cicloM">
	<h2 class="cicloM-title">Ciclo<br>Sustentável</h2>
	<div class="cicloM-div">
		<div class="cicloMDiv-item">
			<p class="cicloMDivItem-topico">
				Pontos de coleta seletiva espalhados pela comunidade
			</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_cima.svg">
			<p class="cicloMDivItem-topico">
				Conscientização, Educação ambiental e Mobilização comunitária
			</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_cima.svg">
			<p class="cicloMDivItem-topico">
				Realização de ações e projetos socioambientais na comunidade
			</p>
			<img class="cicloMDivItem-setaEsq"  src="../assets/seta_esquerda.svg">
		</div>
		<div class="cicloMDiv-item">
			<img class="cicloMDivItem-setaDir"  src="../assets/seta_direita.svg">
			<p class="cicloMDivItem-topico">Separação, organização e transporte dos materiais para recicladoras</p>
			<img  class="cicloMDivItem-seta" src="../assets/seta_baixo.svg">
			<p class="cicloMDivItem-topico">Venda dos materiais para	recicladoras parceiras com custo mínimo</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_baixo.svg">
			<p class="cicloMDivItem-topico">Fundo financeiro	gerado pela venda dos materiais</p>
		</div>
	</div>
 </section>
</template>

<script>
export default {
  	name: 'ciclo',
  	data() {
  		return{

  		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*body{
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #0E9347;
  width: 100%;
  height: 100%; 	
 }*/
 	
#cicloM{
	margin: 0 auto;
	padding: 0 auto;
 	width: 100%;
 	background-color: #0E9347;
}

.cicloM-title{
	width: 100%;  	
 	color: #FFFFFF;
 	font-family: 'Roboto Slab', bold;
  	font-size: 2.5em;
 	text-align: center;
 	display: flex;
 	align-items: center;
 	justify-content: center;
 	position: absolute;
    top: 125px;
    z-index: 2;
}
	@media (max-width: 1024px){
	  .cicloM-title{
	  		color: #FFF;
	  		font-size: 5em;
	  }
	}
.cicloM-div{
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	z-index: 1;	
	/*background-color: red;*/
}
.cicloMDiv-item{
	width: 40%;
	font-size: 1em;
	font-family: 'Roboto Slab', bold;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.cicloMDivItem-setaDir{
	width: 48px;
	position: absolute;
	top: 20px;
	left: 40%;	
}
		@media (max-width: 1024px){
		.cicloMDivItem-setaDir{
			left: 50%;
		}
	}

.addSetaDir::after{
	content: url(../assets/seta_direita.svg);
	position: relative;
	max-width: 10px;
}

.cicloMDivItem-setaEsq{
	width: 48px;
	position: absolute;
    left: 38%;
    bottom: 23px;
}

.cicloMDivItem-topico{
 	width: 100%;
 	margin: 13px 0;
 	font-family: 'Roboto Slab', bold;
 	font-weight: bold;
 	color:#FFF974;
 	text-align: left;
 	line-height: 1.25em;
}

	@media (min-width: 1024px){
		.cicloMDivItem-topico{
			width: 45%;
		}
	}
.cicloMDivItem-seta{
	width: 22.13px;
 	height:48.29px; 
}
</style>
