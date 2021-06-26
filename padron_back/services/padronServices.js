const db = require("../database/models");

const padronServices = {
    create: async function (datos) {
        await db.Padron.create();
    },
};

module.exports = padronServices;
