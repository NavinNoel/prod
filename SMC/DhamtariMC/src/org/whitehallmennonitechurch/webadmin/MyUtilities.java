package org.whitehallmennonitechurch.webadmin;

import java.io.*;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class MyUtilities {

	public static boolean saveStringtoFile(String fileName, String saveString) {
		Boolean saved = false;
		BufferedWriter bw = null;
		try {
			bw = new BufferedWriter(new FileWriter(fileName));
			try {
				bw.write(saveString);
				saved = true;
			}
			finally {
				bw.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return saved;
	}

	public static String getStringFromFile(String fileName) {
		BufferedReader br = null;
		StringBuilder sb = new StringBuilder();
		
		try {
			br = new BufferedReader(new FileReader(fileName));
			String s;
			try {
				while ((s = br.readLine()) != null) {
					sb.append(s);
					sb.append("\n");
				}
			}
			finally {
				br.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return sb.toString();
		
	}

	public static String convertToXML(Rss rss) {
		XStream xstream = new XStream(new DomDriver());
		xstream.setMode(XStream.ID_REFERENCES);
		xstream.alias("item", PodcastEpisode.class);
		xstream.alias("channel", Channel.class);
		xstream.alias("rss", Rss.class);
		return xstream.toXML(rss);
	}

	public static Rss convertFromXML(String fromXML) {
		Rss rss = null;
		XStream xstream = new XStream(new DomDriver());
		xstream.setMode(XStream.ID_REFERENCES);
		xstream.alias("item", PodcastEpisode.class);
		xstream.alias("channel", Channel.class);
		xstream.alias("rss", Rss.class);
		Object obj = xstream.fromXML(fromXML);
		if (obj instanceof Podcast) {
			rss = (Rss) obj;
		}
		return rss;
	}

	public static boolean saveRssToXMLFile(String fileName,
			Rss rss) {
		return saveStringtoFile(fileName, convertToXML(rss));
	}

	public static Rss getRssFromXMLFile(String fileName) {
		return convertFromXML(getStringFromFile(fileName));
	}

}
