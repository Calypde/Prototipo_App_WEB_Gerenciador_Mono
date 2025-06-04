<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" type="text/css" href="file:///C:/app_web/css/login.css">

</head>
<body>
    <img src="file:///C:/app_web/assets/logo-responsivo.png" alt="Logo">
    <h2 class="text2"> Bem-Vindo ao <br> Gerenciador de Monografia</h2>
    <div>
        <h1 class="text"> Login</h1>
        <form method="POST" action="http://localhost/php/tryLogin.php" >

            <input type="text" placeholder="Email" nome="email" required>
            <br><br>
            <input type="password" placeholder="Senha" nome="senha" required>
            <br><br>
            <input type="submit" class="btn-submit" nome="submit" value="Acessar"></input>

        </form>
    </div>
</body>
</html>