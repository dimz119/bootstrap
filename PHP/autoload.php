<?php
/*
PSR-0 : http://www.php-fig.org/psr/psr-0/
PSR-4 : http://www.php-fig.org/psr/psr-4/
*/
spl_autoload_register(function($class) {
    // PSR-0 folders
    $psr0 = array(
        'lib',
    );

    // PSR-4 namespace to dir mapping
    $psr4 = array(
        'Lib\\Experiment\\' => 'lib/experiment/src',
    );

    foreach ($psr0 as $dir) {
        $file = __DIR__.'/'.$dir.'/'.str_replace('\\', '/', $class).'.php';
        if (is_file($file)) {
            require_once($file);
            break;
        }
    }

    foreach ($psr4 as $prefix => $dir) {
        $len = strlen($prefix);
        if (0 === strncmp($prefix, $class, $len)) {
            $file = __DIR__.'/'.$dir.'/'.str_replace('\\', '/', substr($class, $len)).'.php';
            if (is_file($file)) {
                require_once($file);
                break;
            }
        }
    }
});
