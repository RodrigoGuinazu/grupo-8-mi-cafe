module.exports = (sequelize, dataTypes) => {
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Role = sequelize.define(alias, cols, config);
    
    return Address
}