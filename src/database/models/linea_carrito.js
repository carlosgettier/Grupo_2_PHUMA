module.exports=function(sequelize,DataTypes){
    let alias= "linea_carrito"
    let cols={
        id_linea_de_carrito:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
         id_carrito:{
             type:DataTypes.INTEGER,
             foreignKey:true,
             notNull:true
        },
         id_producto:{
           type:DataTypes.INTEGER,
           foreignKey:true
        },
        cantidad:{
           type:DataTypes.INTEGER,
           notNull:true
        }
    }
    let config={
        tableName:"linea_de_carrito",
        timestamps:true,
        underscored: false
    }
    const linea_carrito= sequelize.define(alias,cols,config)
    return linea_carrito
}