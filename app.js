// from data.js
function get_data(answer) {
  var input_date  = document.getElementById("ufo_date").value;
  var year = input_date.slice(0,4);
  if(input_date[5] == "0"){
      var month = input_date[6];
  }
  else{
      var month = input_date[5] + input_date[6];
  }

  if(input_date[8] == "0"){
      var day = input_date[9];
  }
  else{
      var day = input_date[8] + input_date[9];
  }
  var input_date_reformat = month + "/" + day + "/" + year

  var tableData = data;
  var html = "<table border='1px solid black;'> \
  <thead> \
      <tr> \
        <th>datetime</th> \
        <th>city</th> \
        <th>state</th> \
        <th>country</th> \
        <th>shape</th> \
        <th>durationMinutes</th> \
        <th>comments</th> \
      </tr> \
    </thead><tbody>";
  for (var i = 0; i < tableData.length; i++) {
      if (tableData[i].datetime == input_date_reformat){
          html+="<tr>";
          html+="<td>"+tableData[i].datetime+"</td>";
          html+="<td>"+tableData[i].city+"</td>";
          html+="<td>"+tableData[i].state+"</td>";
          html+="<td>"+tableData[i].country+"</td>";
          html+="<td>"+tableData[i].shape+"</td>";
          html+="<td>"+tableData[i].durationMinutes+"</td>";
          html+="<td>"+tableData[i].comments+"</td>";
          html+="</tr>";
      }
  }
  html+="</tbody></table>";
  document.getElementById("ufo-table").innerHTML = html;


  return false;
}

var tableData = data;
var html = "<table border='1px solid black;'> \
<thead> \
    <tr> \
      <th>datetime</th> \
      <th>city</th> \
      <th>state</th> \
      <th>country</th> \
      <th>shape</th> \
      <th>durationMinutes</th> \
      <th>comments</th> \
    </tr> \
  </thead><tbody>";
for (var i = 0; i < tableData.length; i++) {
    html+="<tr>";
    html+="<td>"+tableData[i].datetime+"</td>";
    html+="<td>"+tableData[i].city+"</td>";
    html+="<td>"+tableData[i].state+"</td>";
    html+="<td>"+tableData[i].country+"</td>";
    html+="<td>"+tableData[i].shape+"</td>";
    html+="<td>"+tableData[i].durationMinutes+"</td>";
    html+="<td>"+tableData[i].comments+"</td>";

    html+="</tr>";
}
html+="</tbody></table>";
document.getElementById("ufo-table").innerHTML = html;// YOUR CODE HERE!
