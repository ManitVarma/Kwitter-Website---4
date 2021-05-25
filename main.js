function Add_Name(){
    var User_Name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", User_Name);
    window.location = "kwitter_room.html";
}