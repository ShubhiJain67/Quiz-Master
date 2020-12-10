//----------------------------- Show selected ID -------------------------------//

function show(id) {
    console.log("Showing :"+id);
    document.getElementById(id).style.display="block";
}

//------------------------------ Hide Selected ID -------------------------------//

function hide(id) {
    console.log("Hiding :"+id);
    document.getElementById(id).style.display="none";
}

//------------------------------ Size of Object -------------------------------//

function size(obj) {
    var size = 0;
    for (var key in obj) {
        size++;
    }
    return size;
}

//------------------------------ Set Inner HTML-------------------------------//

function set(id,html) {
    document.getElementById(id).innerHTML=html;
}

//------------------------------ Set Inner HTML-------------------------------//

function reset(id,html) {
    document.getElementById(id).innerHTML=html;
}
