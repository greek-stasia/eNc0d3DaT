---
layout: default
---
<script src="./conversion_logic.js"></script>

 <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="col s4" >
          <h1>Glyphs:</h1>
        </div>
        <div class="input-field col s6">
          <input placeholder="Glyph" id="glyph" type="text" class="validate">
        </div>
       <div class="col s2">
           <button class="indigo btn waves-effect" style="padding:10px;" type="submit" onClick="glyphEnter()">Submit
              <i class="material-icons right">send</i>
           </button>
         </div>
      </div>
  </form>
</div>

 <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="col s4" >
          <h1>Codepoints:</h1>
        </div>
         <div class="input-field col s6">
           <input placeholder="Codepoints" id="cp" type="text" class="validate" >
         </div>
         <div class="col s2">
           <button class="indigo btn waves-effect" style="padding:0 16px;border-radius:2px;" type="submit" onClick="cpEnter()">Submit
              <i class="material-icons right">send</i>
           </button>
         </div>
      </div>
  </form>
</div>
 <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="col s4" >
          <h1>Binary Encoding:</h1>
        </div>
        <div class="input-field col s6">
          <input placeholder="Binary" id="be" type="text" class="validate">
        </div>
       <div class="col s2">
           <button class="indigo btn waves-effect" style="padding:10px;" type="submit" onClick="beEnter()">Submit
              <i class="material-icons right">send</i>
           </button>
         </div>
      </div>
  </form>
</div>
