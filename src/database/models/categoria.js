module.exports=function(sequelize,DataTypes){
    let alias= "categoria"
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
        tableName:"categoria",
        timetamps:true,
        underscored: false
    }
    const categoria= sequelize.define(alias,cols,config)
    return categoria
      

}