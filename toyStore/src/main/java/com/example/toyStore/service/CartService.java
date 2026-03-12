
package com.example.toyStore.service;

import com.example.toyStore.entity.CartItem;
import com.example.toyStore.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<CartItem> getAllItems() {
        return cartRepository.findAll();
    }

    public CartItem addItem(CartItem item) {
        return cartRepository.save(item);
    }

    public CartItem updateItem(Long id, CartItem item) {
        item.setId(id);
        return cartRepository.save(item);
    }

    public void removeItem(Long id) {
        cartRepository.deleteById(id);
    }
}

