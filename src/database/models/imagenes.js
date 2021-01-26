module.exports= function(sequelize,DataTypes){
    let alias= "imagenes";

    let cols={
        idimagenes:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
        rutaImagen:{
            type:DataTypes.STRING,
            notNull:true
        },
        product_id:{
            type:DataTypes.INTEGER,
            foreignKey:true,
            notNull:true
        }
    };

    let config={
        tableName:"imagenes",
        timestamps:false,
        underscored: false
    };

    const imagenes = sequelize.define(alias,cols,config);

    imagenes.associate= function(models){
        imagenes.belongsTo(models.product,{
            as:"product",
            foreignKey:"product_id"
        }),

        imagenes.hasOne(models.product,{
            as:"producto_de_esta_imagen",
            foreignKey:"id_imagen_principal"
        })
    };

    return imagenes
}