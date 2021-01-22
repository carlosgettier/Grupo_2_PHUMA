module.exports=function(sequelize,DataTypes){
    let alias= "estado_carrito"
    let cols={
        id_estado_carrito:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
        nombre:{
            type:DataTypes.STRING,
            notNull:true
        }
     }
    let config={
        tableName:"estado_carrito",
        timestamps:true,
        underscored: false
    }
    const estado_carrito= sequelize.define(alias,cols,config)
    return estado_carrito
      

}