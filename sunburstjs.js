/**
 * Created by Thomas on 20.05.2016.
 */

//INITIALIZE
var mainArray = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var polygons = [];
var startAngles = [0,0,0,0];
var archLengths = [0,0,0,0];
var radiuses = [50,175,400,550];
var fontSizes = [100,14,14,12];

var centerx = c.width/2;
var centery = c.height/2;
var textOffset = 0.006;//variable adjusting for text at an angle. could be done with more rotation and vertical translation instead...

var textPaddingVertical = 5;
var textPaddingHorizontal = 5;

//LEVEL 1 INIT
mainArray[0] = {array: [], name: "Administrasjon", person:"Helene Busengdal", color:"#C9BFD6"};
mainArray[1] = {array: [], name: "Kommunikasjon", person:"Mona Sæther", color:"#646BA1"};
mainArray[2] = {array: [], name: "Økonomi", person:"Simon Risanger", color: "#C280A4"};
mainArray[3] = {array: [], name: "Kultur", person:"Benedikte Pernille Bakkeby Øverli" ,color: "#E39EAB"};
mainArray[4] = {array: [], name: "Idéutvikling", person:"Hildegunn Christiansen" ,color:"#F2CAC2"};
mainArray[5] = {array: [], name: "Studentenes Fredspris", person:"Håkon Noren" , color: "#F0DBC9"};

//LEVEL 2 INIT
mainArray[0].array[0] = {array: [], name: "Transport", person: "Pål Vegard Johnsen"};
mainArray[0].array[1] = {array: [], name: "HR", person: "Matilde Kvernevik"};
mainArray[0].array[2] = {array: [], name: "Rekruttering", person: "Mia Illøkken"};
mainArray[0].array[3] = {array: [], name: "Intern Arrangement", person: "Tøri Gerhardsen"};
mainArray[0].array[4] = {array: [], name: "Velferd", person: "Steinar Asklung"};
mainArray[0].array[5] = {array: [], name: "Sekreteriatet", person: "Marie Totland"};
mainArray[0].array[6] = {array: [], name: "Nestleder Admin", person: "Aslak Foss"};
mainArray[0].array[6] = {array: [], name: "Nestleder Admin", person:"Kristine Hansen"};

mainArray[1].array[0] = {array: [], name: "P.Leder Sosiale Medier",person: "Monika Heggem"};
mainArray[1].array[1] = {array: [], name: "P.Leder Nasjonal Markedsføring", person: "Stine Måseidsvåg"};
mainArray[1].array[2] = {array: [], name: "P.Leder Design", person:"Sandra Skillingsås"};
mainArray[1].array[3] = {array: [], name: "P.Leder Film", person:"Erik Dalen"};
mainArray[1].array[4] = {array: [], name: "P.Leder INasjonal Markedsføring", person:"Ina Skjelbred"};
mainArray[1].array[5] = {array: [], name: "P.Leder Redaksjonen", person: "Dag Audun Kårtvedt"};
mainArray[1].array[6] = {array: [], name: "Nestleder Kommunikasjon", person:"Tale Bærland"};

mainArray[2].array[0] = {array: [], name: "IT", person:"Adrian Eriksen"};
mainArray[2].array[1] = {array: [], name: "Finansiering", person:"Iris Krigsvoll Auran"};
mainArray[2].array[2] = {array: [], name: "Regnskap", person:"Frida Johansen"};
mainArray[2].array[3] = {array: [], name: "Deltaker", person:"Kathrine Eriksen Vatn"};
mainArray[2].array[4] = {array: [], name: "Nestleder Økonomi", person:"Ellen Reitan"};

mainArray[3].array[0] = {array: [], name: "Nestleder Kultur", person:"Cathrine Storemyr"};
mainArray[3].array[1] = {array: [], name: "Konsertsjef", person:"Bendik Sem Kvernevik"};
mainArray[3].array[2] = {array: [], name: "Kunstsjef", person:"Nora Forsbak Håskjold"};
mainArray[3].array[3] = {array: [], name: "Seremonisjef", person: "Vegard Fjellestad"};
mainArray[3].array[4] = {array: [], name: "Debattmøtesjef", person: "Ellinor Bratt"};
mainArray[3].array[5] = {array: [], name: "Scenekunstsjef", person:"Thea Harnes André"};
mainArray[3].array[6] = {array: [], name: "Arrangementsjef", person:"Kjersti Berge Mesna"};

mainArray[4].array[0] = {array: [], name: "Workshop", person:"Hanna Rangaard Mikalsen"};
mainArray[4].array[1] = {array: [], name: "Dialog", person:"Mathias Kristiansen"};
mainArray[4].array[2] = {array: [], name: "Prosjektdag", person:"Tuva Eriksen"};
mainArray[4].array[3] = {array: [], name: "Forskning", person:"Anna Bil-Jaruzelska"};
mainArray[4].array[4] = {array: [], name: "Nestleder Forskning"};
mainArray[4].array[5] = {array: [], name: "Nestleder Idéutveksling", person:"Helle Nannestad"};

mainArray[5].array[0] = {array: [], name: "Nestleder SFP", person:"Astrid Vagnildhaug"};
mainArray[5].array[1] = {array: [], name: "Kommunikasjonssjef SFP", person:"Marie Nygaard Sørlien"};
mainArray[5].array[2] = {array: [], name: "Leder Fredsprosjekt", person:"Ingrid Eriksen"};
mainArray[5].array[3] = {array: [], name: "Arrangørleder", person:"Johannes Bjartnes"};
mainArray[5].array[4] = {array: [], name: "Kampanjeleder", person:"Iselin Ertzgaard Solvang"};

//LEVEL 3 INIT
mainArray[0].array[5].array[0] = {array: [], name: "Nesleder Sekreteriatet", person: "Andrea Havstein Aspnes"};
mainArray[0].array[5].array[1] = {array: [], name: "WOK-Koordinator", person: "Thomas Mathisen"};
mainArray[0].array[5].array[2] = {array: [], name: "Sekretariatskoordinator", person: "Ulrikke Bing"};
mainArray[0].array[5].array[3] = {array: [], name: "Sekretariatskoordinator", person: "Stine Lerstad"};

mainArray[2].array[0].array[0] = {array: [], name: "Nestleder IT-strategi", person:"Emil Henry Flakk"};
mainArray[2].array[0].array[1] = {array: [], name: "Nestleder IT-faglig", person:"Thomas Gjerde"};
mainArray[2].array[0].array[2] = {array: [], name: "Utvikler", person:"Håkon Hukkelås"};
mainArray[2].array[0].array[3] = {array: [], name: "Utvikler", person:"Christian Sørseth"};
mainArray[2].array[0].array[4] = {array: [], name: "Utvikler", person:"Carl Otto Steen"};



//***** LEVEL 1 DRAW *****
archLengths[1] = (2*Math.PI)/mainArray.length;
for (i = 0; i < mainArray.length; i++) {
    var flip1 = (startAngles[1]>((Math.PI/2)-archLengths[1]) & startAngles[1]<((Math.PI/2*3)-archLengths[1]));
    //***** LEVEL 2 DRAW *****
    archLengths[2] = (2 * Math.PI) / mainArray.length / mainArray[i].array.length;
    ctx.fillStyle = mainArray[i].color;
    for (j = 0; j < mainArray[i].array.length; j++) {
        increaseAngles(2,true);
        var flip2 = (startAngles[2]>(Math.PI/2) & startAngles[2]<(Math.PI/2*3)-0.01);
        //***** LEVEL 3 DRAW*****
        archLengths[3] = (2 * Math.PI) / mainArray.length / mainArray[i].array.length / mainArray[i].array[j].array.length;
        for (k = 0; k < mainArray[i].array[j].array.length; k++) {
            var flip3 = (startAngles[3]>(Math.PI/2) & startAngles[3]<(Math.PI/2*3));
            drawSection(3, textOffset, mainArray[i].array[j].array[k].name,flip3,k,mainArray[i].array[j].array.length);
        }
        drawSection(2, textOffset, mainArray[i].array[j].name,flip2,k,mainArray[i].array.length);

    }
    drawSection(1, textOffset, mainArray[i].name,flip1,k,mainArray.length);
}

//LEVEL0
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.arc(centerx, centery, radiuses[0], 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

function drawSection(level, textOffset, textToWrite,flip,index,arrayLength) {
    polygons.push([
        {x: centerx+radiuses[0], y: centery},
        {x: (centerx+radiuses[level]), y: centery},
        {x: (centerx+radiuses[level]), y: (centery+(archLengths[level]*radiuses[level]))},
        {x: centerx, y: centery},
    ]);

    var startAngle = startAngles[level];
    var endAngle = startAngle + archLengths[level];
    var radius = radiuses[level];
//FillArch
    ctx.beginPath();
    ctx.lineWidth=0.4;
    ctx.lineTo(centerx, centery);
    ctx.arc(centerx, centery, radius, startAngle, endAngle);
    ctx.lineTo(centerx, centery);
    ctx.fill();
    ctx.stroke();

//FillText
    ctx.save();
    ctx.translate(centerx, centery);
    if (flip) {
        if (level == 1) {
            ctx.rotate((endAngle - textOffset)-Math.PI);
            ctx.translate(-(radiuses[level]/2+textPaddingHorizontal*4),fontSizes[level]*1.5);
        }else{
            ctx.rotate((startAngle)-Math.PI);
            ctx.translate(-(radiuses[level]*2)+((radiuses[level]-radiuses[level-1])*2)-textPaddingHorizontal,0);
        }
        ctx.textAlign = "end";
        ctx.translate(-centerx, -centery);
    }else {
        ctx.rotate(endAngle - textOffset);
        ctx.translate(-centerx, -centery+3);
    }
    wrapText(ctx, level, textToWrite, centerx + Math.cos(0) * radiuses[level - 1] + textPaddingVertical, centery + Math.sin(0) * radiuses[level - 1] - textPaddingVertical, radiuses[level] - radiuses[level - 1], fontSizes[level]*1.5);
    ctx.restore();
    increaseAngles(level,false);
}

//This basis of this function is from stackoverflow but added alot
function wrapText(context, level, text, x, y, maxWidth, lineHeight) {
    ctx.font = fontSizes[level]+"px Arial";
    ctx.fillStyle = '#000000';
    var cars = text.split("\n");
    for (var ii = 0; ii < cars.length; ii++) {
        var line = "";
        var words = cars[ii].split(" ");
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth) {
                y -= lineHeight;
                context.fillText(line, x, y);
                line = words[n] + " ";
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);

        y += lineHeight;
    }
}

function increaseAngles(level,reset) {
    if (reset == false) {
        startAngles[level] = startAngles[level] + archLengths[level];
        if (level >= 2) {
            for (var n = level + 1; n < archLengths.length; n++) {
                startAngles[n] = startAngles[n] + archLengths[n - 1];
            }
        }
    }else{
        startAngles[level+1] = startAngles[level]
    }
}


var mouseX=0, mouseY=0;
c.addEventListener( "mousemove", function ( e ){
    var scrollX = ( window.scrollX !== null && typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset;
    var scrollY = ( window.scrollY !== null && typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset;
    mouseX = e.clientX - c.offsetLeft + scrollX;
    mouseY = e.clientY - c.offsetTop + scrollY;
}, false );

c.addEventListener( "click", function ( e ){
    console.log(mouseX);
    console.log(mouseY);
    for (var n = 0; n < polygons.length; n++) {
        if (isPointInPoly(polygons[n], {x:mouseX, y:mouseY})){
            window.location = "http://google.com";
        }else{
            console.log("nope")
            console.log(polygons[1]);
            console.log(polygons[1]);
            console.log({x:mouseX, y:mouseY})
        }
    }
    //if( mouseX < 200 ){}
}, false );

console.log(polygons)

function isPointInPoly(poly, pt){
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
        && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
    return c;
}