package com.pollapp.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "polls")
public class Poll {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String question;

	@ElementCollection
	@Column(nullable = false)
	private List<String> options;

	@Column(nullable = false)
	private String createdBy;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<String> getOptions() {
		return options;
	}

	public void setOptions(List<String> options) {
		this.options = options;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Poll(Long id, String question, List<String> options, String createdBy) {
		super();
		this.id = id;
		this.question = question;
		this.options = options;
		this.createdBy = createdBy;
	}

	public Poll() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Poll [id=" + id + ", question=" + question + ", options=" + options + ", createdBy=" + createdBy + "]";
	}

}