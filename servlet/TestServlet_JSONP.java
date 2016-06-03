package sample;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/plain");
		
		String callback = req.getParameter("callback");
		System.out.println(callback);
		
		Categories categories = new Categories();
        List<Category> list = new ArrayList<Category>();
        categories.setCategories(list);

        Category category1 = new Category();
        category1.setId("0013738748415562fee26e070fa4664ad926c8e30146c67000");
        category1.setName("Programming");
        category1.setTag("tech");
        category1.setDescription("");
        category1.setDisplayOrder(0);
        category1.setCreatedAt("1373874841556");
        category1.setUpdatedAt("1429763779958");
        category1.setVersion(5);

        Category category2 = new Category();
        category2.setId("0013738748248885ddf38d8cd1b4803aa74bcda32f853fd000");
        category2.setName("Reading");
        category2.setTag("other");
        category2.setDescription("");
        category2.setDisplayOrder(1);
        category2.setCreatedAt("1373874824888");
        category2.setUpdatedAt("1429763779974");
        category2.setVersion(5);

        list.add(category1);
        list.add(category2);

        Gson gson = new Gson();
        String result = gson.toJson(categories);
        result = callback + "([" + result + "])";
		out.println(result);
		System.out.println(result);
		out.flush();
		out.close();
	}
}
