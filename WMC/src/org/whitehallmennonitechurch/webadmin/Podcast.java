package org.whitehallmennonitechurch.webadmin;

import java.util.ArrayList;

public class Podcast {
	
	ArrayList<PodcastEpisode> episodes;

	public Podcast(ArrayList<PodcastEpisode> podcast) {
		super();
		this.episodes = podcast;
	} 
	
	public void addEpisode(PodcastEpisode episode) {
		this.episodes.add(episode);
	}

	public void removeEpisode(PodcastEpisode episode) {
		this.episodes.remove(episode);
	}

}
