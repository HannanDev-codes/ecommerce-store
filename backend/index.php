<?php
header("Content-Type: application/json");
echo json_encode([
    "status" => "success",
    "message" => "Backend is running!",
    "api_endpoints" => [
        "/api/products.php",
        "/api/product.php?id=1",
        "/api/auth.php"
    ]
]);
?>