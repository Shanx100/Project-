


Button.onclick = function () {
    const personname = document.getElementById("Name").value;
    const Deposit = document.getElementById("Deposit").value;
    const withdrawal = document.getElementById("Withdrawal").value;
    const Button = document.getElementById("Button")
    const Result = document.querySelector(".Result")
    const sound = document.getElementById("sound");
    const processing = document.getElementById("Processing");


    if (Deposit === "" & withdrawal === "") {
        window.alert("Please enter specific amounts")
        return;
    }



    class BankAcc {
        constructor(owner) {
            this.owner = owner;
            this.balance = 0;
        }
        deposit(deposit) {
            this.balance += deposit;
            return `Congratulations on depositing $${deposit} ${this.owner}`
        }
        withdrawal(Withdrawal) {
            this.balance -= Withdrawal;
            if (this.balance < Withdrawal) {
                return "You have insufficient balance to make this withdrawal"
            }
            else {
                return `Congratulations ${this.owner} on successfully withdrawing ${Withdrawal}`;
            }
        }
        displaybalance() {
            return `Your current Balance is $${this.balance}`
        }
    }
    const person = new BankAcc(personname);
    let info = [];
    info.push(person.deposit(Deposit));
    info.push(person.withdrawal(withdrawal));
    info.push(person.displaybalance());
    let content = [];
    content = info.map((item) => {
        return `<li>` + item + `</li>`
    })
    sound.currentTime = 0;
    sound.play();
    processing.textContent = `Processing Transaction!!!.Please wait for a few seconds`

    setTimeout(function () {
        processing.textContent = "";
        Result.innerHTML = `<ul>` + content.join("") + `</ul>`;
    }, 10000);

}

