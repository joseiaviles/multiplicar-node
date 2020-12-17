const fs = require('fs');

let base = 8;
let data = '';

for (let i = 1; i <= 10; i++) {
        data +=(`${ base } X ${i} = ${base * i}\n`);
}

fs.writeFile(`tabla-${ base }.txt`, data , (err) => {
            if (err) throw err;
            
            console.log(`El archivo tabla-${base}.txt ha sido creado`);
});  