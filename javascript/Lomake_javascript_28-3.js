function Tarkasta() {
var nimi = document.forms["lomake"]["nimi"];
var email = document.forms["lomake"]["email"];
var puhelin = document.forms["lomake"]["puhelin"];
var osoite = document.forms["lomake"]["osoite"];

if (nimi.value =="")
{
	window.alert("Ole hyvä, ja anna etunimesi.");
	nimi.focus();
	return false;
}
else if (nimi.length <= 2) {
    window.alert("Minimissään 2 kirjainta");
    return false;
    }

if (email.value == "")
{
	window.alert("Ole hyvä ja anna sähköpostiosoitteesi.");
	email.focus();
	return false;
}

else if (email.value.indexOf("@", 0) < 0)
{
	window.alert("Ole hyvä ja anna TOIMIVA sähköpostiosoitteesi.");
	email.focus();
	return false;
}

else if (email.value.indexOf(".", 0) < 0)
{
	window.alert("Sähköpostiosoitteessasi pitää olla vähintään 1 piste");
	email.focus();
	return false;
}
if (puhelin.value == "")
{
	window.alert("Ole hyvä ja anna puhelinnumerosi.");
	puhelin.focus();
	return false;
}
if (osoite.value == "")
{
	window.alert("Ole hyvä ja anna osoitteesi.");
	osoite.focus();
	return false;
}


}
