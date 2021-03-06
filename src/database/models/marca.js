module.exports=function(sequelize,DataTypes){
    let alias= "marca"
    let cols={
        id_marca:{
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
        tableName:"marca",
        timestamps:false,
        underscored: false
    }
    const marca= sequelize.define(alias,cols,config)
    marca.associate= function(models){
        marca.hasMany(models.product,{
             as:"marcPro",
             foreignKey:"id_marca"
         })
        }
    return marca
      

}