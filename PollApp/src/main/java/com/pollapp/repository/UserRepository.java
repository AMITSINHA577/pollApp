package com.pollapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pollapp.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
}