const {interesado,mostrarTodosLosCursosDisponibles,crearArchivo} = require ('./datos.js');

const argv = require('yargs') 
            .command('inscribir','Inscribir interesado al curso',interesado)                       
            .argv


function inscribirInteresado(interesado){                   
    if(interesado.id > 4)
        console.log('Ha ingresado un id que no corresponde a ningún curso');                
    
    else if(interesado.id >= 1 && interesado.id <=4)
        crearArchivo(interesado);    
    else{                                    
        console.log('ESTOS SON LOS CURSOS DISPONIBLES');        
        mostrarTodosLosCursosDisponibles();                
    }
                
}            

inscribirInteresado(argv);











            





