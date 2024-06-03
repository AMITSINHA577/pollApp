package com.pollapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pollapp.entity.Poll;

public interface PollRepository extends JpaRepository<Poll, Long> {
}