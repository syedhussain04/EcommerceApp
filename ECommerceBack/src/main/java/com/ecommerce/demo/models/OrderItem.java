package com.ecommerce.demo.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;

@Entity
public class OrderItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long orderItemId;
	
    private double price;
    private int qte;
	
	@OneToOne
	Product product;
	
	@ManyToOne
	Order_ order;

	public OrderItem() {
		super();
	}
	public OrderItem(long orderItemId, double price, int qte, Product product, Order_ order) {
		super();
		this.orderItemId = orderItemId;
		this.price = price;
		this.qte = qte;
		this.product = product;
		this.order = order;
	}
	
	public String toString() {
		return "qte"+getQte() + "price"+getPrice()+"order"+getOrder();
	}

	public long getOrderItemId() {
		return orderItemId;
	}

	public void setOrderItemId(long orderItemId) {
		this.orderItemId = orderItemId;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQte() {
		return qte;
	}

	public void setQte(int qte) {
		this.qte = qte;
	}

	public Order_ getOrder() {
		return order;
	}

	public void setOrder(Order_ order) {
		this.order = order;
	}
	
}
