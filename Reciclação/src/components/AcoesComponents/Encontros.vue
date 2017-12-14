<template>
   <section>
    <div class="descricao">
      <h1>Encontros com Escolas</h1>
      <p>Para o sucesso da ação no território, conectar os espaços de educação é para nós a garantia do sucesso. Dialogando com coordenação, direção, professores e alunos (muitos destes moradores do Morro dos Prazeres).</p>
      <p>Tais espaços são a Creche Municipal José Marinho de Oliveira, Centro de Desenvolvimento e Educação Integrada Amália Fernandes Conde (Casarão dos Prazeres), Creche Cantinho Feliz, E.M. Julia Lopes de Almeida, E.M. Machado de Assis e C.E. Monteiro de Carvalho</p>
    </div>
    <div class="slideencontro">
      <div class="CSSgalencontro">
        <s id="s1"></s> 
        <s id="s2"></s>
        <s id="s3"></s>
        <s id="s4"></s>

        <div class="sliderencontro">
          <div style="background:#5b8;">
            <img src="https://images.vexels.com/media/users/3/131796/isolated/preview/a255fb7cf0cdf19660e0a6257121de8b--cone-do-c-rculo-de-batata-by-vexels.png">
          </div>
          <div style="background:#85b;">
            <h2>Slide 2</h2>
          </div>
          <div style="background:#e95;">
            <h2>Slide 3</h2>
          </div>
          <div style="background:#e59;">
            <h2>Slide 4</h2>
          </div>
        </div>
          
          <div class="prevNext">
            <div><a href="#s4"></a><a href="#s2"></a></div>
            <div><a href="#s1"></a><a href="#s3"></a></div>
            <div><a href="#s2"></a><a href="#s4"></a></div>
            <div><a href="#s3"></a><a href="#s1"></a></div>
          </div>

          <div class="bullets">
            <a href="#s1"></a>
            <a href="#s2"></a>
            <a href="#s3"></a>
            <a href="#s4"></a>
          </div>
        </div>
      </div>

    </section>
</template>

<script>

</script>

<style scoped>
* {
  box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  margin: 0;
}

section {
  display: flex;
  align-content: center;
  flex-direction: column;
  max-height: 120vh;
  padding: 10% 0px 0px 0px;
}

.descricao {
  padding: 5%;
}

h1 {
  font-size: 2.5em;
  color: rgb(0, 146, 63);
}

p {
  font-size: 0.85em;
  margin:5% 0px;
}

.slideencontro {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================
PURE RESPONSIVE CSS3 SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalencontro {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERencontro */

.CSSgalencontro .sliderencontro {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalencontro .sliderencontro > * {
  font-size: 1rem;
  display: inline-block;
  white-space: normal;
  vertical-align: top;
  height: 100%;
  width: 100%;
  background: none 50% no-repeat;
  background-size: cover;
}

/* PREV/NEXT, CONTAINERS & ANCHORS */

.CSSgalencontro .prevNext {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalencontro .prevNext > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalencontro .prevNext a {
  background: #fff;
  position: absolute;
  width:       60px;
  height:      60px;
  line-height: 60px; /* If you want to place numbers */
  text-align: center;
  opacity: 0.7;
  -webkit-transition: 0.3s;
          transition: 0.3s;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 0;
}
.CSSgalencontro .prevNext a:hover {
  opacity: 1;
}
.CSSgalencontro .prevNext a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalencontro .bullets {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalencontro .bullets > a {
  display: inline-block;
  width:       30px;
  height:      30px;
  line-height: 30px;
  text-decoration: none;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  -webkit-transition: 0.3s;
          transition: 0.3s;
}
.CSSgalencontro .bullets > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalencontro .bullets > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalencontro >s:target ~ .bullets >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1:target ~ .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2:target ~ .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3:target ~ .bullets >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4:target ~ .bullets >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalencontro >s:target ~ .prevNext >* {      visibility: hidden;}
/* ACTIVE: */
#s1:target ~ .prevNext >*:nth-child(1) {visibility: visible;}
#s2:target ~ .prevNext >*:nth-child(2) {visibility: visible;}
#s3:target ~ .prevNext >*:nth-child(3) {visibility: visible;}
#s4:target ~ .prevNext >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERencontro ANIMATION POSITIONS */

#s1:target ~ .sliderencontro {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2:target ~ .sliderencontro {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3:target ~ .sliderencontro {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4:target ~ .sliderencontro {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalencontro CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalencontro{
  color: #fff;  
  text-align: center;
}
.CSSgalencontro .sliderencontro h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalencontro a {
  border-radius: 50%;
  margin: 0 3px;
  color: rgba(0,0,0,0.8);
  text-decoration: none;
}

@media screen and (min-width: 720px){
  section {
    flex-direction: row;
    height: 70vh;
    padding: 0px;
  }

  .descricao {
    width: 40%;
    padding: 0px 0px 0px 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .slideencontro {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CSSgalencontro {
    width:90%; 
  
  }

}
</style>