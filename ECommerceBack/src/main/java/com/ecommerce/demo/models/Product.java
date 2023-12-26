package com.ecommerce.demo.models;

import java.util.List;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Product {
	
//La génération de la clé primaire se fera à partir d’une Identité propre au SGBD
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int productId;
private String productName;
private Double productPrice;
private String productDescrip;

@Lob
@Column(name = "picByte")
private byte[] image;
/*
@OneToMany(fetch= FetchType.LAZY , mappedBy ="product")
private List<OrderItem> orderItems;
*/

@ManyToOne
@JoinColumn( name="category_id" )
private Category category;

public Product() {
	super();
}

public Product(int productId, String productName, Double productPrice, String productDescrip, byte[] image,
		Category category) {
	super();
	this.productId = productId;
	this.productName = productName;
	this.productPrice = productPrice;
	this.productDescrip = productDescrip;
	this.image = image;
	this.category = category;
}

public int getProductId() {
	return productId;
}

public void setProductId(int productId) {
	this.productId = productId;
}

public String getProductName() {
	return productName;
}

public void setProductName(String productName) {
	this.productName = productName;
}

public Double getProductPrice() {
	return productPrice;
}

public void setProductPrice(Double productPrice) {
	this.productPrice = productPrice;
}

public Category getCategory() {
	return category;
}

public void setCategory(Category category) {
	this.category = category;
}

public byte[] getImage() {
	return image;
}

public void setImage(byte[] image) {
	this.image = image;
}

public String getProductDescrip() {
	return productDescrip;
}

public void setProductDescrip(String productDescrip) {
	this.productDescrip = productDescrip;
}

}
