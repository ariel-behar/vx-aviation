<?php 
    
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $program = $_POST['program'];
        $time = $_POST['time'];


        $to = 'jackson5944@aol.com';
        $subject = 'Vx Aviation FORM SUBMISSION';
        $message = "Name: ".$name."\n\n"."Phone Number: ".$phone."\n\n"."Interested in: ".$program. "\n\n"."Available for a call between: ".$time;
        $headers = "From: ".$name;

        mail($to, $subject, $message, $headers);
    }

    if(isset($_POST['name'], $_POST['email'], $_POST['program'], $_POST['time'])) {
        print_r($_POST);
    }

?>