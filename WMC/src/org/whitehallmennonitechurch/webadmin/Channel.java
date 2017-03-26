package org.whitehallmennonitechurch.webadmin;

import java.util.ArrayList;

import com.thoughtworks.xstream.annotations.XStreamImplicit;

public class Channel {
    String title, link, description, language, webMaster, pubDate;
    @XStreamImplicit(itemFieldName="item")
    ArrayList<PodcastEpisode> items;
	public Channel(String title, String link, String description,
			String language, String webMaster, String pubDate) {
		super();
		this.title = title;
		this.link = link;
		this.description = description;
		this.language = language;
		this.webMaster = webMaster;
		this.pubDate = pubDate;
		this.items = new ArrayList<PodcastEpisode>();
	}
	
    public void addItem (PodcastEpisode item) {
    	this.items.add(item);
    }
    public void removeItem (PodcastEpisode item) {
    	this.items.remove(item);
    }
}
