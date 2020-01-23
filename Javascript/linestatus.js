function updateLineStatus(lineStatusElement, locationName) {
    lineStatusElement.classList.remove(lineStatusElement.classList.item(1));
    switch (Math.floor((Math.random() * 3) + 1)) {
           case 1:
           lineStatusElement.classList.add('goodservice');
            lineStatusElement.textContent = locationName + ": Unusually good service";
           break;
           case 2:
            lineStatusElement.classList.add('badservice');
            lineStatusElement.textContent = locationName + ": Bad service";
           break;
           case 3:
            lineStatusElement.classList.add('terribleservice');
            lineStatusElement.textContent = locationName + ": All services cancelled";
           break;
    }
}

var timer = setInterval(function() {
    switch (Math.floor((Math.random() * 3) + 1)) {
           case 1:
                updateLineStatus(document.getElementById('colchester'), 'Colchester');
           break;
           case 2:
                updateLineStatus(document.getElementById('rochford'), 'Rochford');
           break;
           case 3:
                updateLineStatus(document.getElementById('stratford'), 'Stratford');
           break;
    }
}, 1000);