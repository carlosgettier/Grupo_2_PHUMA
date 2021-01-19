module.exports=function(sequelize,DataTypes){
    let alias= "user_categoria"
    let cols={
        id_categoria:{
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
        tableName:"users_categoria",
        timetamps:true,
        underscored: false
    }
    const user_categoria= sequelize.define(alias,cols,config)
    return user_categoria
      

}