CREATE DATABASE  IF NOT EXISTS `phuma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `phuma`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: phuma
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_venta` date NOT NULL,
  `status` bit(1) NOT NULL,
  `estado_carrito` int(11) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `id_usuario_fk_idx` (`id_usuario`),
  KEY `estado_carrito_fk_idx` (`estado_carrito`),
  CONSTRAINT `estado_carrito_fk` FOREIGN KEY (`estado_carrito`) REFERENCES `estado_carrito` (`id_estado_carrito`),
  CONSTRAINT `id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Remera'),(2,'Pantalon'),(3,'Zapatilla');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id_color` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Negro'),(2,'Amarillo'),(3,'Naranja');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_carrito`
--

DROP TABLE IF EXISTS `estado_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_carrito` (
  `id_estado_carrito` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_estado_carrito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_carrito`
--

LOCK TABLES `estado_carrito` WRITE;
/*!40000 ALTER TABLE `estado_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idimagenes` int(11) NOT NULL AUTO_INCREMENT,
  `rutaImagen` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`idimagenes`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'undefined-1607889806373.jpg',1),(2,'undefined-1607891121322.png',2),(3,'undefined-1607890736059.jpg',3),(4,'undefined-1607890009898.jpg',1),(5,'undefined-1607889840167.jpg',4);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linea_de_carrito`
--

DROP TABLE IF EXISTS `linea_de_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linea_de_carrito` (
  `id_linea_de_carrito` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_linea_de_carrito`),
  KEY `id_carrito_fk_idx` (`id_carrito`),
  KEY `id_producto_fk_idx` (`id_producto`),
  CONSTRAINT `id_carrito_fk` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`),
  CONSTRAINT `id_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linea_de_carrito`
--

LOCK TABLES `linea_de_carrito` WRITE;
/*!40000 ALTER TABLE `linea_de_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `linea_de_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `id_marca` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Marca 1'),(2,'Marca 2');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo_de_producto`
--

DROP TABLE IF EXISTS `modelo_de_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelo_de_producto` (
  `id_modelo_de_producto` int(11) NOT NULL,
  `id_talle` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_color` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id_modelo_de_producto`),
  KEY `id_talle_fk_idx` (`id_talle`),
  KEY `id_color_fk_idx` (`id_color`),
  KEY `id_producto_fk_idx` (`id_producto`),
  CONSTRAINT `id_modelo_color_fk` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`),
  CONSTRAINT `id_modelo_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`),
  CONSTRAINT `id_modelo_talle_fk` FOREIGN KEY (`id_talle`) REFERENCES `talle` (`id_talle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo_de_producto`
--

LOCK TABLES `modelo_de_producto` WRITE;
/*!40000 ALTER TABLE `modelo_de_producto` DISABLE KEYS */;
INSERT INTO `modelo_de_producto` VALUES (1,1,1,1,5,_binary ''),(2,2,1,1,5,_binary ''),(3,3,2,2,5,_binary ''),(4,2,3,2,1,_binary ''),(5,1,4,2,2,_binary '');
/*!40000 ALTER TABLE `modelo_de_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_producto` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` int(11) NOT NULL,
  `status` bit(1) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_sexo` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `id_imagen_principal` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_marca_fk_idx` (`id_marca`),
  KEY `id_categoria_fk_idx` (`id_categoria`),
  KEY `id_sexo_fk_idx` (`id_sexo`),
  KEY `id_imagen_principal_idx` (`id_imagen_principal`),
  CONSTRAINT `id_categoria_fk` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `id_imagen_principal` FOREIGN KEY (`id_imagen_principal`) REFERENCES `imagenes` (`idimagenes`),
  CONSTRAINT `id_marca_fk` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id_marca`),
  CONSTRAINT `id_sexo_fk` FOREIGN KEY (`id_sexo`) REFERENCES `sexo` (`id_sexo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,1,'Producto 1',5000,_binary '',2,1,'Prueba desc',1),(2,1,1,'Otro Producto',1000,_binary '',5,1,'\'Esta es una descripcion\'',2),(3,2,2,'Tercer Producto',200,_binary '',10,2,'Una descripcion mas larga e interesante. Casi una historia. Igual lo que estaba fallando eran unas B que se completaban solas en la insert QUERY. Sabe dios por que hacia eso.',3),(4,2,2,'Cuarto Producto',5789,_binary '',5,2,'Para algo de variedad',5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexo` (
  `id_sexo` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id_sexo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Masculino'),(2,'Femenino');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talle`
--

DROP TABLE IF EXISTS `talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talle` (
  `id_talle` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle`
--

LOCK TABLES `talle` WRITE;
/*!40000 ALTER TABLE `talle` DISABLE KEYS */;
INSERT INTO `talle` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL');
/*!40000 ALTER TABLE `talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `repassword` varchar(100) NOT NULL,
  `status` bit(1) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `categoria_user_fk_idx` (`categoria_id`),
  CONSTRAINT `categoria_user_fk` FOREIGN KEY (`categoria_id`) REFERENCES `users_categoria` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categoria`
--

DROP TABLE IF EXISTS `users_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categoria`
--

LOCK TABLES `users_categoria` WRITE;
/*!40000 ALTER TABLE `users_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_categoria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-25 23:00:46
