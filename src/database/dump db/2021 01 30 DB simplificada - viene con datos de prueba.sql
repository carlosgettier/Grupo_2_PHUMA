CREATE DATABASE  IF NOT EXISTS `phuma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
  `id_carrito` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `fecha_venta` date DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `estado_carrito` int(11) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `id_usuario_fk_idx` (`id_usuario`),
  KEY `id_estado_carrito_fk_idx` (`estado_carrito`),
  CONSTRAINT `id_estado_carrito_fk` FOREIGN KEY (`estado_carrito`) REFERENCES `estado_carrito` (`id_estado_carrito`),
  CONSTRAINT `id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Remera'),(2,'Pantalon'),(3,'Calzado'),(4,'Camisa'),(5,'Accesorio'),(6,'Traje de baño');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_carrito`
--

DROP TABLE IF EXISTS `estado_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_carrito` (
  `id_estado_carrito` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_estado_carrito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `rutaImagen` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idimagenes`),
  KEY `id_producto_fk_idx` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (12,'undefined-1612052470648.JPG',19),(13,'undefined-1612052470686.JPG',19),(14,'undefined-1612052470623.JPG',19),(15,'undefined-1612052577973.JPG',20),(16,'undefined-1612052578105.JPG',20),(17,'undefined-1612052577878.JPG',20),(18,'undefined-1612052654477.JPG',21),(19,'undefined-1612052654399.JPG',21),(20,'undefined-1612052783246.JPG',22),(21,'undefined-1612052783166.JPG',22),(22,'undefined-1612052828173.JPG',23),(23,'undefined-1612052828106.JPG',23),(24,'undefined-1612052872337.JPG',24),(25,'undefined-1612052872411.JPG',24),(26,'undefined-1612052872260.JPG',24),(27,'undefined-1612052930528.JPG',25),(28,'undefined-1612052930532.JPG',25),(29,'undefined-1612052930449.JPG',25),(30,'undefined-1612053080639.JPG',26),(31,'undefined-1612053080641.JPG',26),(32,'undefined-1612053080636.JPG',26),(33,'undefined-1612053671097.JPG',27),(34,'undefined-1612053671095.JPG',27),(35,'undefined-1612053720513.JPG',28),(36,'undefined-1612053720502.JPG',28);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linea_de_carrito`
--

DROP TABLE IF EXISTS `linea_de_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linea_de_carrito` (
  `id_linea_de_carrito` int(11) NOT NULL AUTO_INCREMENT,
  `id_carrito` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_linea_de_carrito`),
  KEY `id_producto_fk_idx` (`id_producto`),
  CONSTRAINT `id_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id_marca` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Addidas'),(2,'Billabong'),(3,'Nike'),(4,'Puma');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_marca` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_sexo` int(11) DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (19,1,3,'Zapatilla blanca deportiva',3500,_binary '',NULL,1,'Una zapatilla deportiva',14),(20,3,3,'Zapatilla Amarilla',4600,_binary '',NULL,1,'Es mas linda que la blanca.-',17),(21,1,1,'Musculosa Blanca',1300,_binary '',NULL,1,'Para hacer ejercicio',19),(22,1,2,'Pantalón deportivo',2400,_binary '',NULL,1,'Pantalón para correr',21),(23,2,4,'Camisa Azul',5500,_binary '',NULL,1,'Camisa manga corta',23),(24,2,6,'Bikini floreada',2350,_binary '',NULL,2,'Una malla',26),(25,2,1,'Remera floreada Billabong',2140,_binary '',NULL,2,'Remera estampada blanca',29),(26,2,5,'Mochila rosada',1580,_binary '',NULL,2,'Mochila Billabong Rosada',32),(27,2,1,'Buzo deportivo',3450,_binary '',NULL,2,'Buzo con capucha para mujer. Falta la categoría buzo. O crear alguna categoría mas general.',34),(28,2,2,'Pollera floreada',1570,_binary '',NULL,2,'Pollera',36);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexo` (
  `id_sexo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_sexo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `id_talle` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle`
--

LOCK TABLES `talle` WRITE;
/*!40000 ALTER TABLE `talle` DISABLE KEYS */;
INSERT INTO `talle` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'36'),(6,'38'),(7,'40'),(8,'42');
/*!40000 ALTER TABLE `talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talle_de_producto`
--

DROP TABLE IF EXISTS `talle_de_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talle_de_producto` (
  `idtalle_de_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_talle` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  PRIMARY KEY (`idtalle_de_producto`),
  KEY `id_talle_idx` (`id_talle`),
  KEY `id_producto_idx` (`id_producto`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`),
  CONSTRAINT `id_talle` FOREIGN KEY (`id_talle`) REFERENCES `talle` (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle_de_producto`
--

LOCK TABLES `talle_de_producto` WRITE;
/*!40000 ALTER TABLE `talle_de_producto` DISABLE KEYS */;
INSERT INTO `talle_de_producto` VALUES (22,6,19),(23,7,19),(24,8,19),(25,5,20),(26,6,20),(27,7,20),(28,8,20),(29,3,21),(30,4,21),(31,1,22),(32,3,22),(33,4,22),(34,2,23),(35,3,23),(36,1,24),(37,2,24),(38,1,25),(39,2,25),(40,3,25),(41,2,27),(42,1,28),(43,2,28);
/*!40000 ALTER TABLE `talle_de_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `repassword` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `categoria_user_fk_idx` (`categoria_id`),
  CONSTRAINT `categoria_user_fk` FOREIGN KEY (`categoria_id`) REFERENCES `users_categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'administrador','admin@admin.com','undefined-1611779858155.jpg','$2a$12$uWwUSLBbb.zW/uotaL99Kukmhry9lI5HXnmW.wnVxL9rMwEemFw/m','$2a$12$uA6z/cBf2ZOd0q6vN45ttOr.vu.B9PFQhrPscFIq9XfD/XTrzvpdW',_binary '',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categoria`
--

DROP TABLE IF EXISTS `users_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categoria`
--

LOCK TABLES `users_categoria` WRITE;
/*!40000 ALTER TABLE `users_categoria` DISABLE KEYS */;
INSERT INTO `users_categoria` VALUES (1,'administrador'),(2,'logueado'),(3,'invitado');
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

-- Dump completed on 2021-01-30 21:45:04
