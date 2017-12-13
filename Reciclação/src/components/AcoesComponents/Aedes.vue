<template>
   <section>
    <div class="descricao">
      <h1>10 min contra o Aedes Aegypti</h1>
      <p>Realizamos uma grande gincana reunindo as crianças e adolescentes que participam dos projetos desenvolvidos na comunidade, além dos moradores e parceiros. Os participantes são divididos em grupos e seguem para uma área especifica da favela para recolher todo e qualquer material descartado de forma irregular, além de descobrir e eliminar focos do mosquito. De forma lúdica e divertida, todos aprendem que uma comunidade saudável é dever e direito de todos.</p>
    </div>
      <div class="slideaedes">
        <div class="CSSgalaedes">
          <!-- Don't wrap targets in parent -->
          <s id="s1aedes"></s> 
          <s id="s2aedes"></s>
          <s id="s3aedes"></s>
          <s id="s4aedes"></s>

          <div class="slideraedes">
            <div style="background:#5b8;">
              <h2>PURE <b>CSS</b> SLIDESHOW</h2>
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
          
          <div class="prevNextaedes">
            <div><a href="#s4aedes"></a><a href="#s2aedes"></a></div>
            <div><a href="#s1aedes"></a><a href="#s3aedes"></a></div>
            <div><a href="#s2aedes"></a><a href="#s4aedes"></a></div>
            <div><a href="#s3aedes"></a><a href="#s1aedes"></a></div>
          </div>

          <div class="bulletsaedes">
            <a href="#s1aedes">1</a>
            <a href="#s2aedes">2</a>
            <a href="#s3aedes">3</a>
            <a href="#s4aedes">4</a>
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

.slide {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================



PURE RESPONSIVE CSS3aedes SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalaedes {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERaedes */

.CSSgalaedes .slideraedes {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalaedes .slideraedes > * {
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

.CSSgalaedes .prevNextaedes {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalaedes .prevNextaedes > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalaedes .prevNextaedes a {
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
.CSSgalaedes .prevNextaedes a:hover {
  opacity: 1;
}
.CSSgalaedes .prevNextaedes a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalaedes .bulletsaedes {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalaedes .bulletsaedes > a {
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
.CSSgalaedes .bulletsaedes > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalaedes .bulletsaedes > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalaedes >s:target ~ .bulletsaedes >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1aedes:target ~ .bulletsaedes >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2aedes:target ~ .bulletsaedes >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3aedes:target ~ .bulletsaedes >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4aedes:target ~ .bulletsaedes >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalaedes >s:target ~ .prevNextaedes >* {      visibility: hidden;}
/* ACTIVE: */
#s1aedes:target ~ .prevNextaedes >*:nth-child(1) {visibility: visible;}
#s2aedes:target ~ .prevNextaedes >*:nth-child(2) {visibility: visible;}
#s3aedes:target ~ .prevNextaedes >*:nth-child(3) {visibility: visible;}
#s4aedes:target ~ .prevNextaedes >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERaedes ANIMATION POSITIONS */

#s1aedes:target ~ .slideraedes {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2aedes:target ~ .slideraedes {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3aedes:target ~ .slideraedes {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4aedes:target ~ .slideraedes {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalaedes CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalaedes{
  color: #fff;  
  text-align: center;
}
.CSSgalaedes .slideraedes h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalaedes a {
  border-radius: 50%;
  margin: 0 3px;
  color: rgba(0,0,0,0.8);
  text-decoration: none;
}

</style>