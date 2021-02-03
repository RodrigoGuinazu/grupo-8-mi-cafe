module.exports = (sequelize, dataTypes) => {
    let alias = "Color";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Color = sequelize.define(alias, cols, config);
    
    return Color
}

