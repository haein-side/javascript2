<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="../js/jsTest01.js"></script>
</head>
<body>
	<h1>주의사항</h1>
	<h2>1. jQuery를 사용하지 말 것!</h2>

	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 1</legend>
		<h3>input 태그에 값을 입력하고 버튼을 클릭하였을 때, 값이 숫자인지 아닌지 출력해 주세요.</h3>
		<h5>(값이 숫자라면 : "숫자입니다." 숫자가 아니면 "숫자가 아닙니다." 를 alert으로 출력)</h5>
		<input type="text" id="q01_num"/> <button onclick="answer01();">판별</button>
		


	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 2</legend>
		<h3>input 태그에 이름을 입력하고 버튼을 클릭하였을 때, 해당 이름이 존재하는지 여부를 출력해 주세요.</h3>
		<h5>(이름이 있으면 : "이름이 있습니다." 없으면 "이름이 없습니다." 를 alert으로 출력)</h5>
		<input type="text" /> <button onclick="answer02();">판별</button><br/>
		<pre id="nameList">홍길동 이순신 김선달 유재석 강호동</pre>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 3</legend>
		<h3>라디오버튼을 클릭하면 원하는 사이트를 팝업창으로 연결해 주세요.</h3>
		<h5>(새창, 새탭 등도 허용)</h5>
		<input type="radio" name="rdo" value="naver" onclick="answer03();"/>네이버<br/>
		<input type="radio" name="rdo" value="google" onclick="answer03();"/>구글<br/>
		<input type="radio" name="rdo" value="w3schools" onclick="answer03();"/>w3schools<br/>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 4</legend>
		<h3>전체선택버튼을 클릭하면 체크항목을 모두 체크하거나 모두 해제해 주세요.</h3>
		<input type="checkbox" name="all" onclick="answer04(this.checked);"/>전체선택<br/>
		<input type="checkbox" name="subject" />Java<br/>
		<input type="checkbox" name="subject" />DataBase<br/>
		<input type="checkbox" name="subject" />Web<br/>
		
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 5</legend>
		<h3>1~20사이의 랜덤한 숫자를 생성해서 input 태그 안에 입력해주세요.</h3>
		랜덤:<input type="text" readonly="readonly" id="randomInput"/> <button onclick="answer05();">생성</button>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 6</legend>
		<h3>셀렉트 태그를 사용하여, 원하는 페이지로 이동해 주세요.</h3>
		<select id="locationSelect" onchange="answer06();">
			<option>--선택--</option>
			<option value="naver">네이버</option>
			<option value="google">구글</option>
			<option value="w3schools">w3scools</option>
		</select>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 7</legend>
		<h3>숫자를 정렬해서 alert으로 출력해 주세요.</h3>
		숫자 : <span id="numVal">1,4,2,3,11,32,27,5</span>
		<button onclick="answer07();">정렬</button>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 8</legend>
		<h3>개강일부터 오늘까지의 날짜를 alert으로 출력해 주세요. (getTime() 메서드 사용)</h3>
		개강일 : <input type="date" id="startDate"/> <button onclick="answer08();">날짜</button>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 9</legend>
		<h3>input 태그에 입력된 값으로 table을 생성해 주세요</h3>
		<form>
			이름:<input type="text" name="name"/><br/> 
			나이:<input type="text" name="age"/><br/>
			성별:<input type="text" name="gender"/><br/>
		</form>
			<button onclick="answer09();">생성</button>
		<table border="1">
			<thead>
				<tr>
					<th>이름</th>
					<th>나이</th>
					<th>성별</th>
				</tr>
			</thead>
			<tbody id="createTable">
			</tbody>
		</table>
	</fieldset>
	
	<!--------------------------------------------------------------------------------------------------------->
	<fieldset>
		<legend>문제 10</legend>
		<h3>원하는 구구단을 입력하고, alert으로 해당 단을 출력하세요.</h3>
		<h5>(입력 예: 3 -> 3*1 = 3 3*2 = 6 ...)</h5>
		<input type="text" id="gugudan" /> <button onclick="answer10();">출력</button>
	</fieldset>
	
</body>
</html>