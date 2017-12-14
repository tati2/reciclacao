<template>
   <section>
    <div class="descricao">
      <h1>Palestras temáticas</h1>
      <p>São encontros com temáticas específicas para sensibilizar e pensar no desenvolvimento de ações no território. Como por exemplo os mutirões de limpeza de lixo, brigada mirim contra o mosquito Aedes Aegypti e outros.</p>
    </div>
      <div class="slidepalestra">
        <div class="CSSgalpalestra">
          <s id="s1palestra"></s> 
          <s id="s2palestra"></s>
          <s id="s3palestra"></s>
          <s id="s4palestra"></s>

          <div class="sliderpalestra">
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
          
          <div class="prevNextpalestra">
            <div><a href="#s4palestra"></a><a href="#s2palestra"></a></div>
            <div><a href="#s1palestra"></a><a href="#s3palestra"></a></div>
            <div><a href="#s2palestra"></a><a href="#s4palestra"></a></div>
            <div><a href="#s3palestra"></a><a href="#s1palestra"></a></div>
          </div>

          <div class="bulletspalestra">
            <a href="#s1palestra"></a>
            <a href="#s2palestra"></a>
            <a href="#s3palestra"></a>
            <a href="#s4palestra"></a>
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
  margin: 0;
  background-color: rgba(255, 249, 116, 1);
}

.descricao {
  padding: 5%;
}

section {
  display: flex;
  align-content: center;
  flex-direction: column;
  max-height: 120vh;
  padding: auto 0px;
}

h1 {
  font-size: 2.5em;
  color: rgb(0, 146, 63);
}

p {
  font-size: 0.85em;
  margin:5% 0px;
}

.slidepalestra {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================
PURE RESPONSIVE CSS3palestra SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalpalestra {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERpalestra */

.CSSgalpalestra .sliderpalestra {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalpalestra .sliderpalestra > * {
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

.CSSgalpalestra .prevNextpalestra {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalpalestra .prevNextpalestra > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalpalestra .prevNextpalestra a {
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
.CSSgalpalestra .prevNextpalestra a:hover {
  opacity: 1;
}
.CSSgalpalestra .prevNextpalestra a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalpalestra .bulletspalestra {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalpalestra .bulletspalestra > a {
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
.CSSgalpalestra .bulletspalestra > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalpalestra .bulletspalestra > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalpalestra >s:target ~ .bulletspalestra >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1palestra:target ~ .bulletspalestra >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2palestra:target ~ .bulletspalestra >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3palestra:target ~ .bulletspalestra >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4palestra:target ~ .bulletspalestra >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalpalestra >s:target ~ .prevNextpalestra >* {      visibility: hidden;}
/* ACTIVE: */
#s1palestra:target ~ .prevNextpalestra >*:nth-child(1) {visibility: visible;}
#s2palestra:target ~ .prevNextpalestra >*:nth-child(2) {visibility: visible;}
#s3palestra:target ~ .prevNextpalestra >*:nth-child(3) {visibility: visible;}
#s4palestra:target ~ .prevNextpalestra >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERpalestra ANIMATION POSITIONS */

#s1palestra:target ~ .sliderpalestra {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2palestra:target ~ .sliderpalestra {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3palestra:target ~ .sliderpalestra {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4palestra:target ~ .sliderpalestra {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalpalestra CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalpalestra{
  color: #fff;  
  text-align: center;
}
.CSSgalpalestra .sliderpalestra h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalpalestra a {
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

  .slidepalestra {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CSSgalpalestra {
    width:90%; 
  }
}

</style>