module.exports=function(sequelize,DataTypes){
    let alias= "talle"
    let cols={
        id_talle:{
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
        tableName:"talle",
        timestamps:true,
        underscored: false
    }
    const talle= sequelize.define(alias,cols,config)
 
    talle.associate= function(models){
    talle.belongsToMany(models.product,{
        as:"talleProduc",
        through:"modelo_producto",
        foreignKey:"id_talle",
        otherKey:"id_producto",
        timetamps:false
    })
    }
    return talle
      

}