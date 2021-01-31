module.exports=function(sequelize,DataTypes){
    let alias= "talle_de_producto"
    let cols={
        idtalle_de_producto:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
        id_talle:{
            type:DataTypes.INTEGER,
            notNull:true,
            foreignKey:true
        },       
        id_producto:{
            type:DataTypes.INTEGER,
            foreignKey:true,
            notNull:true
        }
    }
    let config={
        tableName:"talle_de_producto",
        timestamps:false,
        underscored: false
    }
    
    const product= sequelize.define(alias,cols,config)
    
    product.associate= function(models){
        product.belongsTo(models.talle,{
            as:"productosDeTalle",
            foreignKey:"id_talle"
        })

        product.belongsTo(models.product,{
            as:"tallesDeProducto",
            foreignKey:"id_producto"
        })

    }
    return product
      

}