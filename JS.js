
function calculate() {
 var num1 = document.getElementById("num1").value;
 var operator = document.getElementById("operator").value;
 var num2 = document.getElementById("num2").value;

 if (operator === "+" || operator === "-" || operator === "x" || operator === "/") {
    if (num2 === 0) {
      document.getElementById("result").innerHTML = "错误";
    } else if (num1 === 0 || num2 === 0) {
      document.getElementById("result").innerHTML = "错误";
    } else {
      var result = eval("(" + num1 + " " + operator + " " + num2 + ")");
      document.getElementById("result").innerHTML = result;
    }
 } else {
    document.getElementById("result").innerHTML = "错误";
 }
}
