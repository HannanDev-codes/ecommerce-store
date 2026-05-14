<?php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: ../login.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel - E-commerce Store</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-8">Admin Panel - Add / Manage Products</h1>
    <a href="../" class="text-blue-600">← Back to Frontend</a>
  </div>
</body>
</html>