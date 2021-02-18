
document.getElementById("myDashboard").onclick = function () {
    location.href = "../HTML-pages/dashboard.html";
};
document.getElementById("myParent").onclick = function () {
    location.href = "../HTML-pages/parent.html";
};
document.getElementById("myTeacher").onclick = function () {
    location.href = "../HTML-pages/teacher.html";
};
document.getElementById("myStudent").onclick = function () {
    location.href = "#";
};
document.getElementById("myAdmin").onclick = function () {
    location.href = "../HTML-pages/admin.html";
};

 function showForm(){
     var x= document.getElementById("formApperence");
     if(x.style.display==="none"){
         x.style.display="flex";
     }else{
         x.style.display="none";
     }
 }