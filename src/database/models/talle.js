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
        timetamps:true,
        underscored: false
    }
    const talle= sequelize.define(alias,cols,config)
    return talle
      

}