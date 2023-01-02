<?php
//$captcha;
//if($_SERVER["SERVER_NAME"] == "192.168.1.16")
//{
//	$path = "http://192.168.1.16/design/aes/".$_POST['return_file'];
//}
//else if($_SERVER["SERVER_NAME"] == "design.codeniques.com")
//{
//	$path = "http://design.codeniques.com/aes/".$_POST['return_file'];
//}
//else
//{
//	$path = "http://aeschwartzspeaks.com/".$_POST['return_file'];
//}

//if(isset($_POST['g-recaptcha-response'])){
//	$captcha=$_POST['g-recaptcha-response'];
// }
//  if(!$captcha){
//	echo '<h2><b>Captcha</b> Validation Required!</h2>';
//	exit;
 // }

 // $secretKey = "6LedQbAaAAAAAEpQksRbZdavvWnFE4uv7pYiGIhh";
 // $ip = $_SERVER['REMOTE_ADDR'];
 // $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
 // $response = file_get_contents($url);
 // $responseKeys = json_decode($response,true);
 

if($_POST['Email']!="")
{
	$subject = $_POST['subject'];
	$message = '<h2 style="margin-top:0;">'.$_POST['subject'].'</h2>';
	foreach($_POST as $key=>$value)
	{
		if(isset($$key)) continue;
		$invalid_fields = array("emailto","return_file","sub");
		if(!in_array($key,$invalid_fields))
		{
			$message.="$key:- <b>".$value."</b><br><br>";
		}
	}
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: '. $_POST['Name'] .' <'. $_POST['Email'] .'>' . "\r\n";
	$headers .= 'Reply-To: '. $_POST['Name'] .' <'. $_POST['Email'] .'>' . "\r\n"."X-Mailer: PHP/" . phpversion();			;
	mail($_POST['emailto'], $subject, $message, $headers);
	
	$message2 = "Hi ". $_POST['Name'] .",<br>
	A delivery receipt informs you that your e-mail for ". $_POST['subject'] ." was delivered to the recipient's mailbox, but not that the recipient has seen it or read it. The receipt informs you that your message has been opened.<br><br>
	The folllowing message has been delivered:<br><br>"
	.$message;
	$headers2  = 'MIME-Version: 1.0' . "\r\n";
	$headers2 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers2 .= 'From: '. $_POST['emailto'] . "\r\n";
	$headers2 .= 'Reply-To: '. $_POST['emailto'] . "\r\n";
	mail($_POST['Email'], $subject, $message2, $headers2);
?>
	<script type="text/javascript">
		//window.location="<?php //echo $_SERVER['HTTP_REFERER'];?>?msg=success";
		window.location="<?php echo $path; ?>?msg=success";
	</script>
<?php
}
else
{ ?>
	<script type="text/javascript">
		//window.location="<?php //echo $_SERVER['HTTP_REFERER'];?>?msg=error"
		window.location="<?php echo $path; ?>?msg=error"
	</script>
<?php }?>