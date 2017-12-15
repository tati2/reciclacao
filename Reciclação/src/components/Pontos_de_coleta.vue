<template>
	<div class="pai">
		<div class="mae">
			<div class="PC">
				<h1 class="PC-1">Pontos de coleta</h1>
			</div>
			<div class="paragrafo">
				<h3 class="p-1">Saiba onde está o ponto mais próximo da sua casa!</h3>
			</div>
			<div class="juntos">	
				<div class="legenda">
					<h5 class="legenda-item1">Ecobags</h5>
					<h5 class="legenda-item">Caçamba da comlurb</h5>
				</div>
				<div class="bolas">		
					<div class="bola-verde"></div>
					<div class="bola-laranja"></div>
				</div>
			</div>
		</div>
		<div class="mapa">
    		<gmap-map :center="center" :zoom="16.2">
     		<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"  :clickable="true" :draggable="true" @click="center=m.position"> 
      		</gmap-marker>
    		</gmap-map>
  		</div>
	</div>									
</template>
<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuvwT5GKbjFg1YDkSe8VuCQKT9R4GuIbQ&callback=initMap">
</script> -->

-<script>
	import * as VueGoogleMaps from 'vue2-google-maps';
  	import Vue from 'vue';

  	Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDpERu3FYPh0oJetlNFawdT3b3WftK5Uec',
      
      // libraries: 'places', //// If you need to use place input
    }
  });
   
  	 export default {
    data () {
      return {
        center: {lat: -22.933482, lng: -43.203143},
        markers: [
        {
          position: {lat: -22.934383, lng: -43.202372} 
      	}, 
      	{
          position: {lat: -22.935043, lng: -43.201247}
        },
        {
        	position:{lat: -22.934836, lng: -43.202392}
        },
        {
        	position:{lat: -22.934401, lng: -43.202381}
        },
        {
        	position:{lat: -22.933334, lng: -43.202767}
        },
        {
        	position:{lat: -22.933057, lng: -43.202724}
        },
        {
        	position:{lat:-22.932419,  lng: -43.202820}
        },
        {
        	position:{lat: -22.932251, lng: -43.202799}
        },
        {
        	position:{lat: -22.932864, lng: -43.203116}
        },
        {
        	position:{lat: -22.933738, lng: -43.202901}
        },
        {
        	position:{lat: -22.933822, lng: -43.203319}
        },
        {
        	position:{lat: -22.933728, lng: -43.203416}
        },
        {
        	position:{lat: -22.933891, lng: -43.203475}
        },
        {
        	position:{lat: -22.933975, lng: -43.203083}
        },
        {
        	position:{lat: -22.934617, lng: -43.202793}
        },
       	{
       		position:{lat: -22.934973, lng: -43.202890}
       	},
       	{
       		position:{lat: -22.935511, lng: -43.202922}
       	},
       	{
       		position:{lat: -22.935364, lng: -43.203921}
       	},
       	{
       		position:{lat: -22.935374, lng: -43.203953}
       	},
       	{
       		position:{lat: -22.935409, lng: -43.203996}
       	},
       	{
       		position:{lat: -22.935246, lng: -43.203524}
       	},
       	{
       		position:{lat: -22.935127, lng: -43.204205}
       	},
       	{
       		position:{lat: -22.934682, lng: -43.204677}
       	},
       	{
       		position:{lat: -22.934657, lng: -43.204822}
       	},
       	{
       		position:{lat: -22.934558, lng: -43.204602}
       	},
       	{
       		position:{lat: -22.933964, lng: -43.204940}
       	},
       	{
       		position:{lat: -22.933776, lng: -43.205282}
       	},
       	{
       		position:{lat: -22.933771, lng: -43.205303}
       	},
       	{
       		position:{lat: -22.933504, lng: -43.204587}
       	},
       	{
       		position:{lat: -22.933410, lng: -43.204241}
       	},
       	{
       		position:{lat: -22.933776, lng: -43.204380}
       	},
       	{
       		position:{lat: -22.934024, lng: -43.204412}
       	},
       	{
       		position:{lat: -22.934183, lng: -43.204407}
       	},
       	{
       		position:{lat: -22.934269, lng: -43.204172}
       	},
       	{
       		position:{lat: -22.934269, lng: -43.204172}
       	},
       	{
       		position:{lat: -22.934723, lng: -43.203997}
       	},
       	{
       		position:{lat: -22.934323, lng: -43.203868}
       	},
       	{
       		position:{lat: -22.934343, lng: -43.203552}
       	},
       	{
       		position:{lat: -22.934373, lng: -43.202361}
       	},
       	{
       		position:{lat: -22.934675, lng: -43.203267}
       	},
       	{
       		position:{lat: -22.934813, lng: -43.203149}
       	},
       	{
       		position:{lat: -22.934531, lng: -43.203782}
       	},
       	{
       		position:{lat: -22.933407, lng: -43.203971}
       	},
       	{
       		position:{lat: -22.933745, lng: -43.203419}
       	},
       	{
       		position:{lat: -22.933434, lng: -43.203526}
       	}
        ]
      }
    }
  }
</script>
 
<style scoped>
	#pagewrap {
        width: 94%;
    }
    #content {
       	width: 65%;
    }
   	#sidebar {
       	width: 30%;
    }
	.pai{
		height: 600px;
		width: 320px;
		margin: 0;
	}
	.mae{
		margin-left: 25px;
		height: 260px;
		width: 295px;
	}
	.PC-1{
		margin: 0 auto;
	}
	.PC{
		display: flex;
		width: 70vw;
		color: green;
		text-align: left;
		height: 100px;

	}
	.paragrafo{
		width: 280px;
		color: #85C226;
		text-align: left;
	}

	.juntos {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;

	}

	.legenda{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color:#FF8C00;
		text-align: left;
		padding: 0 0 10px 0 ;
	}
	.legenda-item{
		margin: 0;
	}

	.bolas {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 9px 11px 2px 3px ;

	}
	
	.bola-verde{
		border-radius: 50%;
    	display: inline-block;
    	height: 20px;
    	width: 20px;
    	background-color: green; 
	}
	.bola-laranja{
		border-radius: 50%;
    	display: inline-block;
    	height: 20px;
    	width: 20px;
    	background-color: #FF8C00;
	}
	.mapa{
		width: 317px;
		margin: 0 auto;
	}
	.vue-map-container{
		display: flex;
		height: 50vh;
		width: 317px;
	}

@media screen and (min-width: 520px) {
	.pai{
		display: flex;
		padding-left: 30px;
		width: 100vw;
		box-sizing: border-box;
	}
}	
@media screen and (min-width: 520px) {	
	.vue-map-container{
		display: flex;
		height: 100%;
		width: 95%;
		margin: 0 0 0 30px;	}
}		 

@media screen and (min-width: 520px) {

	.PC{
	    text-align: left;
	    color: green;
	 
	    font-size: 17px;
	}

	.juntos {
		display: flex;
		justify-content: flex-end;
		align-self: flex-end;
		flex-direction: row;
		margin-top: 303px;
	}
	.bolas {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 20px 0 0 10px;
	}

	.mapa {
		width: 70%;
		height: 90%;
		padding: 0 0 0 10 ;
	} 
}

@media screen and (min-width: 1024px){
	.mapa {
		width: 67vw;
	}
	.mae{
		width: 360px
	}
	.PC{
		width: 28vw;
		height: 9vh;
		font-size: 18px;
	}
	.PC-1{
		width: 34vw;
	}
}
@media screen and (min-width: 520px) {	
	.paragrafo{
	   	text-align: left;
	   	color: #85C226;
	   	width: 290px;
	 
	   	font-size: 18px;
	}
}	
.p-1{
	margin: 0 auto;
}
@media screen and (min-width: 520px) {
	.legenda{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		text-align: center;
	}
}
@media screen and (min-width: 520px) {		
	.legenda-item1{
		display: flex;
		color: #FF8C00;
		top: 535px;
		align-self: flex-end;
	}
}
@media screen and (min-width: 520px) {
	.legenda-item{
		margin: 0;
		color: #FF8C00;
		top: 565px;
		align-self: flex-end;
	}
}	
@media screen and (min-width: 520px) {
	.bola-verde{
		border-radius: 50%;
	    display: inline-block;
	    height: 20px;
	    width: 20px;
	    background-color: green;
	    margin: 0 0 20px 0;
	}
}	
@media screen and (min-width: 520px) {	
	.bola-laranja{
		border-radius: 50%;
	    display: inline-block;
	    height: 20px;
	    width: 20px;
	    background-color: #FF8C00;
	}
}
</style>