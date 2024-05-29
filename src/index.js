const students = [
    { name: "Laura", age: 22, email: "laura@email.com" },
    { name: "Anna", age: 21, email: "anna@email.com" },
    { name: "Lluis", age: 28, email: "lluis@email.com" },
    { name: "Dani", age: 21, email: "dani@email.com" },
    { name: "Leo", age: 33, email: "leo@email.com" },
    { name: "Clara", age: 24, email: "clara@email.com" },
    { name: "Marc", age: 24, email: "marc@email.com" },
    { name: "Adriana", age: 28, email: "adriana@email.com" },
    { name: "Diego", age: 32, email: "diego@email.com" },
    { name: "Mar", age: 30, email: "mar@email.com" },
    { name: "Helena", age: 22, email: "helena@email.com" },
    { name: "Javi", age: 33, email: "javi@email.com" },
    { name: "Lorena", age: 34, email: "lorena@email.com" },
    { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];
  
  const studentsList = document.getElementById("studentsList");
  const printButton = document.getElementById("printButton");
  //const studentsList.addEventListener("click", function printButton(event){
    printButton.addEventListener("click",function(event){
      console.log(students)
    students.map (e=> {
      const listItem = document.createElement("li");
      listItem.innerText= e.name + " " + e.age

      listItem.innerHtml = `<p>${e.name}</p><p>${e.age}</p>`;
    studentsList.appendChild(listItem);
   });
    })
    