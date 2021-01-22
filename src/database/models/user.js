module.exports=function(sequelize,DataTypes){
    let alias= "user"
    let cols={
        id_usuario:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true
        },
        nombre:{
            type:DataTypes.STRING,
            notNull:true
        },
        imagen:{
            type:DataTypes.INTEGER
        },
        email:{
            type:DataTypes.STRING,
            notNull:true
        },
        password:{
            type:DataTypes.INTEGER,
            notNull:true
        },
        repassword:{
            type:DataTypes.INTEGER,
            notNull:true
        },
        categoria_id:{
            type:DataTypes.INTEGER,
            notNull:true,
            foreignKey:true

        }
    }
    let config={
        tableName:"users",
        timestamps:false,
        underscored:false
    }
    const user= sequelize.define(alias,cols,config)
        user.associate= function(models){

            user.belongsTo(models.user_categoria,{
                as:"usuario",
                foreignKey:"categoria_id"
            })
            
             user.belongsTo(models.carrito,{
                as:"user_carrito",
                foreignKey:"id_usuario"
             })
            
        
        }    
    return user
      

}