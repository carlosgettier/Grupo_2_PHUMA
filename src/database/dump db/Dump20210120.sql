CREATE DATABASE  IF NOT EXISTS `phuma` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `phuma`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: phuma
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

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
  CONSTRAINT `estado_carrito_fk` FOREIGN KEY (`estado_carrito`) REFERENCES `estado_carrito` (`id_estado_carrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `id_carrito_fk` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `id_modelo_color_fk` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_modelo_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_modelo_talle_fk` FOREIGN KEY (`id_talle`) REFERENCES `talle` (`id_talle`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  PRIMARY KEY (`id_producto`),
  KEY `id_marca_fk_idx` (`id_marca`),
  KEY `id_categoria_fk_idx` (`id_categoria`),
  KEY `id_sexo_fk_idx` (`id_sexo`),
  CONSTRAINT `id_categoria_fk` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_marca_fk` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id_marca`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_sexo_fk` FOREIGN KEY (`id_sexo`) REFERENCES `sexo` (`id_sexo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `categoria_user_fk` FOREIGN KEY (`categoria_id`) REFERENCES `users_categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-20 12:55:58
