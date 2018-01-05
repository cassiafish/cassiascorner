<?php

$files = glob(dirname(__FILE__) . "/img/photos/*");

foreach($files as $file) {
    $file = pathinfo($file, PATHINFO_BASENAME);
    echo '<div class="gallery-image col-lg-4 col-md-4 col-sm-4 col-xs-6">';
    echo '<a class="swipebox" rel="gallery-lg" href="img/photos/' . $file . '">';
    echo '<img class="img-responsive" src="img/photos/'. $file . '>';
    echo '</a>';
    echo '</div>';
}
