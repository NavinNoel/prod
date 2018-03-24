package org.whitehallmennonitechurch.webadmin;

import java.util.Date;

public class PodcastEpisode {
	Date pubDate;
	Date created;
	String title;
	String description;
	String comments;
	String image;
	String author;
	String creator;
	String link;
	String keyWords;
	String enclosureType;
	int enclosureLength;
	String enclosureURL;
	long duration;
	
	public PodcastEpisode(String title, String description, String image,
			String author, String keyWords, String enclosureURL) {
		super();
		this.title = title;
		this.description = description;
		this.image = image;
		this.author = author;
		this.keyWords = keyWords;
		this.enclosureURL = enclosureURL;
	}
	
}
