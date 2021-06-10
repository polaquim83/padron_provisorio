const db = require("../database/models");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

mainController = {
    index: async (req, res) => {
        let result = null;
        let count = null;
        res.render("index", { result, count });
    },
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
        return res.render("index", { result });
    },
};

module.exports = mainController;
