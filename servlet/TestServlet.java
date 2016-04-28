package sample;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class TestServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}

	private void process(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		String name = req.getParameter("name");
		String check = req.getParameter("check");
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("application/json");
		
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("name", name);
		map.put("check", check);
		String result = new Gson().toJson(map);
		out.println(result);
		System.out.println(result);
		out.flush();
		out.close();
	}
}
