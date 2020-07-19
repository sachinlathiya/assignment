-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 19, 2020 at 06:14 PM
-- Server version: 10.2.32-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `topaptitude_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `fields`
--

CREATE TABLE `fields` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('date','number','string','boolean') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'string',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_07_18_000000_create_users_table', 1),
(2, '2020_07_18_100000_create_password_resets_table', 1),
(3, '2020_07_18_135830_create_subscribers_table', 1),
(4, '2020_07_18_141222_create_fields_table', 1),
(5, '2020_07_18_164128_create_subscriber_fields_table', 1),
(6, '2020_07_18_183516_adds_api_token_to_users_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(10) UNSIGNED NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` enum('active','unsubscribed','junk','bounced','unconfirmed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unconfirmed',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `img`, `title`, `author`, `name`, `email_address`, `state`, `created_at`, `updated_at`) VALUES
(2, 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 1', 'Sac', 'Sachin', 'sachinlathiya786@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(4, 'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 2', 'Sachin', 'Sachin', 'sachinlathiya786@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(5, 'https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Test 3', 'Eco', 'Eco', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(6, 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 4', 'Eco F', 'Eco F', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(7, 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 5', 'Eco FT', 'Eco FT', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(8, 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 6', 'Eco FTG', 'Eco FTFG', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(9, 'https://images.pexels.com/photos/580900/pexels-photo-580900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 7', 'Eco FTGF', 'Eco FTFGF', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(10, 'https://images.pexels.com/photos/679598/pexels-photo-679598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 8', 'Eco FTGFF', 'Eco FTFGF', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36'),
(11, 'https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Test 8', 'Eco FTGFFF', 'Eco FTFGF', 'sachinlathiya567@gmail.com', 'active', '2020-07-19 06:24:30', '2020-07-19 06:24:36');

-- --------------------------------------------------------

--
-- Table structure for table `subscriber_fields`
--

CREATE TABLE `subscriber_fields` (
  `id` int(10) UNSIGNED NOT NULL,
  `subscriber_id` int(10) UNSIGNED NOT NULL,
  `field_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `gender`, `dob`, `email_verified_at`, `password`, `remember_token`, `api_token`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'sachinlathiya567@gmail.com', NULL, NULL, NULL, '$2y$10$6u8Cio81WWdMxg8cRs3Z7uZVJ7n91j/DEWlB8C8c9nEz9n/tjL/cC', NULL, 'skaQEQaLn7azMW5wTuS39npMEyK29VPpFEhYBO9gzSX4cRfbyz', '2020-07-19 00:34:58', '2020-07-19 00:34:58'),
(2, 'sachin', 'sachin', 'sachinlathiya786@gmail.com', 'male', '1997-03-04', NULL, '$2y$10$FqrBshtsB7Qx.uq9BjfjseEtw6.0BqjmwRwKSJN7ZCb.yZUA0czTW', NULL, 'F1TsyTxEXa2cNNxXiCJBqHdS4V3kfVTlJdISeGTyUlt54IWa9V', '2020-07-19 00:40:22', '2020-07-19 14:02:23'),
(3, 'sachin', 'sachin', 'stackbee007@gmail.com', 'male', '2020-07-06', NULL, '$2y$10$5Zacr4C1S1FLwjUhx6.HPeqjRLNGBUN2xvhp2FaETsjTVcOg4M1hu', NULL, 'U3I4ca61lJUlHU2BWGLNxn8hiq9d3qejxeBHPGRxZEV4DmE3cg', '2020-07-19 13:32:37', '2020-07-19 13:32:37'),
(4, 'sac', 'sac', 'admin@admin.com', 'male', '2020-06-30', NULL, '$2y$10$2Kpr3pxzkPHHH6oahy9YceCsl.ctOeSMF8Jy93/P/hqia/pvitwqa', NULL, 'OnwQGuJkKPeQwFXOQvCUCxXYvt8w5NO1KjxibYDKm74dQWTjV2', '2020-07-19 14:03:49', '2020-07-19 14:04:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriber_fields`
--
ALTER TABLE `subscriber_fields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriber_fields_subscriber_id_foreign` (`subscriber_id`),
  ADD KEY `subscriber_fields_field_id_foreign` (`field_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_api_token_unique` (`api_token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fields`
--
ALTER TABLE `fields`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subscriber_fields`
--
ALTER TABLE `subscriber_fields`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subscriber_fields`
--
ALTER TABLE `subscriber_fields`
  ADD CONSTRAINT `subscriber_fields_field_id_foreign` FOREIGN KEY (`field_id`) REFERENCES `fields` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subscriber_fields_subscriber_id_foreign` FOREIGN KEY (`subscriber_id`) REFERENCES `subscribers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
