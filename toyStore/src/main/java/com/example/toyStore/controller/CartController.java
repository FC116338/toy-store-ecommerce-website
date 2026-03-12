package com.example.toyStore.controller;

import com.example.toyStore.entity.CartItem;
import com.example.toyStore.service.CartService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartService.getAllItems();
    }

    @PostMapping
    public CartItem addItem(@RequestBody CartItem item) {
        return cartService.addItem(item);
    }

    @PutMapping("/{id}")
    public CartItem updateItem(@PathVariable Long id,
                               @RequestBody CartItem item) {
        return cartService.updateItem(id, item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        cartService.removeItem(id);
    }
}
