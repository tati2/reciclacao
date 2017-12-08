<template>
	<section>
		<div>
			<h1>Encontros com Escolas</h1>
			<p>Para o sucesso da ação no território, conectar os espaços de educação é para nós a garantia do sucesso. Dialogando com coordenação, direção, professores e alunos (muitos destes moradores do Morro dos Prazeres). 
			Tais espaços são a Creche Municipal José Marinho de Oliveira, Centro de Desenvolvimento e Educação Integrada Amália Fernandes Conde (Casarão dos Prazeres), Creche Cantinho Feliz, E.M. Julia Lopes de Almeida, E.M. Machado de Assis e C.E. Monteiro de Carvalho</p>
		</div>
		<rd-swipe :swipe="swipe">
         <div 
          class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
         </div>
      </rd-swipe>
	</section>
</template>

<script>
import rdSwipe from 'vue-slide'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0
      },
      imgs: [
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>