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
        timetamps:true,
        underscored: false
    }
    const color= sequelize.define(alias,cols,config)
    return color
      

}