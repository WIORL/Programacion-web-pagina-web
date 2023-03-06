$("#buscar-btn").click(function (e) {
  console.log($("#buscar-field").val());
  e.preventDefault();
});

// crear
let agregando = false;
$("#agregar").click(function () {

  if(!agregando) {

    agregando = true;
    console.log($(this))
    $(this).after(`
    
      <div id="agregando">
        <form>
          <input id="email-field" type="text" placeholder="email">
          <input id="contrasena-field" type="text" placeholder="contrasena">
          <button id="agregar-btn" type="submit">Agregar</button>
          <button id="cancelar-btn">Cancelar</button>
        </form>
      </div>
    
    `)

    $("#agregar-btn").click(function (e) {

      console.log($("#crud").children().children().first())
      $("#crud").children().children().first().after(`
      
        <tr>
          <td class="email">${$("#email-field").val()}</td>
          <td class="contrasena">${$("#contrasena-field").val()}</td>
          <td>
            <button class="editar">Editar</button>
            <button class="borrar">Borrar</button>
          </td>
        </tr>
      
      `)

      console.log("agregado!")
      $("#agregando").remove()
      agregando = false;
      e.preventDefault()
    })
    $("#cancelar-btn").click(function (e) {

      console.log("cancelado")
      $("#agregando").remove()
      agregando = false;
      e.preventDefault()
    })
  }
  
})

// editar
let editando = false;
$(".editar").click(function () {
  if (!editando) {
    editando = true;
    let email = $(this).parent().siblings(".email");
    let contrasena = $(this).parent().siblings(".contrasena");
    $(this).parent().parent().closest("tr").after(`

      <tr id="editar">
        <td>
          <input id="email-field" type="text" placeholder="email">
        </td>
        <td>
          <input id="contrasena-field" type="text" placeholder="contrasena">
        </td>
        <td>
          <button type="submit" id="editar-aceptar-btn">ok</button>
          <button id="editar-cancelar-btn">cancelar</button>
        </td>
      </tr>

    `);

    // editar aceptar
    $("#editar-aceptar-btn").click(function () {
      if (
        !($("#email-field").val() === "" || $("#contrasena-field").val() === "")
      ) {
        email.text($("#email-field").val());
        contrasena.text($("#contrasena-field").val());
        $("#editar").remove();
        editando = false;
      }
    });
    // editar cancelar
    $("#editar-cancelar-btn").click(function () {
      $("#editar").remove();
      editando = false;
    });
  }
});

// borrar
$(".borrar").click(function () {

  console.log($(this).parent().parent())
  $(this).parent().parent().remove()
})
