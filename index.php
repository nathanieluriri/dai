<?php


$uri = $_SERVER['REQUEST_URI'];

if ($uri === '/'){
    require("views/index.views.php");
}

else if ($uri === '/one'){
    require("views/one.views.php");
}
else if ($uri === '/two'){
    require("views/two.views.php");
}
else if ($uri === '/easy'){
    require("views/easy.views.php");
}
else if ($uri === '/hard'){
    require("views/hard.views.php");
}