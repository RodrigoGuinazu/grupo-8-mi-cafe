module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        role_id: {
            type: dataTypes.BIGINT
        },
        created_at: {
            type: dataTypes.TIMESTAMP
        },
        updated_at: {
            type: dataTypes.TIMESTAMP
        },
        deleted_at: {
            type: dataTypes.TIMESTAMP
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Users = sequelize.define(alias, cols, config);
    
    return Users
}

