/**
 * Created by Thomas on 20.05.2016.
 */
//LEVEL 1
var mainArray = [];


textPaddingVertical=5;


mainArray[0] = {array: [], name: "Administrasjon", person:"Helene Busengdal", color:"#C9BFD6"};
mainArray[1] = {array: [], name: "Kommunikasjon", person:"Mona Sæther", color:"#646BA1"};
mainArray[2] = {array: [], name: "Økonomi", person:"Simon Risanger", color: "#C280A4"};
mainArray[3] = {array: [], name: "Kultur", person:"Benedikte Pernille Bakkeby Øverli" ,color: "#E39EAB"};
mainArray[4] = {array: [], name: "Idéutvikling", person:"Hildegunn Christiansen" ,color:"#F2CAC2"};
mainArray[5] = {array: [], name: "Studentenes Fredspris", person:"Håkon Noren" , color: "#F0DBC9"};

//LEVEL 2
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
mainArray[1].array[4] = {array: [], name: "P.Leder Internasjonal Markedsføring", person:"Ina Skjelbred"};
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

mainArray[2].array[0].array[0] = {array: [], name: "Nestleder IT-strategi", person:"Emil Henry Flakk"};
mainArray[2].array[0].array[1] = {array: [], name: "Nestleder IT-faglig", person:"Thomas Gjerde"};
mainArray[2].array[0].array[2] = {array: [], name: "Utvikler", person:"Håkon Hukkelås"};
mainArray[2].array[0].array[3] = {array: [], name: "Utvikler", person:"Christian Sørseth"};
mainArray[2].array[0].array[4] = {array: [], name: "Utvikler", person:"Carl Otto Steen"};



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var startAngles = [0,0,0,0];
var archLengths = [0,0,0,0];
var radiuses = [50,200,500,700]

var centerx = 550;
var centery = 550;
var radius0 = 50;
var radius1 = 200;
var radius2 = 500;
var radius3 = 700;

var arcLengthlvl0 = (2*Math.PI)/mainArray.length;
archLengths[1] = (2*Math.PI)/mainArray.length;


var startAnglelvl1 = 0;
var startAnglelvl2 = 0;
var startAnglelvl3 = 0;
for (i = 0; i < mainArray.length; i++) {

    //***** LEVEL 2 *****
    archLengths[2] = (2 * Math.PI) / mainArray.length / mainArray[i].array.length;
    var flip = (startAngles[2]>(3.14/2) & startAngles[2]<(3.14/2*3));
    if (flip){console.log(mainArray[i].array.reverse())};


    //var arcLengthlvl1 = (2 * Math.PI) / mainArray.length / mainArray[i].array.length;
    //ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    var fillstylez = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //ctx.fillStyle = fillstylez;
    ctx.fillStyle = mainArray[i].color;
    for (j = 0; j < mainArray[i].array.length; j++) {
        //level2


        var arcLengthlvl2 = (2 * Math.PI) / mainArray.length / mainArray[i].array.length / mainArray[i].array[j].array.length;

        //***** LEVEL 3 *****
        archLengths[3] = (2 * Math.PI) / mainArray.length / mainArray[i].array.length / mainArray[i].array[j].array.length;
        var flip = (startAngles[3]>(3.14/2) & startAngles[3]<(3.14/2*3));
        if (flip){console.log(mainArray[i].array[j].array.reverse())};
        for (k = 0; k < mainArray[i].array[j].array.length; k++) {

            drawSection(3, 0.005, mainArray[i].array[j].array[k].name,flip,k,mainArray[i].array[j].array.length);
            // ******
            // LEVEL3
            // ******
            //ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
            /*
             ctx.beginPath();
             ctx.arc(centerx,centery,radius3,startAnglelvl3,startAnglelvl3+arcLengthlvl2);
             ctx.lineTo(centerx,centery);
             ctx.fill();
             ctx.stroke();

             ctx.save();
             ctx.translate(centerx,centery);
             ctx.rotate(startAnglelvl3+arcLengthlvl2-0.005);
             ctx.translate(-centerx, -centery);
             ctx.font = "16px Arial";
             ctx.fillStyle = '#EEEEEE';
             var textToWrite = mainArray[i].array[j].array[k].name;
             wrapText(ctx, textToWrite, centerx+Math.cos(startAnglelvl3-startAnglelvl3)*radius2+textPaddingVertical, centery+Math.sin(startAnglelvl3-startAnglelvl3)*radius2-textPaddingVertical, radius3-radius2, 24);
             //ctx.fillText(textToWrite,centerx+Math.cos(startAnglelvl1-startAnglelvl1)*radius0,centery+Math.sin(startAnglelvl1-startAnglelvl1)*radius0);
             ctx.restore();

             startAnglelvl3+=arcLengthlvl2;
             */
        }

        drawSection(2, 0.005, mainArray[i].array[j].name,false,k,mainArray[i].array.length);

        // ******
        // LEVEL2
        //var fillstylez = mainArray[i].color;
        //ctx.fillStyle = fillstylez;

        /*
        ctx.beginPath();
        ctx.arc(centerx, centery, radius2, startAnglelvl2, startAnglelvl2 + arcLengthlvl1);
        ctx.lineTo(centerx, centery);
        ctx.fill()
        ctx.stroke();

        ctx.save();
        ctx.translate(centerx, centery);
        ctx.rotate(startAnglelvl2 + arcLengthlvl1 - 0.03);
        ctx.translate(-centerx, -centery);
        ctx.font = "16px Arial";
        ctx.fillStyle = '#EEEEEE';
        var textToWrite = mainArray[i].array[j].name;
        wrapText(ctx, textToWrite, centerx + Math.cos(startAnglelvl2 - startAnglelvl2) * radius1 + textPaddingVertical, centery + Math.sin(startAnglelvl2 - startAnglelvl2) * radius1 - textPaddingVertical, radius2 - radius1, 24);
        //ctx.fillText(textToWrite,centerx+Math.cos(startAnglelvl1-startAnglelvl1)*radius0,centery+Math.sin(startAnglelvl1-startAnglelvl1)*radius0);
        ctx.restore();


        startAnglelvl2 += arcLengthlvl1;
         */
        //startAngles[2] = startAngles[2]+archLengths[1];
    }

    //LEVEL1
    //var fillstylez ='#'+Math.floor(Math.random()*16777215).toString(16);
    //var fillstylez = mainArray[i].color;
    //ctx.fillStyle = fillstylez;
    ctx.beginPath();
    ctx.arc(centerx, centery, radius1, startAnglelvl1, startAnglelvl1 + arcLengthlvl0);
    ctx.lineTo(centerx, centery);
    ctx.fill()
    ctx.stroke();


    ctx.save();
    ctx.translate(centerx, centery);
    ctx.rotate(startAnglelvl1 + arcLengthlvl0);
    ctx.translate(-centerx, -centery);
    ctx.font = "16px Arial";
    ctx.fillStyle = '#EEEEEE';
    var textToWrite = mainArray[i].name;
    wrapText(ctx, textToWrite, centerx + Math.cos(startAnglelvl1 - startAnglelvl1) * radius0 + textPaddingVertical, centery + Math.sin(startAnglelvl1 - startAnglelvl1) * radius0 - textPaddingVertical, radius1 - radius0, 24);
    //ctx.fillText(textToWrite,centerx+Math.cos(startAnglelvl1-startAnglelvl1)*radius0,centery+Math.sin(startAnglelvl1-startAnglelvl1)*radius0);
    ctx.restore();


    /*
     console.log("***************");
     console.log(centerx + " . " + centery);
     console.log(startAnglelvl1);
     console.log(startAnglelvl2);
     console.log(radtoDeg(startAnglelvl1));
     console.log(radtoDeg(startAnglelvl2));
     console.log(arcLengthlvl0);
     console.log(radtoDeg(arcLengthlvl0));
     console.log("x: " + (Math.cos(startAnglelvl1)));
     console.log("y: " + (Math.sin(startAnglelvl1)));
     */


    startAnglelvl1 += arcLengthlvl0;
    startAnglelvl2 = startAnglelvl1;
    startAnglelvl3 = startAnglelvl2;
    startAngles[1]=startAngles[1]+archLengths[1];
    startAngles[2]=startAngles[1];
    startAngles[3]=startAngles[2];

}

//LEVEL0
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.arc(centerx, centery, radius0, 0, 2 * Math.PI);
ctx.fill()
ctx.stroke();

function radtoDeg(radians) {
    return radians * 180 / (22 / 7);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
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


function drawSection(level, textOffset, textToWrite,flip,index,arrayLength) {

    var startAngle = startAngles[level];
    var endAngle = startAngle + archLengths[level];
    var radius = radiuses[level];
    //FillArch
    ctx.beginPath();
    ctx.arc(centerx, centery, radius, startAngle, endAngle);
    ctx.lineTo(centerx, centery);
    ctx.fill();
    ctx.stroke();

    //FillText
    if (flip) {
        var flipOffset = ((arrayLength-index)*archLengths[level]);
        console.log("FLIPS"+flipOffset);
        ctx.save();
        ctx.translate(centerx, centery);
        ctx.rotate(-endAngle + (3.14 / 2 - (1/15))-(flipOffset*2) + textOffset);
        console.log(endAngle)
        ctx.translate(-centerx, -centery);
        ctx.font = "16px Arial";
        ctx.fillStyle = '#000000';
        ctx.textAlign = "end";
        wrapText(ctx, textToWrite, centerx - (Math.cos(0) * radiuses[level - 1]) + textPaddingVertical-7, centery - (Math.sin(0) * radiuses[level - 1]*1.1) - textPaddingVertical-2, radiuses[level] - radiuses[level - 1], 24);
        //ctx.fillText(textToWrite,centerx+Math.cos(startAnglelvl1-startAnglelvl1)*radius0,centery+Math.sin(startAnglelvl1-startAnglelvl1)*radius0);
        ctx.restore();
    }else{
        ctx.save();
        ctx.translate(centerx, centery);
        ctx.rotate(endAngle - textOffset);
        ctx.translate(-centerx, -centery);
        ctx.font = "16px Arial";
        ctx.fillStyle = '#EEEEEE';
        wrapText(ctx, textToWrite, centerx + Math.cos(0) * radiuses[level - 1] + textPaddingVertical, centery + Math.sin(0) * radiuses[level - 1] - textPaddingVertical, radiuses[level] - radiuses[level - 1], 24);
        //ctx.fillText(textToWrite,centerx+Math.cos(startAnglelvl1-startAnglelvl1)*radius0,centery+Math.sin(startAnglelvl1-startAnglelvl1)*radius0);
        ctx.restore();

    }


    startAngles[level] = startAngles[level] + archLengths[level];
    //startAnglelvl3+=arcLengthlvl2;
}
