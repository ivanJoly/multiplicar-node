const fs = require('fs')
const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

let listarTabla = (base, limite) => {

    if (!Number(base)){
        console.log(colors.error(`El valor, ${base}, no es un numero!`));
        return;
    }

    for (let i = 0; i <= limite; i++ ){
        console.log( colors.verbose(`${base} * ${i} = ${base * i}`)); 
    }

}


let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {


        if (!Number(base)){
            reject(colors.error(`El valor, ${base}, no es un numero!`));
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        })

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}