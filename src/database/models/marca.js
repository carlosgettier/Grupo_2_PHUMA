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
        timetamps:true,
        underscored: false
    }
    const marca= sequelize.define(alias,cols,config)
    marca.associate= function(models){
        marca.belongsTo(models.product,{
             as:"marcPro",
             foreignKey:"id_marca"
         })
        }
    return marca
      

}