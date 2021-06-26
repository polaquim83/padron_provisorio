module.exports = {
    development: {
        username: "root",
        password: "NewPassword",
        database: "padron_provisorio",
        host: "127.0.0.1",
        dialect: "mysql",
        options: {
            pool: {
                max: 5,
                min: 0,
                acquire: 60000,
                idle: 20000,
            },
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
