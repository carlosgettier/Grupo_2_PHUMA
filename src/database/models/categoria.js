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
        timestamps:false,
        underscored: false
    }

    const categoria= sequelize.define(alias,cols,config)

    categoria.associate= function(models){
        categoria.hasMany(models.product,{
             as:"catePro",
             foreignKey:"id_categoria"
         })
 
     }

    return categoria
}