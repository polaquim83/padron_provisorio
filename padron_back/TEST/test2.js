const { once } = require("events");
const { createReadStream } = require("fs");
const { createInterface } = require("readline");
const db = require("../database/models");

(async function processLineByLine() {
    try {
        const rl = createInterface({
            input: createReadStream(
                "/Users/netactics/Downloads/PADRON/Padron_2021_provisorio_COMPLETO.csv"
            ),
            crlfDelay: Infinity,
        });
        rl.on("line", async (line) => {
            let lineSplit = line.split(/\s*,\s*/);
            let datos = {
                provincia: lineSplit[0],
                tipo_ejemplar: lineSplit[1],
                numero: lineSplit[2],
                apellido: lineSplit[3],
                nombre: lineSplit[4],
                clase: lineSplit[5],
                genero: lineSplit[6],
                domicilio: lineSplit[7],
                seccion: lineSplit[8],
                circuito: lineSplit[9],
                localidad: lineSplit[10],
                codigo_postal: "" ? null : lineSplit[11],
                fecha_domicilio: lineSplit[12],
                tipo_nacionalidad: lineSplit[13],
            };
            await db.Padron.create({ ...datos }, { logging: false });
        });

        await once(rl, "close");

        console.log("File processed.");
    } catch (err) {
        console.error(err);
    }
})();
