-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2022 at 07:45 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `binotify-rest`
--

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE `song` (
  `song_id` int(11) NOT NULL,
  `judul` char(64) NOT NULL,
  `penyanyi_id` int(11) NOT NULL,
  `audio_path` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `song`
--

INSERT INTO `song` (`song_id`, `judul`, `penyanyi_id`, `audio_path`) VALUES
(5, 'artis1lagu1', 1, 'http://localhost:3000/audio/SONG-635b5c95ddd2c9.34274480.mp3'),
(6, 'artis1lagu2', 1, 'http://localhost:3000/audio/SONG-6358cea4c9ce03.31425930.mp3'),
(7, 'artis2lagu1', 2, 'http://localhost:3000/audio/SONG-635b5b820cd953.03189072.mp3'),
(8, 'artis2lagu2', 2, 'http://localhost:3000/audio/SONG-6360e5978c20c7.79774882.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` char(255) NOT NULL,
  `password` char(255) NOT NULL,
  `username` char(255) NOT NULL,
  `name` char(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES
(1, 'artis1@example.com', 'e21eef16ed975afc7bfc56919a6d90e5', 'artis1', 'aku artis', 0),
(2, 'artis2@example.com', '58c2ae67b5b90eccf0e42a2b584f2352', 'artis2', 'aku artis yang kedua', 0),
(3, 'artis3@example.com', '1888cdc3c716dafdfc8385a5448c0fe7', 'artis3', 'aku artis yang ketiga', 0),
(4, 'artis4@example.com', '40f29294f2ce3f5d31c952d42d855f3a', 'artis4', 'aku artis yang keempat', 0),
(5, 'artis5@example.com', '526162a4930fddc48dd5d17d9089134c', 'artis5', 'aku artis yang kelima', 0),
(6, 'artis6@example.com', 'd2ee3175a9773370a1be3aa9e4285a9f', 'artis6', 'aku artis yang keenam', 0),
(7, 'admin@binotify.com', 'e21eef16ed975afc7bfc56919a6d90e5', 'admin', 'admin binotify', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`song_id`),
  ADD KEY `penyanyi_id` (`penyanyi_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `song`
--
ALTER TABLE `song`
  MODIFY `song_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `song`
--
ALTER TABLE `song`
  ADD CONSTRAINT `song_ibfk_1` FOREIGN KEY (`penyanyi_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
