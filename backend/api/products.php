<?php
// api/products.php
require '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM products ORDER BY id DESC");
        $products = $stmt->fetchAll();
        echo json_encode($products);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
} 
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("INSERT INTO products (name, price, image, description, category, stock) 
                          VALUES (?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([
        $data['name'],
        $data['price'],
        $data['image'] ?? '',
        $data['description'] ?? '',
        $data['category'] ?? 'General',
        $data['stock'] ?? 10
    ]);

    echo json_encode(["success" => true, "message" => "Product added successfully", "id" => $pdo->lastInsertId()]);
}
?>