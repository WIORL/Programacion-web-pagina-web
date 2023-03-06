let reaccionado = false;
let contador = 0;
// like
$(".like").click(function () {
  if (!reaccionado) {
    contador++;
    $(this).css("background-color", "var(--like-color)");
    $(this).siblings(".contador").text(contador);
    reaccionado = true;
  }
});
// dislike
$(".dislike").click(function () {
  if (!reaccionado) {
    contador--;
    $(this).css("background-color", "var(--dislike-color)");
    $(this).siblings(".contador").text(contador);
    reaccionado = true;
  }
});
// comentar
let comentando = false;
$(".comentar").click(function () {
  if (!comentando) {
    comentando = true;
    $(this).parent().parent().closest("div").append(`
      <form id="comentar-div">
        <input type="text" class="comentario">
        <input type="submit" class="publicar btn btn-success" value="Publicar">
        <input type="submit" class="cancelar btn btn-outline-light" value="Cancelar">
      </form>
    `);
    // publicar comentario
    $(".publicar").click(function (e) {
      comentando = false;
      console.log($(this).closest(".publicacion").children("p"));
      console.log($(".comentario").val());
      $(this).closest(".publicacion").children("p").append(`
      
        <div class="comentario-escrito">
          ${$(".comentario").val()}
        </div>
      
      `);
      $("#comentar-div").remove();
      e.preventDefault();
    });
    // cancelar comentario
    $(".cancelar").click(function (e) {
      comentando = false;
      $("#comentar-div").remove();
      e.preventDefault();
    });
  }
});
