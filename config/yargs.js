const descripcion = {
  demand: true, 
  alias: "d",
  desc: 'Descripcion de la tarea por hacer'
}

const completado = {
  alias: 'c', 
  default: true ,
  desc: 'Marca como completado o pediente la tarea'
}

const argv = require("yargs")
  .command("crear", "Crear una nueva tarea", { descripcion } )  
  .command("actualizar", "Actualiza el estado de una tarea", { descripcion, completado })
  .command("eliminar", "Elimina una tarea especifica", { descripcion } )  
  .help()
  .argv;


module.exports = {
    argv
}