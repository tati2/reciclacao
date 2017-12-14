<template>
	<section>
		<div>
			<menu></menu>
		</div>
		<div >
			<encontros></encontros>
		</div>

		<div>
			<cafe></cafe>
		</div>

		<div>
			<palestra></palestra>
		</div>

		<div>
			<multirao></multirao>
		</div>
		<div>
			<aedes></aedes>
		</div>

		<div>
			<coleta></coleta>
		</div>
	</section>
</template>
<script>
import menu from "./Menu"
import encontros from "./AcoesComponents/Encontros"
import cafe from "./AcoesComponents/Cafe"
import palestra from "./AcoesComponents/Palestra"
import multirao from "./AcoesComponents/Multirao"
import aedes from "./AcoesComponents/Aedes"
import coleta from "./AcoesComponents/Coleta"

export default {
	name: 'AcoesComponent',
	components: { menu, encontros , cafe , palestra , multirao , aedes , coleta },
	data() {
	}
}
	
</script>
<style scoped>	


div {
	max-height: 100vh;

}

manu {
	height: 10vh;
}	
</style>