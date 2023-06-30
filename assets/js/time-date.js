function dateTime(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var dateLocation = document.getElementById("date");
    var d = new Date();
    var month = months[d.getMonth()];
    var date = d.getDate();
    var day = days[d.getDay()];
    dateLocation.innerHTML = day + ", " + date + " " + month;

}
dateTime()