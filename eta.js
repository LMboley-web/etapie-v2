var popUp = document.getElementById("order-popup");
var darken = document.getElementById("view-dark");
let op = '';



function openPopup(){
    if (popUp.style.visibility != "visible"){
        popUp.style.visibility = "visible";
    }
    if (darken.style.visibility != "visible"){
        darken.style.visibility = "visible";
    }
};
function closePopup(){
    if (popUp.style.visibility != "hidden"){
        popUp.style.visibility = "hidden";
    }
    if (darken.style.visibility != "hidden"){
        darken.style.visibility = "hidden";
    }
};

function toggleOpenSize(){
    op = document.getElementById("tog-size");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};


function toggleOpenCrust(){
    op = document.getElementById("tog-crust");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};

function toggleOpenSauce(){
    op = document.getElementById("tog-sauce");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};

function toggleOpenCheese(){
    op = document.getElementById("tog-cheese");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};

function toggleOpenVeg(){
    op = document.getElementById("tog-veggie");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};
function toggleOpenMeat(){
    op = document.getElementById("tog-meat");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};
function toggleOpenSea(){
    op = document.getElementById("tog-sea");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};

function toggleOpenFinish(){
    op = document.getElementById("tog-fin");
    if (op.style.visibility != "visible"){
        op.style.visibility = "visible";
    } else if (op.style.visibility = "visible"){
        op.style.visibility = "hidden";
    }
    if (op.style.display != "block"){
        op.style.display = "block";
    } else if (op.style.display = "block"){
        op.style.display = "none";
    } 
};