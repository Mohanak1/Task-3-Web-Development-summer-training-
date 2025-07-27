<?php
include 'db_config.php';

$id = $_GET['id'];
$conn->query("UPDATE poses SET status = 0 WHERE id = $id");
echo "Status updated.";
?>
