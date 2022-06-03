let xhttp = new XMLHttpRequest(); // json도 데이터를 읽어오려면 XML을 사용한다.
xhttp.onreadystatechange = function () {
   // 파일을 읽어들이는 것을 성공했을 때
   if(xhttp.readyState == 4 && xhttp.status == 200){
      jsonfunc(this.responseText); //this = xhttp
//      jsonfunc(xhttp.responseText); // 둘다 가능
   }
}
xhttp.open("GET","test.json", true);
xhttp.send();

function jsonfunc( jsonText ) {
	   let Name = new Array();
	   let Score = new Array();
	   
	   
	   let json = JSON.parse(jsonText); // json 파일로 바꾸기
	   
	   for(i=0; i<json.length; i++){ // 값 전체 가져오는법
	      Name[i] = json[i].name;
	      Score[i] = json[i].score;
	      
	   }
	   
	   let table = document.getElementById('ranking');

	   for(i=0; i<Name.length; i++){
	      let tr = document.createElement("tr");
	      
	      let td1 = document.createElement("td");           
	      td1.appendChild(document.createTextNode(Name[i] + ""));
	      
	      let td2 = document.createElement("td");          
	      td2.appendChild(document.createTextNode(Score[i] + ""));
	      
	      
	      
	      tr.appendChild(td1);
	      tr.appendChild(td2);
	      
	      
	      table.appendChild(tr);
	   }
	}