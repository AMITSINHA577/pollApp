package com.pollapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pollapp.entity.Vote;
import com.pollapp.repository.VoteRepository;

@Service
public class VoteService {
	@Autowired
	private VoteRepository voteRepository;

	public Vote castVote(Vote vote) {
		return voteRepository.save(vote);
	}
}