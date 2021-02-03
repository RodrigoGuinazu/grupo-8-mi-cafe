module.exports = (sequelize, dataTypes) => {
    let alias = "Weight";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            autoIncrement: true
        },
        weight: {
            type: dataTypes.INTEGER.UNSIGNED
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Weight = sequelize.define(alias, cols, config);
    
    return Weight
}