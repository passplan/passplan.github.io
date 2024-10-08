

function listen_click() {

    let tds = document.querySelectorAll(`td`);
    tds.forEach((td) => {
        td.addEventListener(`click`, function () {
            if (td.innerHTML != "") {
                td.classList.toggle("chosen");

                if (td.classList[0].startsWith("ye")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(237, 240, 96, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(237, 240, 96, 0.7)';
                }
                if (td.classList[0].startsWith("or")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(240, 128, 60, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(240, 128, 60, 0.7)';
                }
                if (td.classList[0].startsWith("gr")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(81, 152, 114, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(81, 152, 114, 0.7)';
                }
                if (td.classList[0].startsWith("bl")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(52, 89, 149, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(52, 89, 149, 0.7)';
                }
                if (td.classList[0].startsWith("br")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(72, 39, 40, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(72, 39, 40, 0.7)';
                }
                if (td.classList[0].startsWith("al")) {
                    td.style.backgroundColor = td.style.backgroundColor === 'rgba(212, 116, 190, 0.7)' ? 'rgba(255, 255, 255, 1)' : 'rgba(212, 116, 190, 0.7)';
                }


            };
        });
    });
}


function listen_click_plan() {

    let trs = document.querySelectorAll(`tr`);
    trs.forEach((tr) => {
        tr.addEventListener(`click`, function () {

            if (tr.children[1].classList[0] != undefined) {


                tr.children[2].classList.toggle("chosen");

                if (tr.children[1].classList[0] == "yellowwhite") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(253, 255, 133)' ? 'rgb(255, 255, 255)' : 'rgb(253, 255, 133)';
                }

                if (tr.children[1].classList[0] == "yellow") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(251, 255, 10)' ? 'rgb(255, 255, 255)' : 'rgb(251, 255, 10)';
                }

                if (tr.children[1].classList[0] == "orangewhite") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(245, 169, 122)' ? 'rgb(255, 255, 255)' : 'rgb(245, 169, 122)';
                }

                if (tr.children[1].classList[0] == "orange") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(228, 98, 17)' ? 'rgb(255, 255, 255)' : 'rgb(228, 98, 17)';
                }

                if (tr.children[1].classList[0] == "greenwhite") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(162, 205, 183)' ? 'rgb(255, 255, 255)' : 'rgb(162, 205, 183)';
                }

                if (tr.children[1].classList[0] == "green") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(64, 119, 90)' ? 'rgb(255, 255, 255)' : 'rgb(64, 119, 90)';
                }

                if (tr.children[1].classList[0] == "blue") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(52, 89, 149)' ? 'rgb(255, 255, 255)' : 'rgb(52, 89, 149)';
                }
                if (tr.children[1].classList[0] == "brown") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(72, 39, 40)' ? 'rgb(255, 255, 255)' : 'rgb(72, 39, 40)';
                }

                if (tr.children[1].classList[0] == "all") {
                    tr.children[2].style.backgroundColor = tr.children[2].style.backgroundColor === 'rgb(212, 116, 190)' ? 'rgb(255, 255, 255)' : 'rgb(212, 116, 190)';
                }

            }
            ;
        });
    });
}

function listen_click_old_pass() {
    let trs = document.querySelectorAll(`tr`);
    console.log(trs);

    trs.forEach((tr) => {
        tr.addEventListener(`click`, function () {
            console.log(tr);

            if (tr.innerHTML != '') {

                tr.children[2].classList.toggle("chosen");
            }
            ;
        });
    });
}

function clear_all() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {
        td?.classList.remove('chosen');

        if (td.innerHTML != "") {
            td.style.color = "black";
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
}

function createFile_kuy() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = document.getElementsByClassName('chosen');
    let chosen = [];

    let facit = {};
    facit['tab'] = "Tsuri ashi bakåt";
    facit['taf'] = "Tsuri ashi bakåt";
    facit['tlv'] = "Taisabaki lång vänster";
    facit['k'] = "Kawashi";
    facit['tkv'] = "Taisabaki kort vänster";
    facit['m'] = "Maesabaki";
    facit['jcu'] = "Jodan chikai uke";
    facit['ub'] = "Uppgång bakåt";
    facit['tlh'] = "Taisabaki lång höger";
    facit['aa'] = "Ayumi ashi (samma kamae)"


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    console.log(chosen);

    let warmup = [];
    for (let index = 0; index < elements.length; index++) {
        let classlist = elements[index].classList;
        classlist.forEach(element => {
            if (facit.hasOwnProperty(element)) {
                if (!warmup.includes(facit[element])) {
                    warmup.push(facit[element]);
                }
            }
        });
    }

    let content = "";
    let modal_cont = "";

    let statistics = "";
    let colors = [];
    content += "5:e kuy: \n";
    modal_cont += '<h2 style="color: rgb(255, 235, 10)">5:e kuy:</h2>';

    let orange = true;
    let green = true;
    let blue = true;
    let brown = true;
    let all = true;

    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "orange" && orange) {
            content += "\n4e kuy: \n";
            modal_cont += '<h2 style="color: rgb(253, 117, 33)">4e kuy:</h2>';
            orange = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n3:e kuy: \n";
            modal_cont += '<h2 style="color: rgb(64, 119, 90)">3e kuy:</h2>';
            green = false;
        }

        if (chosen[index].class == "blue" && blue) {
            content += "\n2:a kuy: \n";
            modal_cont += '<h2 style="color: rgb(52, 89, 149)">2a kuy:</h2>';

            blue = false;
        }

        if (chosen[index].class == "brown" && brown) {
            content += "\n1:a kuy: \n";
            modal_cont += '<h2 style="color: rgb(72, 39, 40)">1:a kuy:</h2>';

            brown = false;
        }


        if (chosen[index].class == "all" && all) {
            content += "\nGrundläggande tekniker: \n";
            modal_cont += '<h2 style="color: #D474BE">Grundläggande tekniker: </h2>';

            all = false;
        }

        content += "" + chosen[index].name + "\n";
        modal_cont += "<p>" + chosen[index].name + "</p>";

        statistics += "" + chosen[index].name + "\n";

        colors.push(chosen[index].class);
    }

    let tekniker = statistics.split('\n');

    let i = 0;

    content += "\n\nFörslag på uppvärmningar:\n";
    modal_cont += "<h3>Förslag på uppvärmningar:</h3>"


    warmup.forEach(element => {
        content += element + "\n"
        modal_cont += "<p>" + element + "</p>"

    });


    modal_content.innerHTML = modal_cont + '<button class="close">Spara pass</button>';

    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        download_file(content);
    }

}

function search_kuy() {
    clear_all();

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    let trs = table.getElementsByTagName("tr");

    for (i = 0; i < trs.length; i++) {
        let intr = false;
        td = trs[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;
            } else {
                td.style.color = "white";
            }
        }

        td = trs[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        td = trs[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                intr = true;

            } else {
                td.style.color = "white";

            }
        }

        if (!intr) {
            td = trs[i].getElementsByTagName("td");
            if (td.length >= 1) {
                trs[i].style.display = "none";
            }
        }
    }
}

function search_plan() {
    clear_all_plan();

    let input, filter, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    let trs = document.getElementsByTagName("tr");


    for (i = 0; i < trs.length; i++) {
        td = trs[i].children[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                trs[i].children[2].click();
            } else {
                trs[i].style.display = "none";
            }
        }
    }

    let search = document.getElementById("search_field");
    search.value = "";

}

function fill_result(reply, pass_count) {

    let HTML = `<table style="border-collapse: separate;empty-cells: hide;">`;

    let orange = true
    let green = true
    let blue = true
    let brown = true
    let yellowwhite = true
    let whiteorange = true
    let orangewhite = true
    let whitegreen = true
    let greenwhite = true
    let all = true;

    const mp = new Map(reply.map(o => [o.teknik, { ...o, count: 0 }]));
    for (const { teknik } of reply) mp.get(teknik).count++;
    let result = Array.from(mp.values());

    result.sort((a, b) => (a.color < b.color) ? 1 : ((b.color < a.color) ? -1 : 0))

    result.forEach(element => {

        HTML += '<tr>';
        if (element.color == 'yellow') {
            HTML += '<td style="background-color: rgb(255, 235, 10);color: rgb(255, 235, 10);border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'orange') {
            if (orange) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                orange = false;
            }
            HTML += '<td style="background-color: rgb(253, 117, 33);color: rgb(253, 117, 33);border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'green') {
            if (green) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                green = false;
            }
            HTML += '<td style="background-color: rgb(64, 119, 90);color: rgb(64, 119, 90);border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'blue') {
            if (blue) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                blue = false;
            }
            HTML += '<td style="background-color: rgb(52, 89, 149);color: rgb(52, 89, 149);border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'brown') {
            if (brown) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                brown = false;
            }
            HTML += '<td style="background-color: rgb(72, 39, 40);color: rgb(72, 39, 40);border: 1px solid #24292e38;">.</td>'
        }

        if (element.color == 'yellowwhite') {
            HTML += '<td style="background-color: #FFF370; color: #FFF370; border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'yellow') {
            if (yellowwhite) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                yellowwhite = false;
            }
            HTML += '<td style="background-color: #FFEB0A;color: #FFEB0A;border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'orangewhite') {
            if (whiteorange) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                whiteorange = false;
            }
            HTML += '<td style="background-color: #FEB486;color: #FEB486;border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'orange') {
            if (orangewhite) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                orangewhite = false;
            }
            HTML += '<td style="background-color: #FD7521 ;color: #FD7521;border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'greenwhite') {
            if (whitegreen) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                whitegreen = false;
            }
            HTML += '<td style="background-color: #A2CDB7;color: #A2CDB7;border: 1px solid #24292e38;">.</td>'
        } else if (element.color == 'green') {
            if (greenwhite) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                greenwhite = false;
            }
            HTML += '<td id="td" style="background-color: #40775A;color: #40775A; border: 1px solid #24292e38;">.</td>'
        }
        else if (element.color == 'all') {
            if (all) {
                HTML += '<tr><td></td><td></td><td></td></tr>'
                all = false;
            }
            HTML += '<td id="td" style="background-color: #D474BE;color: #D474BE; border: 1px solid #24292e38;">.</td>'
        }



        if (pass_count) {
            HTML += `<td style="width:50vw;"> ${element.teknik}</td><td style="width:42px;"> ${element.count}</td></tr> `

        } else {
            HTML += `<td style="width:50vw;"> ${element.teknik}</td></tr> `

        }
    });

    HTML += '</table>'

    let results_p = document.getElementById("results");
    results_p.innerHTML = HTML;
}

function createFile_mon() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = document.getElementsByClassName('chosen');
    let chosen = [];

    let facit = {};
    facit['tab'] = "Tsuri ashi bakåt";
    facit['taf'] = "Tsuri ashi bakåt";
    facit['tlv'] = "Taisabaki lång vänster";
    facit['k'] = "Kawashi";
    facit['tkv'] = "Taisabaki kort vänster";
    facit['m'] = "Maesabaki";
    facit['jcu'] = "Jodan chikai uke";
    facit['ub'] = "Uppgång bakåt";
    facit['tlh'] = "Taisabaki lång höger";
    facit['aa'] = "Ayumi ashi (samma kamae)"


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    let warmup = [];
    for (let index = 0; index < elements.length; index++) {
        let classlist = elements[index].classList;
        classlist.forEach(element => {
            if (facit.hasOwnProperty(element)) {
                if (!warmup.includes(facit[element])) {
                    warmup.push(facit[element]);
                }
            }
        });
    }

    let content = "";
    let modal_cont = "";
    let statistics = "";
    let colors = [];
    content += "6:e mon (vit-gult): \n";
    modal_cont += '<h2 style="color: #FFF370">6:e mon (vit-gult):</h2>';


    let yellow = true;
    let orangewhite = true;
    let orange = true;
    let greenwhite = true;
    let green = true;
    let all = true;

    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "yellow" && yellow) {
            content += "\n5e mon (gul-vitt): \n";
            modal_cont += '<h2 style="color: #FFEB0A">5e mon (gul-vitt):</h2>';
            yellow = false;
        }

        if (chosen[index].class == "orangewhite" && orangewhite) {
            content += "\n4e mon: (vit-orange): \n";
            modal_cont += '<h2 style="color: #FEB486">4e mon: (vit-orange):</h2>';
            orangewhite = false;
        }

        if (chosen[index].class == "orange" && orange) {
            content += "\n3:e mon (orange-vitt): \n";
            modal_cont += '<h2 style="color: #FD7521">3:e mon (orange-vitt):</h2>';
            orange = false;
        }

        if (chosen[index].class == "greenwhite" && greenwhite) {
            content += "\n2:a mon (vit-grön): \n";
            modal_cont += '<h2 style="color: #A2CDB7">2:a mon (vit-grön):</h2>';
            greenwhite = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n2:a mon (grön-vitt): \n";
            modal_cont += '<h2 style="color: #40775A">2:a mon (grön-vitt): </h2>';
            green = false;
        }

        if (chosen[index].class == "all" && all) {
            content += "\nGrundläggande tekniker: \n";
            modal_cont += '<h2 style="color: #D474BE">Grundläggande tekniker: </h2>';
            all = false;
        }

        content += "" + chosen[index].name + "\n";
        modal_cont += "<p>" + chosen[index].name + "</p>";
        statistics += "" + chosen[index].name + "\n";
        colors.push(chosen[index].class);
    }

    let tekniker = statistics.split('\n');


    let i = 0;

    content += "\n\nFörslag på uppvärmningar:\n";

    modal_cont += "<h3>Förslag på uppvärmningar:</h3>"

    warmup.forEach(element => {
        content += element + "\n"
        modal_cont += "<p>" + element + "</p>"
    });



    modal_content.innerHTML = modal_cont + '<button class="close">Spara pass</button>';

    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        download_file(content);
    }

}

function download_file(content) {

    let date = new Date();
    date = date.toLocaleDateString();
    let file = new File(["\ufeff" + content], `pass_${date}.txt`, { type: "text/plain:charset=UTF-8" });

    url = window.URL.createObjectURL(file);

    let a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}



function search_mon() {
    clear_all();
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_field");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let row = false;

        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;
            } else {
                td.style.color = "white";
            }
        }

        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;

            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;

            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;

            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;

            } else {
                td.style.color = "white";

            }
        }

        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                td.click();
                row = true;

            } else {
                td.style.color = "white";

            }
        }

        if (!row) {
            td = tr[i].getElementsByTagName("td");
            if (td.length >= 1) {
                tr[i].style.display = "none";
            }
        }
    }
}

function clear_all() {
    let tds = document.getElementsByTagName('td');
    console.log(tds);
    for (let td of tds) {
        td?.classList.remove('chosen');

        if (td.innerHTML != "") {
            td.style.color = "black";
            td.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    let ths = document.getElementsByTagName('th');

    for (let th of ths) {
        th.style.color = "black";
    }

    let trs = document.getElementsByTagName('tr');
    for (let tr of trs) {
        tr.style.display = "table";
    }
}

function clear_all_plan() {

    let tds = document.getElementsByTagName('td');
    for (let td of tds) {

        if (td.classList[0] == 'chosen') {
            td.classList.remove('chosen');
            td.style.backgroundColor = 'rgb(255, 255, 255)';
            td.style.display = "";
        }
    }

    let trs = document.getElementsByTagName('tr');
    for (let tr of trs) {
        tr.style.display = "table";
    }
}



function clear_search() {
    let input = document.getElementById("search_field");
    input.value = "";
    clear_all()
}

function saveplan_mon() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = [];

    let trs = document.querySelectorAll(`tr`);
    trs.forEach(element => {
        if (element.children[2].classList[0] == "chosen") {
            elements.push(element.children[1])
        }
    });

    let chosen = [];


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    console.log(chosen);

    let content = "";
    let modal_cont = "";

    let statistics = "";
    let colors = [];
    content += "6:e mon (vit-gult): \n";
    modal_cont += '<h2 style="color: #FFF370">6:e mon (vit-gult):</h2>';


    let yellow = true;
    let orangewhite = true;
    let orange = true;
    let greenwhite = true;
    let green = true;
    let all = true;


    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "yellow" && yellow) {
            content += "\n5e mon (gul-vitt): \n";
            modal_cont += '<h2 style="color: #FFEB0A">5e mon (gul-vitt):</h2>';

            yellow = false;
        }

        if (chosen[index].class == "orangewhite" && orangewhite) {
            content += "\n4e mon: (vit-orange): \n";
            modal_cont += '<h2 style="color: #FEB486">4e mon: (vit-orange):</h2>';

            orangewhite = false;
        }

        if (chosen[index].class == "orange" && orange) {
            content += "\n3:e mon (orange-vitt): \n";
            modal_cont += '<h2 style="color: #FD7521">3:e mon (orange-vitt):</h2>';

            orange = false;
        }

        if (chosen[index].class == "greenwhite" && greenwhite) {
            content += "\n2:a mon (vit-grön): \n";
            modal_cont += '<h2 style="color: #A2CDB7">2:a mon (vit-grön):</h2>';

            greenwhite = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n2:a mon (grön-vitt): \n";
            modal_cont += '<h2 style="color: #40775A">2:a mon (grön-vitt): </h2>';

            green = false;
        }

        if (chosen[index].class == "all" && all) {
            content += "\nGrundläggande tekniker: \n";
            modal_cont += '<h2 style="color: #D474BE">Grundläggande tekniker: </h2>';
            all = false;
        }


        content += "" + chosen[index].name + "\n";
        modal_cont += "<p>" + chosen[index].name + "</p>";

        statistics += "" + chosen[index].name + "\n";
        colors.push(chosen[index].class);
    }

    let tekniker = statistics.split('\n');

    let i = 0;

    modal_content.innerHTML = modal_cont + '<button class="close">Spara pass</button>';

    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        download_file(content);
    }

}

function saveplan_kuy() {

    let modal = document.getElementsByClassName("modal")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];


    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let elements = [];

    let trs = document.querySelectorAll(`tr`);
    trs.forEach(element => {
        if (element.children[3].classList[0] == "chosen") {
            elements.push(element.children[1])
        }
    });

    let chosen = [];


    for (let index = 0; index < elements.length; index++) {
        chosen.push({ "class": elements[index].classList[0], "name": elements[index].innerText });
    }

    chosen.sort((a, b) => (a.class < b.class) ? 1 : ((b.class < a.class) ? -1 : 0))

    console.log(chosen);

    let content = "";
    let modal_cont = "";

    let statistics = "";
    let colors = [];
    content += "5:e kuy: \n";
    modal_cont += '<h2 style="color: rgb(255, 235, 10)">5:e kuy:</h2>';


    let orange = true;
    let green = true;
    let blue = true;
    let brown = true;
    let all = true;

    for (let index = 0; index < chosen.length; index++) {

        if (chosen[index].class == "orange" && orange) {
            content += "\n4e kuy: \n";
            modal_cont += '<h2 style="color: rgb(253, 117, 33)">4e kuy:</h2>';
            orange = false;
        }

        if (chosen[index].class == "green" && green) {
            content += "\n3:e kuy: \n";
            modal_cont += '<h2 style="color: rgb(64, 119, 90)">3e kuy:</h2>';
            green = false;
        }

        if (chosen[index].class == "blue" && blue) {
            content += "\n2:a kuy: \n";
            modal_cont += '<h2 style="color: rgb(52, 89, 149)">2a kuy:</h2>';

            blue = false;
        }

        if (chosen[index].class == "brown" && brown) {
            content += "\n1:a kuy: \n";
            modal_cont += '<h2 style="color: rgb(72, 39, 40)">1:a kuy:</h2>';

            brown = false;
        }


        if (chosen[index].class == "all" && all) {
            content += "\nGrundläggande tekniker: \n";
            modal_cont += '<h2 style="color: #D474BE">Grundläggande tekniker: </h2>';

            all = false;
        }

        content += "" + chosen[index].name + "\n";
        modal_cont += "<p>" + chosen[index].name + "</p>";

        statistics += "" + chosen[index].name + "\n";
        colors.push(chosen[index].class);


    }

    let tekniker = statistics.split('\n');

    let i = 0;


    modal_content.innerHTML = modal_cont + '<button class="close">Spara pass</button>';

    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        download_file(content);
    }

}