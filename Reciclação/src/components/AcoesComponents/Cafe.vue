<template>
   <section>
    <div class="descricao">
      <h1>Café no ponto</h1>
      <p>É uma forma atraente e prazerosa de unir pessoas para falar de temas voltados ao desenvolvimento de território onde vivem, moram e trabalham. Pensando na necessidade do ser humano de se alimentar, usamos essa oportunidade para seduzir os moradores e despertar o desejo de participar da ação.</p>
    </div>
    <div class="slidecafe">
        <div class="CSSgalcafe">
          <s id="s1cafe"></s> 
          <s id="s2cafe"></s>
          <s id="s3cafe"></s>
          <s id="s4cafe"></s>

          <div class="slidercafe">
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
          
          <div class="prevNextcafe">
            <div><a href="#s4cafe"></a><a href="#s2cafe"></a></div>
            <div><a href="#s1cafe"></a><a href="#s3cafe"></a></div>
            <div><a href="#s2cafe"></a><a href="#s4cafe"></a></div>
            <div><a href="#s3cafe"></a><a href="#s1cafe"></a></div>
          </div>

          <div class="bulletscafe">
            <a href="#s1cafe"></a>
            <a href="#s2cafe"></a>
            <a href="#s3cafe"></a>
            <a href="#s4cafe"></a>
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
  background-color: rgba(51, 51, 51, 1);

}

section {
  display: flex;
  align-content: center;
  flex-direction: column;
  max-height: 85vh;
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
  color: white;
}

.slidecafe {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================
PURE RESPONSIVE CSS3cafe SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalcafe {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERcafe */

.CSSgalcafe .slidercafe {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalcafe .slidercafe > * {
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

.CSSgalcafe .prevNextcafe {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalcafe .prevNextcafe > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalcafe .prevNextcafe a {
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
.CSSgalcafe .prevNextcafe a:hover {
  opacity: 1;
}
.CSSgalcafe .prevNextcafe a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalcafe .bulletscafe {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalcafe .bulletscafe > a {
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
.CSSgalcafe .bulletscafe > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalcafe .bulletscafe > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalcafe >s:target ~ .bulletscafe >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1cafe:target ~ .bulletscafe >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2cafe:target ~ .bulletscafe >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3cafe:target ~ .bulletscafe >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4cafe:target ~ .bulletscafe >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalcafe >s:target ~ .prevNextcafe >* {      visibility: hidden;}
/* ACTIVE: */
#s1cafe:target ~ .prevNextcafe >*:nth-child(1) {visibility: visible;}
#s2cafe:target ~ .prevNextcafe >*:nth-child(2) {visibility: visible;}
#s3cafe:target ~ .prevNextcafe >*:nth-child(3) {visibility: visible;}
#s4cafe:target ~ .prevNextcafe >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERcafe ANIMATION POSITIONS */

#s1cafe:target ~ .slidercafe {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2cafe:target ~ .slidercafe {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3cafe:target ~ .slidercafe {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4cafe:target ~ .slidercafe {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalcafe CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalcafe{
  color: #fff;  
  text-align: center;
}
.CSSgalcafe .slidercafe h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalcafe a {
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
    align-items: center;
    flex-direction: column;
  }

  .slidecafe {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CSSgalcafe {
    width:90%; 
  }
}

</style>