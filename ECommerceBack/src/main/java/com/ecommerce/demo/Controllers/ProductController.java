package com.ecommerce.demo.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.demo.dao.ProductRepository;
import com.ecommerce.demo.models.Product;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductRepository productRepo;

    @GetMapping("/hello")
    public String welcome() {
        return "hello world";
    }

    @GetMapping("/get-products")
    public List<Product> getProducts() {
        return productRepo.findAll();
    }

    @GetMapping("/get-product-id/{id}")
    public Product getProductById(@PathVariable int id) {
        return productRepo.findById(id).orElse(null);
    }

    @GetMapping("get-product-name/{name}")
    public Product getProductByName(@PathVariable String name) {
        return productRepo.findByProductNameIs(name);
    }

    @GetMapping("get-product-cat/{cat}")
    public List<Product> getProductsByCategory(@PathVariable String cat) {
        List<Product> products = productRepo.findAll();
        return products.stream()
                .filter(p -> p.getCategory() != null && p.getCategory().getCategoryName().equals(cat))
                .collect(Collectors.toList());
    }

    @GetMapping("get-random-products")
    public List<Product> getRandomProducts() {
        List<Product> products = productRepo.findAll();
        List<Product> randomProducts = new ArrayList<>();

        // Check if the products list is not empty
        if (!products.isEmpty()) {
            Random rand = new Random();
            for (int i = 0; i < 4; i++) {
                int randomIndex = rand.nextInt(products.size());
                Product p = products.get(randomIndex);
                randomProducts.add(p);
            }
        }

        return randomProducts;
    }
}
