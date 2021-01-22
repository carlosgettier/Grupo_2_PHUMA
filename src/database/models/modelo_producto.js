module.exports=function(sequelize,DataTypes){
    let alias= "modelo_producto"
    let cols={
        id_modelo_de_producto:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
         id_talle:{
             type:DataTypes.INTEGER,
             foreignKey:true,
             notNull:true
        },
         id_producto:{
           type:DataTypes.INTEGER,
           foreignKey:true
           
        },
        status:{
           type:DataTypes.INTEGER,
           notNull:true
        },
         cantidad:{
            type:DataTypes.INTEGER,
            notNull:true,
         },
         id_color:{
             type:DataTypes.INTEGER,
             foreignKey:true,
             notNull:true
         }
    }
    let config={
        tableName:"modelo_de_producto",
        timestamps:false,
        underscored: false
    }
    const modelo_producto= sequelize.define(alias,cols,config)
    return modelo_producto
}