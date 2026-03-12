package com.example.toyStore.service;

import com.example.toyStore.entity.Product;
import com.example.toyStore.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ProductService {
	
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
    
	public Product updateProduct(Long id, Product updatedProduct) {
	    Product existing = productRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Product not found"));

	    existing.setName(updatedProduct.getName());
	    existing.setDescription(updatedProduct.getDescription());
	    existing.setPrice(updatedProduct.getPrice());
	    existing.setQuantity(updatedProduct.getQuantity());

	    return productRepository.save(existing);
	}
	
	public void deleteProduct(Long id) {
	    productRepository.deleteById(id);
	}

}
