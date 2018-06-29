let cardNumberList = [1234567890, 1234567891, 1234567893, 1234567894];
let pinNumberList = [1234, 1235, 1236, 1237];
let accountBalanceList = [1000, 1200, 8000, 7900];
let tempHolder;

function cardNumberVerification() {
  let cardNumber = document.getElementById("cardNumber").value;
  let pinNumber = document.getElementById("pinNumber").value;

  if (cardNumber.length !== 10 && pinNumber.length != 4) {
    document.getElementById("verificationResult").innerHTML =
      "Invalid Card Number and/or PIN";
    document.getElementById("userBlock").style.display = "none";
  } else {
    for (let i = 0; i <= 4; i++) {
      if (cardNumberList[i] == cardNumber) {
        if (pinNumberList[i] == pinNumber) {
          document.getElementById("userBlock").style.display = "block";
          document.getElementById("verificationResult").innerHTML = " ";
          tempHolder = i;
          break;
        } else {
          document.getElementById("verificationResult").innerHTML =
            "Card Number or Pin Not Found";
        }
      }
    }
  }
}

function addNewCard() {
  let newPin = parseFloat(prompt("Please Enter Your New 4 Digit PIN"), "");

  pinNumberList.push(newPin);
  let newCardNumber = Math.floor(Math.random() * 9000000000);
  cardNumberList.push(newCardNumber);

  accountBalanceList.push("0");
  alert("Your New Card Number Is " + newCardNumber);
}

function balance() {
  alert(
    "Balance Avaliable In Your Account Is " + accountBalanceList[tempHolder]
  );
}

function deposit() {
  alert(
    "Balance Avaliable In Your Account Is " + accountBalanceList[tempHolder]
  );
  let depositAmount = parseFloat(prompt("Please Enter The Deposit Amount"), 16);

  if ((depositAmount == "a", "b", "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')) {
    alert("Please Enter A Number");
  } else {
    accountBalanceList[tempHolder] =
      accountBalanceList[tempHolder] + depositAmount;
    alert(
      "New Balance Avaliable In Your Account Is " +
        accountBalanceList[tempHolder]
    );
  }
}

function withdrawl() {
  alert(
    "Balance Avaliable In Your Account Is " + accountBalanceList[tempHolder]
  );
  let withdrawlAmount = parseFloat(
    prompt("Please Enter The Withdrawl Amount"),
    ""
  );

  if (withdrawlAmount <= accountBalanceList[tempHolder]) {
    accountBalanceList[tempHolder] =
      accountBalanceList[tempHolder] - withdrawlAmount;
    alert(
      "New Balance Avaliable In Your Account Is " +
        accountBalanceList[tempHolder]
    );
  } else {
    alert(
      "Withdrawing Amount Is Greater Than Avaliable Balance In Your Account. Please Enter A Lower Amount"
    );
    withdrawl();
  }
}

function logout() {
  document.getElementById("cardNumber").value = "";
  document.getElementById("pinNumber").value = "";
  document.getElementById("userBlock").style.display = "none";
}
