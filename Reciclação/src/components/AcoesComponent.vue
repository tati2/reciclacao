<template>
	<section>
		<div>
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
import encontros from "./AcoesComponents/Encontros"
import cafe from "./AcoesComponents/Cafe"
import palestra from "./AcoesComponents/Palestra"
import multirao from "./AcoesComponents/Multirao"
import aedes from "./AcoesComponents/Aedes"
import coleta from "./AcoesComponents/Coleta"

export default {
	name: 'AcoesComponent',
	components: { encontros , cafe , palestra , multirao , aedes , coleta },
	data() {
	}
}
	
</script>
<style scoped>	
	
</style>