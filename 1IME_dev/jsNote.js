// jQuery 簡化 ready() 函式的調用寫法
$().ready(…) ; 
$(…) ; 

// get key event 我不会
// $("input").keydown(function(event){
// if (event.which == 32) {

// Set the value of the <input> field:
$("button").click(function(){
    $("input:text").val("Glenn Quagmire");
});

$("button").click(function() {
});

//sleep
setTimeout(function() {
}, 2000);



<script type="text/javascript">
var JSONObject= {
"name":"Bill Gates",
"street":"Fifth Avenue New York 666",
"age":56,
"phone":"555 1234567"};
document.getElementById("jname").innerHTML=JSONObject.name
document.getElementById("jage").innerHTML=JSONObject.age
document.getElementById("jstreet").innerHTML=JSONObject.street
document.getElementById("jphone").innerHTML=JSONObject.phone
</script>



<div id="div1">divdiv</div>
<script type="text/javascript">
//new tag
var para=document.createElement("h2");
var node=document.createTextNode("This is new.");
para.appendChild(node);

var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para,child);







// failure code
function spliteString(str) {
    var spss = str.split(""); //将字符串拆分
    return spss // "olleh"
}

var aa =spliteString("准备了两天的存稿出去办事，结果昨晚没能回来，实在太累了，休息下晚上写吧，这个月有爆发(未完待续。)启用新"); // => olleh
var para = [];
// sp string
for (i = 0; i < aa.length; i++) {
    /*
     */
// word by word inside element
para[i]=document.createElement("span"); //創ELEMENT
var node=document.createTextNode(aa[i]); //放TEXT進去element
para[i].appendChild(node);
para[i].setAttribute("id", "spanLs"+i);
}

var element=document.getElementById("anchor");
for (i = 0; i < para.length; i++) { 
element.appendChild(para[i]);
}

for (i = 0; i < para.length; i++) { 
para[i]=document.createElement("div"); //創ELEMENT
var node=document.createTextNode(aa[i]); //放TEXT進去element
para[i].appendChild(node);
para[i].setAttribute("id", "spanLs"+i);
element.appendChild(para[i]);
}


$("#p02").click(function(){$("#p01").html("好長");});
$("button").attr("id", "LLLL");
var txt2 = $("<i></i>").text("love ").attr("id", "LLLL");    // Create with jQuery

</script>

