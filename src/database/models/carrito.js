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
        timestamps:false,
        underscored: false
    }
    const carrito= sequelize.define(alias,cols,config)
    carrito.associate= function(models){
        carrito.belongsTo(models.user,{
            as:"carrito",
            foreignKey:"id_usuario"
         })

         carrito.belongsToMany(models.product,{
             as:"carriProd",
             through:"linea_carrito",
             foreignKey:"id_carrito",
             otherKey:"id_producto",
             timetamps:false
         })
    }
    return carrito
      

}