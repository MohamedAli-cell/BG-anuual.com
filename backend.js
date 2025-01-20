var dictionary = new Map();
var oldSalary = new Map();
dictionary.set("01155939621", 0.3);
dictionary.set("01113176315", 0.2);
dictionary.set("01021870254", 0.1);

oldSalary.set("01155939621", 13000);
oldSalary.set("01113176315", 9000);
oldSalary.set("01021870254", 10000);


function clickSubmit() 
{
    flag = true;
    txtbox = document.getElementById("passcodetxb");
    input = txtbox.value;

    dictionary.forEach((value, key) => {
        if (key == input) {
            flag = false;
            // Redirect to a new page with the value
            document.body.innerHTML = `<h1>Salary increased ${value *100}% <br> your new Salary is ${(value * oldSalary.get(key)) + oldSalary.get(key)} EGP</h1>`;
        }
    });
    if(flag)
    {
        document.body.innerHTML = "<h1>Not found</h1>";
    }
}

// add event listener to detect the "enter" button
document.getElementById("passcodetxb").addEventListener("keydown", function(event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    // Prevent the default form submission behavior (optional)
    event.preventDefault();

    // Call the function to get the input value
    clickSubmit();
  }
});

