package com.pollapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.pollapp.entity.Vote;
import com.pollapp.service.VoteService;

@RestController
@RequestMapping("/api/votes")
public class VoteController {
	@Autowired
	private VoteService voteService;

	@PostMapping
	public Vote castVote(@RequestBody Vote vote) {
		return voteService.castVote(vote);
	}
}
