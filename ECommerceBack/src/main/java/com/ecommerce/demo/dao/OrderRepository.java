package com.ecommerce.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.demo.models.Order_;

@Repository
public interface OrderRepository extends JpaRepository<Order_, Integer>{

}
