package org.whitehallmennonitechurch.webadmin;

import java.io.FileInputStream;
import java.io.OutputStream;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class RssConverter {
    private XStream xs;
    public RssConverter(XStream xs) {
        this.xs = xs;
        xs.alias("rss", Rss.class);
        xs.alias("item", PodcastEpisode.class);
        xs.addImplicitCollection(Channel.class, "items");
        xs.useAttributeFor("version", Version.class);
        xs.registerConverter(new VersionConverter());
    }
    public RssConverter() {
        this(new XStream(new DomDriver()));
    }
    public Rss fromXml(FileInputStream fileInputStream) {
        return (Rss) xs.fromXML(fileInputStream);
    }
    public void toXml(Rss rss, OutputStream stream) {
        xs.toXML(rss, stream);
    }
}