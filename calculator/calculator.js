// This function run automatically when the page loaded...
(function() {

    // Generate the date.
    var today  = new Date();
    year = today.toLocaleDateString("de-DE");
    thisYear = year.substr(year.length-4, 4); // Taking only year...

    document.getElementById("year").innerHTML = thisYear;
 })();


var inputs = "";
function getData(value)
{
    if(value == 'x') value = '*';
    inputs += value;
    document.getElementById("input").value = inputs;
}

function result()
{
    document.getElementById("output").style.background = "#E7E7E7";
    try {
        if(inputs != '')
        {
            var result = eval(inputs);
            if(result == undefined)
            {
                document.getElementById("output").style.background = "red";
            }
            document.getElementById("output").value = eval(inputs);
        }
    } catch (error) {
        document.getElementById("output").style.background = "red";
        document.getElementById("output").value = "Error";
        console.log(error);
    }

}

function clean()
{
    inputs = "";
    document.getElementById('input').value = inputs;
    document.getElementById('output').value = inputs;
    document.getElementById("output").style.background = "#E7E7E7";
}

function getBack()
{
    inputs = inputs.substr(0,inputs.length-1);
    document.getElementById("input").value = inputs;
}

