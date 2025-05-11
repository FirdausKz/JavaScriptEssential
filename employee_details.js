const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specialization:'Java Script' },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000,specialization:'python' },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000,specialization:'Cmobile' },
  { id: 4, name: "Rahman", age: 40, department: "Finance", salary: 50000,specialization:'Golang' },
];

function displayEmployees(){ //menyimpan semua tampilan di totalaemployes terus di innerHTML agar output keluar
const totalEmployes = employees
  .map(
    (employe, index) =>
      ` <p>${employe.id}: name: ${employe.name} age: ${employe.age} departement: ${employe.department} salary${employe.salary} </p>`
  )
  .join("");
document.getElementById("employeesDetails").innerHTML = totalEmployes;
}

function calculateTotalSalaries() {
  const totalEmployesalary = employees.reduce(
    (acc, employe) => acc + employe.salary,0 // menghitung dengan cara acc itu di tambahkan employe salary 
    
  );
  alert(`Total gaji= ${totalEmployesalary}`);
}


function displayHREmployees() {
  const hrEmployees = employees.filter((employe) => employe.department === "HR"); //menggunakan filter ini mirip seperti if == ""
  const hrDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
    document.getElementById('employeesDetails').innerHTML = hrDisplay;
}

function findEmployeeById(employeid){
    const foundemploye = employees.find(employe => employe.id === employeid); //mekanisme pencarian menggunakan find
    if (foundemploye){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundemploye.id}: ${foundemploye.name}: ${foundemploye.name} - ${foundemploye.department} - $${foundemploye.salary}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = 'tidak ada karyawan yang ditemukan dengan ID ini';
    }
}

function findEmployeeByS(spesialis){
    const SpesialEmploye = employees.find(employe => employe.specialization === spesialis);
    if (SpesialEmploye){
        document.getElementById('employeesDetails').innerHTML = `<p> ${SpesialEmploye.id}: ${SpesialEmploye.name}- ${SpesialEmploye.department}- ${SpesialEmploye.specialization} </p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `Tidak di temukan`;
    }
}