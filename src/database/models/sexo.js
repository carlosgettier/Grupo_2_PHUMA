module.exports=function(sequelize,DataTypes){
    let alias= "sexo"
    let cols={
        id_sexo:{
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
        tableName:"sexo",
        timestamps:false,
        underscored: false
    }
    const sexo= sequelize.define(alias,cols,config)

    sexo.associate= function(models){
       sexo.hasMany(models.product,{
            as:"sexoPro",
            foreignKey:"id_sexo"
        })

    }

    return sexo
      

}