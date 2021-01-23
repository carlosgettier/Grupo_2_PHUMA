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
        },
        descripcion:{
            type:DataTypes.STRING,
            notNull:true

        }

    }
    let config={
        tableName:"products",
        timestamps:false,
        underscored: false
    }
    const product= sequelize.define(alias,cols,config)
    product.associate= function(models){
        product.belongsToMany(models.carrito,{
            as:"produCarri",
            through:"linea_carrito",
           foreignKey:"id_producto",
            otherKey:"id_carrito",
            timetamps:false
        })
        product.belongsToMany(models.talle,{
            as:"produTalle",
            through:"modelo_producto",
            foreignKey:"id_producto",
            otherKey:"id_talle",
            timetamps:false
        })
        product.belongsToMany(models.color,{
            as:"proCol",
            through:"modelo_producto",
            foreignKey:"id_producto",
            otherKey:"id_color",
            timetamps:false
        })
        product.belongsTo(models.sexo,{
            as:"proSexo",
            foreignKey:"id_sexo"
        })
       
         product.belongsTo(models.categoria,{
                 as:"proCateg",
                 foreignKey:"id_categoria"
         })
    
         product.belongsTo(models.marca,{
                 as:"proMarc",
                 foreignKey:"id_marca"
             })

    }
    return product
      

}