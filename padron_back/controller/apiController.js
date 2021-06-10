const db = require("../database/models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

apiController = {
    search: async (req, res) => {
        let result = await db.Padron.findAndCountAll({
            where: {
                nombre: { [Op.like]: `%${req.body.nombre}%` },
                apellido: { [Op.like]: `%${req.body.apellido}%` },
                numero: { [Op.like]: `%${req.body.numero}%` },
                tipo_ejemplar: { [Op.like]: `%${req.body.tipo_ejemplar}%` },
                clase: {
                    [Op.between]: [req.body.bottomYear, req.body.topYear],
                },
                genero: { [Op.like]: `%${req.body.genero}%` },
                domicilio: { [Op.like]: `%${req.body.domicilio}%` },
                localidad: { [Op.like]: `%${req.body.localidad}%` },
                codigo_postal: {
                    [Op.or]: [
                        { [Op.like]: `%${req.body.codigo_postal}%` },
                        { [Op.is]: null },
                    ],
                },
                provincia: { [Op.like]: `%${req.body.provincia}%` },
                seccion: { [Op.like]: `%${req.body.seccion}%` },
                circuito: { [Op.like]: `%${req.body.circuito}%` },
                tipo_nacionalidad: {
                    [Op.like]: `%${req.body.tipo_nacionalidad}%`,
                },
            },
            limit: 20,
            offset: 0,
        });
        if (result.data.length === 0) {
            result.data = "No se encontraron resultados";
            return res.json(result);
        }
        return res.json(result);
    },
    ejemplares: async (req, res) => {
        let dni = "";
        let ejemplares = await db.Padron.findAll({
            where: { tipo_ejemplar: { [Op.like]: `%${dni}%` } },
            attributes: [
                [
                    sequelize.fn("DISTINCT", sequelize.col("tipo_ejemplar")),
                    "tipo",
                ],
            ],
        });
        if (ejemplares.length == 0) {
            return res.send("No se encontraron resultados");
        }
        return res.json(ejemplares);
    },
};

module.exports = apiController;
