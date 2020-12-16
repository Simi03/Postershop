package demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController	
public class Controller {
	@Autowired
	private  ProductService productService;
	
	@GetMapping("/Products")	
	public ProductInfo getProductInfo(){
		return productService.getProducts();
	}

}
