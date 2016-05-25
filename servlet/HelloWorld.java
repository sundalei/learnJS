import java.util.ArrayList;
import java.util.List;

public class HelloWorld {
    public static void main(String[] args) {
        Categories categories = new Categories();
        List<Category> list = new ArrayList<Category>();
        categories.setCategories(list);

        Category category1 = new Category();
        category1.setId("0013738748415562fee26e070fa4664ad926c8e30146c67000");
        category1.setName("编程");
        category1.setTag("tech");
        category1.setDescription("");
        category1.setDisplayOrder(0);
        category1.setCreatedAt("1373874841556");
        category1.setUpdatedAt("1429763779958");
        category1.setVersion(5);
    }
}