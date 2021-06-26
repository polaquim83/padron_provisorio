module.exports = (sequelize, dataTypes) => {
    const Padron = sequelize.define(
        "Padron",
        {
            provincia: { type: dataTypes.STRING, allowNull: false },
            tipo_ejemplar: { type: dataTypes.STRING, allowNull: true },
            numero: { type: dataTypes.INTEGER, allowNull: false },
            apellido: { type: dataTypes.STRING, allowNull: false },
            nombre: { type: dataTypes.STRING, allowNull: false },
            clase: { type: dataTypes.SMALLINT, allowNull: false },
            genero: { type: dataTypes.STRING(10), allowNull: true },
            domicilio: { type: dataTypes.STRING, allowNull: true },
            seccion: { type: dataTypes.STRING, allowNull: true },
            circuito: { type: dataTypes.STRING, allowNull: true },
            localidad: { type: dataTypes.STRING, allowNull: true },
            codigo_postal: {
                type: dataTypes.STRING,
                defaultValue: null,
            },
            fecha_domicilio: { type: dataTypes.STRING, allowNull: true },
            tipo_nacionalidad: { type: dataTypes.STRING, allowNull: true },
        },
        { tableName: "padron", timestamps: false }
    );

    return Padron;
};
