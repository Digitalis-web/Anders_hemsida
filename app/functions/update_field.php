<?php
session_start();
if(isset($_SESSION['admin'])){

    include "functions.php";
    $con = connect();

    if(isset($_GET['name']) && (isset($_GET['new_value_sv']) || isset($_GET['new_value_dk']))){
        $name = $_GET['name'];

        if(isset($_GET['new_value_sv'])){
            $value = $_GET['new_value_sv'];
            update_field($name, $value, "sv");
        }

        if(isset($_GET['new_value_dk'])){
            $value = $_GET['new_value_dk'];
            update_field($name, $value, "dk");
        }
        //echo"done";
    }
    
    $randi = rand(0,1000);
    //echo "<script> history.go(-1); </script>";
    //header("Location: ../index?rand=$randi");
?>

    <script>
        var prev = document.referrer;
        var split = prev.split("?")[0];
        //prev = split[0];
        var rand = '<?php echo $randi; ?>';
        if(prev.indexOf("?") == -1){
            window.location.href = prev + "?r=" + rand;
        }
        else {
            window.location.href = prev + "&r=" + rand;
        }
        //window.location.href = prev + "?r=" + rand + "&" + split[1];
        //window.location.href = prev + "&r=
    </script>
<?php
}
else {
    header("Location: ../index");
}
?>
