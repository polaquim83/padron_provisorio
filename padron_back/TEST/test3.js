const { createReadStream } = require("fs");
const db = require("../database/models");
const csv = require("csv-parser");

const filename =
    "/Users/netactics/Downloads/PADRON/Padron_2021_provisorio_COMPLETO.csv";

createReadStream(filename)
    .pipe(
        csv([
            "provincia",
            "tipo_ejemplar",
            "numero",
            "apellido",
            "nombre",
            "clase",
            "genero",
            "domicilio",
            "seccion",
            "circuito",
            "localidad",
            "codigo_postal",
            "fecha_domicilio",
            "tipo_nacionalidad",
        ])
    )
    .on("data", async (data) => {
        //let lineSplit = data.split(/\s*,\s*/);
        //console.log(data);
        // //let datos = {
        //     provincia: lineSplit[0],
        //     tipo_ejemplar: lineSplit[1],
        //     numero: lineSplit[2],
        //     apellido: lineSplit[3],
        //     nombre: lineSplit[4],
        //     clase: lineSplit[5],
        //     genero: lineSplit[6],
        //     domicilio: lineSplit[7],
        //     seccion: lineSplit[8],
        //     circuito: lineSplit[9],
        //     localidad: lineSplit[10],
        //     codigo_postal: "" ? null : lineSplit[11],
        //     fecha_domicilio: lineSplit[12],
        //     tipo_nacionalidad: lineSplit[13],
        await db.Padron.create({ ...data }, { logging: false });
    });
