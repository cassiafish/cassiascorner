<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="Cassia Berger">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../favicon.ico">
    <title>Cassia's Corner</title>

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lobster+Two' rel='stylesheet' type='text/css'>

    <!-- Bootstrap core CSS -->
    <!-- Custom styles for this template -->
    <link href="../css/app.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../ultimate-flat-social-icons/ultm-css/ultm.css">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="../img/favicon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../img/favicon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../img/favicon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../img/favicon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../img/favicon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../img/favicon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../img/favicon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../img/favicon/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="../img/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="../img/favicon/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="../img/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="../img/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="../img/favicon/manifest.json">
    <link rel="shortcut icon" href="../favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="img/favicon/mstile-144x144.png">
    <meta name="msapplication-config" content="img/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>

<body>

<!-- Background -->
<div id="bg"></div>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class=""><a href="/">Home</a></li>
                <li class="design-nav"><a href="#design">Design</a></li>
                <li class=""><a href="photos">Photography</a></li>
                <li class="about-nav"><a href="#about">About</a></li>
                <li class="contact-nav"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- Top container -->
<div class="top-background">
    <div class="top-container info-container">
        <div class="row">

            <div class="col-xs-2">
                <div class="big-balloon"></div>
                <div class="med-balloon"></div>
                <div class="sm-balloon"></div>
            </div>

            <div class="col-xs-10">
                <div class="header">
                    <h1>Cassia's Corner</h1>
                    <h2>Cassia Berger's Design Portfolio</h2>
                </div>

                <div class="cherry-blossoms pull-right"></div>
            </div>

        </div>
    </div>
</div>

<div class="container photos-container">
    <div class="row responsive-image-container">

        <?php
        $files = glob(dirname(__FILE__) . "/../img/photos/*");

        foreach($files as $file) {
            $file = pathinfo($file, PATHINFO_BASENAME);

            echo '<div class="image-container-sm hidden-sm hidden-md hidden-lg"><a class="gallery-sm" href="https://cassiascorner.imagizer.com/img/photos/'.$file.'"><img class="imagizer" data-src="https://cassiascorner.imagizer.com/img/photos/' . $file
                . '?crop=fit&height=83&width=125"></a></div>';

            echo '<div class="image-container-md hidden-xs hidden-md hidden-lg"><a class="gallery-md" href="https://cassiascorner.imagizer.com/img/photos/'.$file.'"><img class="imagizer" data-src="https://cassiascorner.imagizer.com/img/photos/' . $file
                . '?crop=fit&height=150&width=200"></a></div>';

            echo '<div class="image-container-lg hidden-xs hidden-sm"><a class="gallery-lg" href="https://cassiascorner.imagizer.com/img/photos/'.$file.'"><img class="imagizer" data-src="https://cassiascorner.imagizer.com/img/photos/' . $file
                . '?crop=fit&height=200&width=300"></a></div>';
        }

        echo '<div class="image-container-lg hidden-xs hidden-sm"><div class="img-placeholder"></div></div>';
        echo '<div class="image-container-lg hidden-xs hidden-sm"><div class="img-placeholder"></div></div>';
        ?>
    </div>
</div>

<!-- javascript -->
<script src="../js/app.min.js"></script>

<script>
    (function() {
        imagizerClient.config.imagizerHost = "cassiascorner.imagizer.com";
        imagizerClient.config.useHttps = true;
        imagizerClient.config.format = "auto";

        // Enable Auto device pixel ratio setting.
        // Device pixel ratio will now be detected
        // and automatically applied to image urls
        // http://demo.imagizercdn.com/doc/#dpr-device-pixel-ratio
        imagizerClient.config.autoDpr = true;

        // Compress our images by setting the global quality
        // http://demo.imagizercdn.com/doc/#quality
        imagizerClient.config.quality = 75;

        // Load images from specified selector
        imagizerClient.loadImages(".imagizer");
    })();

    $( document ).ready(function() {
//        $('.gallery-sm').colorbox({rel:'gallery-sm', retinaImage: true, retinaUrl: true, retinaSuffix: "?width=300&height=200"});
//        $('.gallery-md').colorbox({rel:'gallery-md', retinaImage: true, retinaUrl: true, retinaSuffix: "?width=300&height=200"});
        $('.gallery-lg').colorbox({rel:'gallery-lg', retinaImage: true, retinaUrl: true, retinaSuffix: "?width=300&height=200"});
    });
</script>

</body>
</html>