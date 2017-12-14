<template>
   <section>
    <div class="descricao">
      <h1>Coleta seletiva</h1>
      <p>Hoje temos cerca de 40 pontos com ecobags espalhados pela comunidade. Neles os moradores depositam resíduos como pet, tetra pak, alumínio, papelão, papel e qualquer plástico duro. Além disso, ainda há moradores que juntam óleo vegetal usado para nos doar.</p>
    </div>
      <div class="slidecoleta">
        <div class="CSSgalcoleta">
          <s id="s1coleta"></s> 
          <s id="s2coleta"></s>
          <s id="s3coleta"></s>
          <s id="s4coleta"></s>

          <div class="slidercoleta">
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
          
          <div class="prevNextcoleta">
            <div><a href="#s4coleta"></a><a href="#s2coleta"></a></div>
            <div><a href="#s1coleta"></a><a href="#s3coleta"></a></div>
            <div><a href="#s2coleta"></a><a href="#s4coleta"></a></div>
            <div><a href="#s3coleta"></a><a href="#s1coleta"></a></div>
          </div>

          <div class="bulletscoleta">
            <a href="#s1coleta"></a>
            <a href="#s2coleta"></a>
            <a href="#s3coleta"></a>
            <a href="#s4coleta"></a>
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
  background-color: rgba(133, 194, 38, 1);
}

section {
  display: flex;
  align-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 10% 0px 0px 0px;
}

.descricao {
  padding: 5%;
}

h1 {
  font-size: 2.5em;
  color: rgb(0, 146, 63);
  color: white;
}

p {
  font-size: 0.85em;
  margin:5% 0px;
  color: white;
}

.slide {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================
PURE RESPONSIVE CSS3coleta SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalcoleta {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERcoleta */

.CSSgalcoleta .slidercoleta {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalcoleta .slidercoleta > * {
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

.CSSgalcoleta .prevNextcoleta {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalcoleta .prevNextcoleta > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalcoleta .prevNextcoleta a {
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
.CSSgalcoleta .prevNextcoleta a:hover {
  opacity: 1;
}
.CSSgalcoleta .prevNextcoleta a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalcoleta .bulletscoleta {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalcoleta .bulletscoleta > a {
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
.CSSgalcoleta .bulletscoleta > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalcoleta .bulletscoleta > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalcoleta >s:target ~ .bulletscoleta >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1coleta:target ~ .bulletscoleta >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2coleta:target ~ .bulletscoleta >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3coleta:target ~ .bulletscoleta >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4coleta:target ~ .bulletscoleta >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalcoleta >s:target ~ .prevNextcoleta >* {      visibility: hidden;}
/* ACTIVE: */
#s1coleta:target ~ .prevNextcoleta >*:nth-child(1) {visibility: visible;}
#s2coleta:target ~ .prevNextcoleta >*:nth-child(2) {visibility: visible;}
#s3coleta:target ~ .prevNextcoleta >*:nth-child(3) {visibility: visible;}
#s4coleta:target ~ .prevNextcoleta >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERcoleta ANIMATION POSITIONS */

#s1coleta:target ~ .slidercoleta {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2coleta:target ~ .slidercoleta {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3coleta:target ~ .slidercoleta {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4coleta:target ~ .slidercoleta {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalcoleta CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalcoleta{
  color: #fff;  
  text-align: center;
}
.CSSgalcoleta .slidercoleta h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalcoleta a {
  border-radius: 50%;
  margin: 0 3px;
  color: rgba(0,0,0,0.8);
  text-decoration: none;
}

@media screen and (min-width: 720px){
  section {
    flex-direction: row-reverse;
    height: 70vh;
    padding: 0px;      
  }

  .descricao {
    width: 40%;
    padding: 0px 0px 0px 4%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .slidecoleta {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CSSgalcoleta {
    width:90%; 
  
  }
}
</style>