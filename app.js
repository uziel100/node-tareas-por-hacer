// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./to-do/to-do");
// console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let tareas = porHacer.getListado();
    for (let tarea of tareas) {
      console.log("==============================".green);
      console.log(colors.white(tarea.descripcion));
      console.log(`Estado: ${colors.red(tarea.completado)}`);
      console.log("==============================".green);
    }
    break;
  case "actualizar":
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "eliminar":
      let eliminado = porHacer.eliminar(argv.descripcion)
      console.log(eliminado)
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
