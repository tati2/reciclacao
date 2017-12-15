<template>
	<section>
	<div class="menu">
		<h1 class="menu-titulo">Você sabe?</h1>
				<p v-on:click="addmeioambiente">Meio Ambiente</p>
				<p v-on:click="addsaude">Saúde</p>
				<p v-on:click="addconsumoconsciente">Consumo consciente</p>
	</div>
	<div >
		<ul v-for="value in consumoConsciente" v-if="quest='Consumo'">
			<li>
				<div>
					<h2>{{ value.pergunta}}</h2>
				</div>
				<div  class="consumo-consciente">						
						<div class="casa-consumo">
							<div class="janela-consumo">
								<p >{{value.alternativa1.texto}}</p>
							</div>
						</div>
						
						<div class="casa-consumo2">
							<div class="janela-consumo2" >
							 	<p >{{value.alternativa2.texto}}</p>
							</div>
					 	</div>
					 	
					 	<div  class="casa-consumo3">	
							<div class="janela-consumo3">
								<p>{{value.alternativa3.texto}}</p>
							</div>
						</div>
								
				</div>
			</li>
		</ul>
		<ul v-for="value in saude" v-else-if="quest='saude'">
			<li>
				<div>
					<h2>{{ value.pergunta}}</h2>
				</div>
				<div class="saude">
					<div class="casa-saude1">
						<div class="janela-saude1">
							<p>{{value.alternativa1.texto}}</p>
						</div>
					</div>
					<div class="casa-saude2">
					 	<div class="janela-saude2" >
					 		<p>{{value.alternativa2.texto}}</p>
					 	</div>
					 </div>	
					 <div class="casa-saude3">
						<div class="janela-saude3">
							<p>{{value.alternativa3.texto}}</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<ul v-for="value in meioAmbientee" v-else>
			<li>
				<div>
					<h2>{{ value.pergunta}}</h2>
				</div>
				<div>
					<div class="casa">
						<p>{{value.alternativa1.texto}}</p>
					</div>
				 	<div class="casa" >
				 		<p>{{value.alternativa2.texto}}</p>
				 	</div>
					<div class="casa">
						<p>{{value.alternativa3.texto}}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
	
	</section>	
</template>	
<script >
	export default{
		name: 'Quiz',
		data (){
			return{
				preenchimento:'',
				quest:'',
				consumoConsciente: [
					{
						pergunta:"O que pode ser atraído pelo descarte incorreto de alimentos nas lixeiras e encosta?",
						alternativa1:{
							texto:"rato",
							fundo:"../assets/rato.jpg"
						},
						alternativa2:{
							texto:"barata",
							fundo:"../assets/barata.jpg"
						},
							
						alternativa3:{
							texto:"todas as alternativas",
							fundo:""
						}	
					},

					{
						pergunta: " Quando apaga uma lâmpada para economizar energia, você está gerando?",
						alternativa1:{
							texto:"Consumo Consciente",
							fundo:""
						},

						alternativa2:{
							texto:"Cuidado com o consumo exagerado",
							fundo:""
						},	
						alternativa3:{
							texto:"Desperdício de energia elétrica",
							fundo:""
						}
					},
					{
						pergunta: "Qual a quantidade de lixo que um habitante gera por dia no Rio de Janeiro? ",
						alternativa1:{
							texto:"3 Kg",
							fundo:"../assets/lixeira.jpg"
						},
						alternativa2:{
							texto:"2,5 Kg",	
							fundo:"../assets/lixeira.jpg"
						},
						alternativa3:{
							texto:"1,86",
							fundo:"../assets/lixeira.jpg"
						}
					}
 				],
 				saude:[
 					{
 						pergunta:"O que é preciso fazer para evitar um foco de mosquito ?",
 						alternativa1:{
 							texto:"Não deixe água parada",
 							fundo:""
 						},
 						alternativa2:{
 							texto:"Deixar que o Sol seque a água",
 							fundo:""
 						},
 						alternativa3:{
 							texto:"Todas as Alternativas",
 							fundo:""
 						}

 					},
 					{
 						pergunta:"Qual é o mosquito que transmite a Dengue, Chikungunya, Zica e Febre Amarela?",
 						alternativa1:{
 							texto:"Aedes Aegypti",
 							fundo:""
 						},
 						alternativa2:{
 							texto:"Aedes Albopictus",
 							fundo:""
 						},
 						alternativa3:{
 							texto:"Muriçoca",
 							fundo:"",
 						}
 					},
 					{
 						pergunta:"Qual é a doença transmitida pelo rato?", 						
 						alternativa1:{
 							texto:"Leptospirose",
 							fundo:""
 						},
 						alternativa2:{
 							texto:"Teníase",
 							fundo:""
 						},
 						alternativa3:{
 							texto:"Febre amarela",
 							fundo:""
 						}
 					},
 					{
 						pergunta:"O que representa o Outubro Rosa?", 						
 						alternativa1:{
 							texto:"Mês da mulher",
 							fundo:""
 						},
 						alternativa2:{
 							texto:"Mês em que as mulheres vãose examinar",
 							fundo:""
 						},
 						alternativa3:{
 							texto:"Mês da prevensão ao câncerde mama",
 							fundo:""
 					}
 						}
 				],
 				meioAmbiente:[
 				{
 					pergunta:"Quanto tempo dura uma tampa de garrafa no meio ambiente?",
 					alternativa1:{
 						texto:"2 anos",
 						fundo:"../assets/tampa-de-garrafa-pet.jpg"
 					},
 					alternativa2:{
 						texto:"2 meses",
 						fundo:"../assets/tampa-de-garrafa-pet.jpg"
 					},
 					alternativa3:{
 						texto:"15 anos",
 						fundo:"../assets/tampa-de-garrafa-pet.jpg"
 					}

 				},
 				{
 					pergunta:"Qual é o tempo de decomposição da garrafa pet?",
 					alternativa1:{
 						texto:"10 anos",
 						fundo:"../assets/garrafa.JPG"
 					},
 					alternativa2:{
 						texto:"50 meses",
 						fundo:"../assets/garrafa.JPG"
 					},
 					alternativa3:{
 						texto:"500 anos",
 						fundo:"../assets/garrafa.JPG"
 					}
 				},
 				{
 					pergunta:"O que devemos colocar no pratinho da planta?",
 					alternativa1:{
 						texto:"Água",
 						fundo:"../assets/agua.jpg"

 					},
 					alternativa2:{
 						texto:"Areia",
 						fundo:"../assets/areia-grossa.png"
 					},
 					alternativa3:{
 						texto:"Barro",
 						fundo:"../assets/barro.jpg"
 					}
 				},
 				{
 					pergunta:"Em quais produtos o plástico pode se transformar?",
 					alternativa1:{
 						texto:"Óleo de motor e tecido",
 						fundo:""
 					},
 					alternativa2:{
 						texto:"Mangueira Vassoura",
 						fundo:""

 					},
 					alternativa3:{
 						texto:"Todas as Alternativas",
 						fundo:""

 					}
 				}
 				]
			}
		},
		methods:{
			addmeioambiente(){
				return this.preenchimento = 'MeioAmbiente'
				       this.quest=''

			},
			addsaude(){
				return this.preenchimento = 'Saude'
						this.quest=''
			},
			addconsumoconsciente(){
				return this.preenchimento = 'ConsumoConsciente'
						this.quest=''
			}
			
		}
	}

</script>
<style scoped>

* {
	margin: 0px;
	padding: 0px
}

section {
	display: flex;
	flex-direction:column;
	color: #fff;
	background-color: #9ACD32;
	text-decoration:none;
}

li {
	list-style: none;
	padding: 5vh;
}

li div {
	margin: 0px 0px 2.5vh 0px
}

.consumo-consciente{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	width: 50%;
	margin: 0 auto;
}

/*.consumo2{
	background-color: #fff;
	width: 20vh;
	height: 20vh;
}*/
.casa-consumo{
	background-image: url(../assets/rato.jpg);
	height: 15vh;
    width: 15vh;
    background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover; 
}
.janela-consumo{
	background-color: rgba(230,120,88,0.5);
 	height: 15vh; 
 	width: 15vh;
}
.casa-consumo2{
	background-image: url(../assets/barata.jpg);
	height: 15vh;
    width: 15vh;
    background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover; 
}
.janela-consumo2{
	background-color: rgba(230,120,88,0.5);
 height: 15vh; 
 width: 15vh;

}
.casa-consumo3{	
	height: 15vh;
    width: 15vh;
    background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover; 
}
.janela-consumo3{
	background-color: rgb(230,120,88);
 height: 15vh; 
 width: 15vh;

}
.saude{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	width: 50%;
	margin: 0 auto;
}
.casa-saude1{
	height: 15vh;
    width: 15vh;
    /*background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover; */
}
.janela-saude1{
	background-color: rgb(230,120,88);
 	height: 15vh; 
	width: 15vh;
}
.casa-saude2{
	height: 15vh;
    width: 15vh;
    background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover; }
.janela-saude2{}
.casa-saude3{}
.janela-saude{}
</style>
