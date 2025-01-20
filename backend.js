var dictionary = new Map();

dictionary.set("01155939621", "mohamed");
dictionary.set("01113176315", "mahmoudatta");
dictionary.set("01021870254", "mohamed busisness");

function clickSubmit() 
{
    flag = true;
    txtbox = document.getElementById("passcodetxb");
    input = txtbox.value;

    dictionary.forEach((value, key) => {
        if (key == input) {
            flag = false;
            // Redirect to a new page with the value
            document.body.innerHTML = `<h1>${value}</h1>`;
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

