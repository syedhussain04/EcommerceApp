package com.ecommerce.demo.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.hibernate.annotations.Cascade;

@Entity
public class Order_ {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private String orderDate;
	double orderTotal;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "order", cascade = CascadeType.MERGE)
	private List<OrderItem> orderItems;
    
	public Order_() {
		super();
	}

	public Order_(int orderId, String orderDate, double orderTotal, List<OrderItem> orderItems) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.orderTotal = orderTotal;
		this.orderItems = orderItems;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
    
	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	public double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(double orderTotal) {
		this.orderTotal = orderTotal;
	}
	
}
