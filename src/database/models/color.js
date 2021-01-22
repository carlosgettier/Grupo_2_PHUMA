module.exports=function(sequelize,DataTypes){
    let alias= "color"
    let cols={
        id_color:{
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
        tableName:"color",
        timestamps:true,
        underscored: false
    }
    const color= sequelize.define(alias,cols,config)
    color.associate= function(models){
        color.belongsToMany(models.product,{
            as:"colorPro",
            through:"modelo_producto",
            foreignKey:"id_color",
            otherKey:"id_producto",
            timetamps:false
        })
    }
    return color
      

}