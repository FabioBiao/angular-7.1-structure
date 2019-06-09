<?php 
//header('Content-type: application/json');
//header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$result = false; 
$variables = json_decode(file_get_contents('php://input'));

if( $variables ){
    $username = empty($variables->username) ? '' : htmlspecialchars($variables->username);
    $password = empty($variables->password) ? '' : htmlspecialchars($variables->password);
}

if( $username == 'admin' && $password == 'admin' ){
    $result = true ;
}

elseif (!empty($username) && !empty($password)) {
    $ldapconfig['host'] = '';  //host
    $ldapconfig['port'] = ''; // port
    $ldapconfig['basedn'] = '';  //ldap setting

    $ds = ldap_connect($ldapconfig['host'], $ldapconfig['port']);

    ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ds, LDAP_OPT_REFERRALS, 0);
    ldap_set_option($ds, LDAP_OPT_NETWORK_TIMEOUT, 10);

    $dn = "" . $username . "";

    if ( ldap_bind($ds, $dn, $password) ) {
        $_SESSION['log'] = true;
        $result = true;
    } else {
        $result = false;
    }
}

if( $result ){
    $user = array(
        'id' => '1',
        'username' => $username,
        'password' => 'password',
        'token' => '12321312',
        'logged' => true
    );
}
else{
    $user = false;
}

echo json_encode($user);
die();
?>