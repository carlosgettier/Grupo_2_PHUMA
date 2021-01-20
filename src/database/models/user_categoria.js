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

    user_categoria.associate= function(models){
        user_categoria.hasMany(models.user,{
            as:"categoria",
            foreignKey:"categoria_id"
        })
    }
    return user_categoria
      

}