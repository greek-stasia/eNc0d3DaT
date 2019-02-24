
function glyphEnter() {
  var glyph = document.getElementById("glyph").value;
  document.getElementById("cp").value= glyph.codePointAt(0);
  document.getElementById("be").value = parseInt(glyph.codePointAt(0),10).toString(2);;
}
function cpEnter() {
  var codepoint = document.getElementById("cp").value;
  document.getElementById("glyph").value=String.fromCodePoint(codepoint);
  document.getElementById("be").value=parseInt(codepoint,10).toString(2);
}

function beEnter() {
  var binary = document.getElementById("be").value;
  document.getElementById("cp").value=binary.toString(10);
  document.getElementById("glyph").value=String.fromCodePoint(binary.toString(10));
}
