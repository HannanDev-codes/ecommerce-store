<?php
// api/product.php
require '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $product = $stmt->fetch();
        
        if ($product) {
            echo json_encode($product);
        } else {
            echo json_encode(["success" => false, "message" => "Product not found"]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
}
?>