var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#message");
var table = document.querySelector(".change-return");

var awailableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", changeOperation)

function changeOperation()
    {
        hideMassage();
        if(Number(billAmount.value) > 0)
        {
            var cash = Number(cashGiven.value);
            var bill = Number(billAmount.value);

            if(cash > bill)
                {
                    var amountToBeReturn = Number(cashGiven.value) -Number(billAmount.value);
                    changeCalculator(amountToBeReturn);
                }
            else if(cash === bill)
            {
                equalAmount("Bill has been paid. No need to return change!");
            }        
        }
        else
        {
            invalidInput("Please enter the amount greater than zero");
        }
    }

function hideMassage()
    {
        message.style.display = "none";
    }

function showMassage()
    {
        message.style.display = "block";
    }

function invalidInput( msg )
    {
        showMassage();
        message.innerHTML = msg;
    }

function equalAmount( msg )
    {
        showMassage();
        message.innerHTML = msg;
        message.style.color = "#facc15";
    }

function changeCalculator(amountToBeReturn)
    {
        for(var i=0; i<awailableNotes.length; i++)
            {
                var numberOfNotes = Math.trunc(amountToBeReturn / awailableNotes[i]);
                amountToBeReturn = amountToBeReturn % awailableNotes[i];
                noOfNotes[i].innerHTML = numberOfNotes;
            }
    }