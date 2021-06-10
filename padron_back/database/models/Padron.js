module.exports = (sequelize, dataTypes) => {
    const Padron = sequelize.define(
        "Padron",
        {
            provincia: { type: dataTypes.STRING, allowNull: false },
            tipo_ejemplar: { type: dataTypes.STRING, allowNull: false },
            numero: { type: dataTypes.INTEGER, allowNull: false },
            apellido: { type: dataTypes.STRING, allowNull: false },
            nombre: { type: dataTypes.STRING, allowNull: false },
            clase: { type: dataTypes.SMALLINT, allowNull: false },
            genero: { type: dataTypes.STRING(10), allowNull: false },
            domicilio: { type: dataTypes.STRING, allowNull: false },
            seccion: { type: dataTypes.STRING, allowNull: false },
            circuito: { type: dataTypes.STRING, allowNull: false },
            localidad: { type: dataTypes.STRING, allowNull: false },
            codigo_postal: { type: dataTypes.STRING, allowNull: false },
            fecha_domicilio: { type: dataTypes.DATEONLY, allowNull: false },
            tipo_nacionalidad: { type: dataTypes.STRING, allowNull: false },
        },
        { tableName: "padron", timestamps: false }
    );

    return Padron;
};
