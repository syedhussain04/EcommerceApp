package com.ecommerce.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.demo.dao.CategoryRepository;
import com.ecommerce.demo.models.Category;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/category")
public class CategoryConroller {
	@Autowired 
	CategoryRepository categoryRepo;

	@GetMapping("/get-categories")
	public List<Category> getCategories()
	{
		return categoryRepo.findAll();
	}
	
}
