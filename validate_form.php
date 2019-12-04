
<?php

$form_is_submitted = false;
$errors_detected = false;

$data = array();
$errors = array();

// validate form
if(isset($_POST['submit'])) {

	$form_is_submitted = true;
	//////// validate username /////////
	if (isset($_POST['name']) && trim(strlen($_POST['name'])) < 20 && !empty($_POST['name'])) {
		$form_is_submitted = true;
		$name = htmlentities($_POST['name']);
		$data['name'] = $name;
	} else {
		$form_is_submitted = false;
		$errors_detected = true;
		$errors['name'] = 'Name is not valid';
	}
	//////// validate email address /////////
	if (isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$form_is_submitted = true;
		$email = htmlentities($_POST['email']);
		# Should be a valid email address.
		$data['email'] = $email;
	}
	else {
		$form_is_submitted = false;
		$errors_detected = true;
		$errors['email'] = 'Email is not valid';
	}
}

$reply_msg = "<p>Thank you! Your message has been sent, I will reply asap.</p>";
if ($form_is_submitted === true && $errors_detected === false) {
	echo '<form action="' . $self .'" method="post">';
				// Username ////////////////////////////////////////////
				if (isset($data['name'])) {
					$name = htmlentities($data['name']);
				} else {
					$username = '';
				}
				echo '<input value="' . $name . '" id="uname" name="name" type="text" placeholder="name"/>';
				// Password ////////////////////////////////////////////
				if (isset($data['email'])) {
					$email = htmlentities($data['email']);
				} else {
					$email = '';
				}
				echo '<input value="' . $email . '" id="email" name="email" type="text" placeholder="email"/>';
				////////////////////////////////////////////////////////
				//echo '<input type="text" name="password" id="pass" />';
				echo '<input type="submit" name="submit" value="send" />';
				echo $reply_msg;
	echo "</form>";


} else {

	$self = htmlentities($_SERVER['PHP_SELF']);

		echo '<form action="' . $self .'" method="post">';
					// Username ////////////////////////////////////////////
					if (isset($data['name'])) {
						$name = htmlentities($data['name']);
					} else {
						$username = '';
					}
					echo '<input value="' . $name . '" id="uname" name="name" type="text" placeholder="name"/>';
					// Email ////////////////////////////////////////////
					if (isset($data['email'])) {
						$email = htmlentities($data['email']);
					} else {
						$email = '';
					}
					echo '<input value="' . $email . '" id="email" name="email" type="text" placeholder="email"/>';
					echo '<input type="submit" name="submit" value="send" />';
					foreach($errors as $message) {
						echo "<p>$message</p>";
					}
						echo "Please correct the mistakes and submit the form." .PHP_EOL;
		echo "</form>";
}
?>

<!--input value="<?//php echo $uname; ?>" id="user" name="uname" type="text" /-->
