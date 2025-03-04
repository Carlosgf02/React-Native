-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 04-03-2025 a las 20:03:29
-- Versión del servidor: 8.0.41
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coches_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id_marca` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `pais` varchar(100) DEFAULT NULL,
  `fundacion` int DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `logo` varchar(255) DEFAULT NULL,
  `valor_mercado` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id_marca`, `nombre`, `pais`, `fundacion`, `activo`, `logo`, `valor_mercado`) VALUES
(1, 'Toyota', 'Japón', 1937, 1, 'https://example.com/toyota_logo.png', 280.50),
(2, 'Ford', 'Estados Unidos', 1903, 1, 'https://example.com/ford_logo.png', 180.75),
(3, 'BMW', 'Alemania', 1916, 1, 'https://example.com/bmw_logo.png', 200.30),
(4, 'Fiat', 'Italia', 1939, 1, 'https://example.com/fiat_logo.png', 100.00),
(5, 'Hyundai', 'Corea del Sur', 1967, 1, 'https://example.com/hyundai_logo.png', 150.45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `id_modelo` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `precio` decimal(38,2) DEFAULT NULL,
  `fecha_lanzamiento` date DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT '1',
  `potencia_hp` int DEFAULT NULL,
  `consumo_litros` float DEFAULT NULL,
  `id_marca` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`id_modelo`, `nombre`, `tipo`, `precio`, `fecha_lanzamiento`, `disponible`, `potencia_hp`, `consumo_litros`, `id_marca`) VALUES
(1, 'Corolla', 'Sedán', 22000.00, '2022-03-15', 1, 139, 6.5, 1),
(2, 'RAV4', 'SUV', 28000.00, '2023-06-10', 1, 203, 7.1, 1),
(3, 'Mustang', 'Deportivo', 55000.00, '2021-09-20', 1, 450, 10.2, 2),
(4, 'F-150', 'Pickup', 40000.00, '2022-11-05', 1, 400, 9.5, 2),
(5, 'Serie 3', 'Sedán', 45000.00, '2023-02-25', 1, 255, 7.8, 3),
(6, 'X5', 'SUV', 65000.00, '2022-08-14', 1, 335, 8.9, 3),
(7, 'Panda', 'Compacto', 22000.00, '2020-06-30', 1, 90, 7, 4),
(8, '500', 'Compacto', 25000.00, '2021-10-05', 1, 60, 6, 4),
(9, 'Tucson', 'SUV', 27000.00, '2023-05-12', 1, 187, 7.4, 5),
(10, 'Elantra', 'Sedán', 21000.00, '2022-04-08', 1, 147, 6.2, 5),
(11, 'Toyota Supra', 'Deportivo', 50000.00, NULL, 1, 500, 15, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id_marca`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id_modelo`),
  ADD KEY `id_marca` (`id_marca`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id_marca` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `modelos`
--
ALTER TABLE `modelos`
  MODIFY `id_modelo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD CONSTRAINT `modelos_ibfk_1` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
