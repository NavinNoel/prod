package org.whitehallmennonitechurch.website;

import java.io.IOException;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class controller
 */
@WebServlet("/controller")
public class controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public String gallery;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String forward="home.jsp";
		// Get a map of the request parameters
//		@SuppressWarnings("unchecked")
		Map<String, String[]> parameters = request.getParameterMap();
		if (parameters.containsKey("link")){
			forward = parameters.get("link")[0]+".jsp";
		}
		else if (parameters.containsKey("about")){
			forward = "about.jsp?about="+parameters.get("about")[0];
		}
		else if (parameters.containsKey("calendar")){
			forward = "calendar.jsp?calendar="+parameters.get("calendar")[0];
		}
		else if (parameters.containsKey("gallery")){
			forward = "gallery.jsp?gallery="+parameters.get("gallery")[0];
		}
		RequestDispatcher view = request.getRequestDispatcher(forward);
		view.forward(request, response);
	}
} 
