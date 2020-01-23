function findTickets() {
    var nationalRail = "http://ojp.nationalrail.co.uk/service/timesandfares/";
    nationalRail += document.getElementById('departing').value;
    nationalRail += "/";
    nationalRail += document.getElementById('arriving').value;
    nationalRail += "/";
    var datetime = document.getElementById('datetime').value;
    nationalRail += datetime.substring(8,10);
    nationalRail += datetime.substring(5,7);
    nationalRail += datetime.substring(2,4);
    nationalRail += "/";
    nationalRail += datetime.substring(11,13);
    nationalRail += datetime.substring(14,16);
    nationalRail += "/dep";
    window.location.href = nationalRail;
}

function setdatetime() {
    document.getElementById('datetime').min = moment().format().substring(0,16);
    document.getElementById('datetime').value = moment().format().substring(0,16);
}

window.onload = setdatetime;