package com.ecommerce.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.demo.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
