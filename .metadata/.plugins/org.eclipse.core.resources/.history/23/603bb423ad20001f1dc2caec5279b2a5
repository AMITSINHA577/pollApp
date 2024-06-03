package com.pollapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pollapp.entity.User;
import com.pollapp.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public User register(User user) {
		return userRepository.save(user);
	}

	public Optional<User> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public boolean login(String username, String password) {
		Optional<User> user = userRepository.findByUsername(username);
		return user.isPresent() && user.get().getPassword().equals(password);
	}
}
