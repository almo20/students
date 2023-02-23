
var students = [
    {"Name": "Alex", "Matrikelnummer": "1", "NC": 2},
    {"Name": "Ralf", "Matrikelnummer": "2", "NC": 5},
    {"Name": "Mehmet", "Matrikelnummer": "3", "NC": 4},
    {"Name": "Emine", "Matrikelnummer": "4", "NC": 3},
    {"Name": "Boris", "Matrikelnummer": "5", "NC": 2},
]

function main(){
    var totalNc = students.length
    var sumNc = 0;
    
    for (let i = 0; i < students.length; i++){
        console.log(students[i])
        sumNc += students[i].NC
    }
    var averageNc = sumNc / totalNc
    console.log(averageNc)
}

function add(){
    
    var name = document.getElementById("inputName").value;
    var id = parseInt(document.getElementById("inputID").value);
    var nc = parseFloat(document.getElementById("inputNC").value);
    
    var student = {
        "Name": name,
        "Matrikelnummer": id,
        "NC": nc
    }

    students.push(student);
    console.log(student);

}
console.log(students)
