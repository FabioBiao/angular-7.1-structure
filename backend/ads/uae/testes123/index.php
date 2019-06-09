<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!--
    <script src="main.js"></script> -->
</head>
<body>
    <div id="app">
        <form name="formAds" action="" method="post" id="app"  @submit="checkForm">
            <div class="form-group">
                <label for="exampleInputPassword1">msisdn</label>
                <input type="text" v-model="msisdn" class="form-control" placeholder="msisdn">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <div> Olá </div>
            <?php echo 'ola'; ?>
            <div> twig funcionar </div>
            <div> {{message}} </div>

            <p>
                <input
                type="submit"
                value="Submit"
                >
            </p>
        </form>
    </div>
</body>
<footer>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/ads/uae/testes123/adsapptive.js"></script>
</footer>
</html>

