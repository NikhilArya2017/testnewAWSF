const MyId = document.getElementById("eid");
const Myename = document.getElementById("ename");
const Myedate = document.getElementById("edate");
const Mybtn = document.getElementById("mybtn");

Mybtn.addEventListener('click', () =>{
    event.preventDefault();
console.log(MyId.value);
console.log(Myename.value);
console.log(Myedate.value);

fetch("https://9uwzleg6r7.execute-api.ap-south-1.amazonaws.com/development/request",
{
	method: "POST",
	body: 
	{
  "eventid": MyId,
  "eventname": Myename,
  "eventdate": Myedate
}
})

})
