module.exports=function(sequelize,DataTypes){
    let alias= "carrito"
    let cols={
        id_carrito:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
         id_usuario:{
             type:DataTypes.INTEGER,
             foreignKey:true,
             notNull:true
        },
         fecha_venta:{
           type:DataTypes.DATE
        },
        status:{
           type:DataTypes.INTEGER,
           notNull:true
        },
         estado_carrito:{
            type:DataTypes.INTEGER,
            notNull:true,
            foreignKey:true

        }
    }
    let config={
        tableName:"carrito",
        timetamps:true,
        underscored: false
    }
    const carrito= sequelize.define(alias,cols,config)
    return carrito
      

}