function submit(){
    var display_name = [];
    NOTSA = [];

    for(var j = 1; j <= 4; j++){
        var name = document.getElementById("name_of_the_student_" + j).value;
        NOTSA.push(name);
    }

    var len = NOTSA.length;
    
    for(var k = 0; k < len; k++){
        display_name.push("<h4>Name-" + NOTSA[k] + "</h4>");
    }

    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML=display_name;

    var remove_commas = display_name.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    NOTSA.sort();
    console.log(NOTSA);

    var sortything = [];
    
    var lengths = NOTSA.length;

    for(var k = 0; k < lengths; k++){
        sortything.push("<h4>Name-" + NOTSA[k] + "</h4>");
    }

    var remove_commas = sortything.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+NOTSA+"</h1>";
}
