const fs = require('fs')

let listadoPorHacer = [];

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if( err ) throw "No se pudo guardar la tarea"                
    })
}  

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')            
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {   
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    
    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();    
    const index = getIndexTarea(descripcion);
    if( index >= 0 ){                
        listadoPorHacer[index].completado = completado;
        guardarDB();  
        return true;
    }
    
    return false;         
}


const getIndexTarea = ( descripcion ) => {
    let tarea = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    return tarea;
}

const eliminar = ( descripcion ) => {
    cargarDB();

    const index = getIndexTarea( descripcion );

    if(index >= 0){
        listadoPorHacer.splice( index, 1 );
        guardarDB();
        return true;
    } 

    return false;    
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}