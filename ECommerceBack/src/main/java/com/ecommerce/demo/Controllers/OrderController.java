package com.ecommerce.demo.Controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.demo.dao.OrderItemRepository;
import com.ecommerce.demo.dao.OrderRepository;
import com.ecommerce.demo.dao.ProductRepository;
import com.ecommerce.demo.models.OrderItem;
import com.ecommerce.demo.models.Order_;
import com.ecommerce.demo.models.Product;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/order")
public class OrderController {
@Autowired
OrderRepository orderRepo;
@Autowired
OrderItemRepository orderItemRepo;

@PostMapping("/add-order")
public Order_ saveOrder(@RequestBody List<OrderItem> orderItems)
{	Double total = 0.0;
    int shippingFees = 7;
	//save order 
	Order_ order = new Order_();
	Date date = new Date();
	SimpleDateFormat dateFor = new SimpleDateFormat("dd/MM/yyyy");
	
	order.setOrderDate(dateFor.format(date));
    //order.setOrderItems(orderItems);
    orderRepo.save(order);
    
	//save each order item
    int i = 0;
	for (OrderItem oI : orderItems){
		oI.setProduct(orderItems.get(i).getProduct());
		//Compute Total
		total += orderItems.get(i).getProduct().getProductPrice() * orderItems.get(i).getQte();
		oI.setPrice(orderItems.get(i).getProduct().getProductPrice());
		oI.setQte(orderItems.get(i).getQte());
		oI.setOrder(order);	
		orderItemRepo.save(oI);
		i++;
	}
	total += shippingFees;
	order.setOrderTotal(total);
	return order;
}
}

/*
@PostMapping("/add-order")cw< c 
public void saveOrder(@RequestBody OrderForm orderform)
{
 	//build order item
	OrderItem orderItem = new OrderItem();
	double total = 0.0;
	for(OrderProduct p:orderform.getOrderedProducts())
	{
		Product product = productRepo.findById(p.getId()).get();
		orderItem.setPrice(product.getProductPrice());
		orderItem.setQte(p.getQte());
		orderItemRepo.save(orderItem);
		total += p.getQte() * product.getProductPrice();
	}
	//build order
	Order_ orderr = new Order_();
	orderr.setOrderDate("07/09/2022");
	orderr.setOrderTotal(total);
    orderRepo.save(orderr);
 
}
*/
