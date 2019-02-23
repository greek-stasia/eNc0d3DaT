
function glyphEnter() {
  var glyph = document.getElementById("glyph").value;
  var binary = document.getElementById("be").value;
  var codepoint = document.getElementById("cp").value;
  var char = document.getElementById("char").value;
}
function cpEnter() {
  var codepoint = document.getElementById("cp").value;
  document.getElementById("glyph").value=String.fromCodePoint(codepoint);
  document.getElementById("be").value=parseInt(codepoint,2);
}

function beEnter() {
  var binary = document.getElementById("be").value;
}
