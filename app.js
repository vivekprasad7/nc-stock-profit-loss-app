var initialPrice =  document.querySelector("#initial-price");
var stocksQuantity =  document.querySelector("#stocks-quantity");
var currentPrice =  document.querySelector("#current-price");

const button = document.querySelector("#button");

const output = document.querySelector("#output");




function calculateProfitAndLoss (initial, quantity, current){
    if (initial > current){
        //loss logic
        var loss =   (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        output.innerText = (`Loss: ${loss} and Loss Percentage: ${lossPercentage}`)
    }else if( initial < current){
        //profit logic
        var profit =   (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        output.innerText = (`Profit: ${profit} and Profit Percentage: ${profitPercentage}`);


    } else {
        // the rest of logic
        
        output.innerText =("No pain no gain, no gain no pain.");

    }
}

function outputHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var  curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

}



button.addEventListener('click', outputHandler);