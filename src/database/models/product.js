module.exports=function(sequelize,DataTypes){
    let alias= "product"
    let cols={
        id_producto:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
        nombre:{
            type:DataTypes.STRING,
            notNull:true
        },
        id_marca:{
            type:DataTypes.INTEGER,
            notNull:true,
            foreignKey:true
        },
        cantidad:{
            type:DataTypes.INTEGER,
            notNull:true
        },
        
        id_categoria:{
            type:DataTypes.INTEGER,
            foreignKey:true,
            notNull:true
        },
        precio:{
            type:DataTypes.INTEGER,
            notNull:true
        },
        status:{
            type:DataTypes.INTEGER
        },
        id_sexo:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }

    }
    let config={
        tableName:"products",
        timetamps:true,
        underscored: false
    }
    const product= sequelize.define(alias,cols,config)
    return product
      

}