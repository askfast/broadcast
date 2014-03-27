



<?php

		$tokken = $_POST['token'];
		//echo $tokken;

	$xmlresponse = file_get_contents("http://www.google.com/m8/feeds/contacts/default/full/?oauth_token=".$tokken."");	


		$xml=  new SimpleXMLElement($xmlresponse);
		$index=0;
		
		foreach($xml->entry as $c)
		{
			$str = $c->id;
			$idstring= (explode("/",$str));
			$sizeOfArray=sizeof($idstring);
			$id[$index]=$idstring[$sizeOfArray-1];
			$index++;
		}
		for ($x=0; $x<sizeof($id); $x++)
  		{
		  $my=file_get_contents("http://www.google.com/m8/feeds/contacts/default/full/".$id[$x]."?oauth_token=".$tokken."");
			$xml=  new SimpleXMLElement($my);
			$name = $xml->title;
			$xml->registerXPathNamespace('gd', 'http://schemas.google.com/g/2005');
			$result1 = $xml->xpath('//gd:phoneNumber');
			$result = $xml->xpath('//gd:email');
			foreach ($result as $title) 
			{
				$emailAddress=$title->attributes()->address;
			}

			
			foreach ($result1 as $key=>$value) 
			{
				 $phoneNumeber=$value;
			}
		
		if ($phoneNumeber == ''){$phoneNumeber = 0;}
		if ($emailAddress == ''){$emailAddress = 'NULL';}
		if ($name == ''){$name = 'NULL';}
		
		$strJson .= '{"name" : "'.$name[0].'","email" : "'.$emailAddress.'","phone" : "'.$phoneNumeber.'"},';
		$name[0]="";$emailAddress="";$phoneNumeber="";
		
  } 
   $strJson1=rtrim($strJson, ",");
  $newStr = '['.$strJson1.']';
  echo $newStr;
 
  ?>
		
		