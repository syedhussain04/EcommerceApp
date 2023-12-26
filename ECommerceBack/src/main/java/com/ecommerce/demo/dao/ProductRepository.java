package com.ecommerce.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.demo.models.Category;
import com.ecommerce.demo.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	Product findByProductNameIs(String name);
	List<Product> findByCategoryEquals(Category cat);
}
