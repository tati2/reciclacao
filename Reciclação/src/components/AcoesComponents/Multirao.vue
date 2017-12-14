<template>
   <section>
    <div class="descricao">
      <h1>Mutirão de Limpeza</h1>
      <p>É uma dinâmica que agrega valores comunitários, grupais, sociais e ambientais para melhoria e cuidado do território, onde as pessoas são convidadas a praticar ações em benefício do ambiente onde residem.</p>
      <p>O mutirão agrega diferentes valores em rede, conseguimos através dessa ação conectar moradores da comunidade e diferentes parceiros como COMLURB, Agentes de Vigilância e Saúde, diferentes secretarias, comerciantes locais, grupos culturais e toda nossa rede de apoio.</p>
    </div>
      <div class="slidemultirao">
        <div class="CSSgalmultirao">
          <s id="s1multirao"></s> 
          <s id="s2multirao"></s>
          <s id="s3multirao"></s>
          <s id="s4multirao"></s>

          <div class="slidermultirao">
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
          
          <div class="prevNextmultirao">
            <div><a href="#s4multirao"></a><a href="#s2multirao"></a></div>
            <div><a href="#s1multirao"></a><a href="#s3multirao"></a></div>
            <div><a href="#s2multirao"></a><a href="#s4multirao"></a></div>
            <div><a href="#s3multirao"></a><a href="#s1multirao"></a></div>
          </div>

          <div class="bulletsmultirao">
            <a href="#s1multirao"></a>
            <a href="#s2multirao"></a>
            <a href="#s3multirao"></a>
            <a href="#s4multirao"></a>
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

.slidemultirao {
  width: 100%
}

img {
  height: 100%
}
/*=================================================================
PURE RESPONSIVE CSS3multirao SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
===================================================================*/

.CSSgalmultirao {
  position: relative;
  overflow: hidden;
  height: 40vh; /* Or set a fixed height */
}

/* SLIDERmultirao */

.CSSgalmultirao .slidermultirao {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgalmultirao .slidermultirao > * {
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

.CSSgalmultirao .prevNextmultirao {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgalmultirao .prevNextmultirao > div+div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgalmultirao .prevNextmultirao a {
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
.CSSgalmultirao .prevNextmultirao a:hover {
  opacity: 1;
}
.CSSgalmultirao .prevNextmultirao a+a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgalmultirao .bulletsmultirao {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgalmultirao .bulletsmultirao > a {
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
.CSSgalmultirao .bulletsmultirao > a+a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgalmultirao .bulletsmultirao > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgalmultirao >s:target ~ .bulletsmultirao >* {      background: rgba(255, 255, 255, 0.5);}
/* ACTIVE */
#s1multirao:target ~ .bulletsmultirao >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
#s2multirao:target ~ .bulletsmultirao >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
#s3multirao:target ~ .bulletsmultirao >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
#s4multirao:target ~ .bulletsmultirao >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgalmultirao >s:target ~ .prevNextmultirao >* {      visibility: hidden;}
/* ACTIVE: */
#s1multirao:target ~ .prevNextmultirao >*:nth-child(1) {visibility: visible;}
#s2multirao:target ~ .prevNextmultirao >*:nth-child(2) {visibility: visible;}
#s3multirao:target ~ .prevNextmultirao >*:nth-child(3) {visibility: visible;}
#s4multirao:target ~ .prevNextmultirao >*:nth-child(4) {visibility: visible;}
/* More slides? Add here more rules */

/* SLIDERmultirao ANIMATION POSITIONS */

#s1multirao:target ~ .slidermultirao {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
#s2multirao:target ~ .slidermultirao {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
#s3multirao:target ~ .slidermultirao {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
#s4multirao:target ~ .slidermultirao {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
/* More slides? Add here more rules */


/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgalmultirao CUSTOM STYLES / OVERRIDES HERE: */

.CSSgalmultirao{
  color: #fff;  
  text-align: center;
}
.CSSgalmultirao .slidermultirao h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgalmultirao a {
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

  .slidemultirao {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CSSgalmultirao {
    width:90%; 
  
  }
}

</style>