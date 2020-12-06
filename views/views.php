<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizzaria</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../views/assets/css/styles.css">
    <link rel="stylesheet" href="../views/assets/css/topnav.css">
    <link rel="stylesheet" href="../views/assets/css/views.css">
    <script src="../views/assets/js/session.js"></script>
    <script src="../views/assets/js/geral.js"></script>
</head>

<body>
    <div id="app">
        <header class="header">
            <div class="container_nav">
                <?php include __DIR__ . '\menu\index.php'; ?>
            </div>

        </header>
        <main class="content">
            <?php
            if (isset($_GET['dir'])) include __DIR__ . DIRECTORY_SEPARATOR . "{$_GET['dir']}" . DIRECTORY_SEPARATOR . "{$_GET['file']}.html";
            ?>
        </main>
        <footer class="footer"></footer>
    </div>
</body>

</html>