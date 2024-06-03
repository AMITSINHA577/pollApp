package com.pollapp.controller;

import com.pollapp.entity.Poll;
import com.pollapp.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/polls")
public class PollController {
	@Autowired
	private PollService pollService;

	@PostMapping
	public Poll createPoll(@RequestBody Poll poll) {
		return pollService.createPoll(poll);
	}

	@GetMapping
	public List<Poll> getAllPolls() {
		return pollService.getAllPolls();
	}

	@GetMapping("/{id}")
	public Poll getPollById(@PathVariable Long id) {
		return pollService.getPollById(id);
	}

	@GetMapping("/{id}/results")
	public Map<String, Long> getPollResults(@PathVariable Long id) {
		return pollService.getPollResults(id);
	}
}
