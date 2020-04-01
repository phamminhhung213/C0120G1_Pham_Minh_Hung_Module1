let listCustomers = [];
let checkDeleteCustomer = false;
let checkEditCustomer = false;
let checkDisplayTotalPay = false;
let validateBirthday = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-9])|((1)[0-2])(\/)\d{4}$/;
let validateEmail =  /^\w+([\.-]?\w)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function displayMainMenu() {
    let choose = prompt(
        "1. Add New Customer" +
        "\n2. Display Information Customer" +
        "\n3. Display Total Pay Of Customer" +
        "\n4. Edit Information Customer" +
        "\n5. Delete Customer" +
        "\n6. Exit");
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            chooseCustomerEdit();
            break;
        case "5":
            chooseDeleteCustomer();
            break;
        case "6":
            return;
        default:
            alert("Failed !!!!!");
            break;
    }
}
function addNewCustomer() {
    let checkBirthday = false;
    let checkEmail = false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter name customer: "));
    cus.setIdCard(prompt("Enter id card customer: "));
    do {
        cus.setBirthdayCustomer (prompt ("Enter birthday customer (dd/MM/YYYY): "));
        if(validateBirthday.test(cus.getBirthdayCustomer())){
            checkBirthday = true;
        }else {
            alert("Birthday is invalid. Please try again");
        }
    }while (!checkBirthday);
    do {
        cus.setEmailCustomer (prompt ("Enter email customer"));
        if(validateEmail.test(cus.getEmailCustomer())){
            checkEmail = true;
        }else {
            alert("Email is invalid. Please try again");
        }
    }while (!checkEmail)
    cus.setAddressCustomer(prompt("Enter address customer: "));
    cus.setTypeCustomer(prompt("Enter type customer: "));
    cus.setDiscount(prompt("Enter discount: "));
    cus.setNumberOfAccompanying(prompt("Enter number of accompanying: "));
    cus.setTypeRoom(prompt("Enter type room: "));
    cus.setRentDays(prompt("Enter rent days: "));
    cus.setTypeService(prompt("Enter type service: "));
    listCustomers.push(cus);
    displayMainMenu();
}

function displayCustomers() {
    let result = "";
    for (let i = 0; i < listCustomers.length; i++)
    {
        result += "\n" + (i+1) + "." + "Name : " + listCustomers[i].getNameCustomer()+
            "; Id Card: " + listCustomers[i].getIdCard();
    }
    result += "\n" + (listCustomers.length +1)+ "Back to Menu";
    let  chooseDisplayInfo = prompt(result);
    if (chooseDisplayInfo.toString() !== (listCustomers.length+1).toString()) {
        if (!checkDeleteCustomer && !checkDisplayTotalPay) {
            displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else if(checkDeleteCustomer){
            deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        }else{
            displayTotalPay(Number.parseInt(chooseDisplayInfo) - 1);
        }
    }
    else  {
        checkDisplayTotalPay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainMenu();
    }
}
function displayInformationCustomer(index) {
    if (checkEditCustomer )
    {
        let chooseInfoEdit = prompt("1. Name :" +listCustomers[index].getNameCustomer()+
            "\n2.Id Card :" + listCustomers[index].getIdCard()+
            "\n3.Birthday :" + listCustomers[index].getBirthdayCustomer()+
            "\n4.Email :" + listCustomers[index].getEmailCustomer()+
            "\n5.Address :" + listCustomers[index].getAddressCustomer()+
            "\n6.Type Customer :" + listCustomers[index].getTypeCustomer()+
            "\n7.Discount :" + listCustomers[index].getDiscount()+
            "\n8.Number Of Accompanying :" + listCustomers[index].getNumberOfAccompanying()+
            "\n9.Type Room :" + listCustomers[index].getTypeRoom()+
            "\n10.Rent Day :" + listCustomers[index].getRentDays()+
            "\n11.Type Service :" + listCustomers[index].getTypeService()+
            "\n12. Back");
        if (chooseInfoEdit.toString() !== "12"){
            editInformationCustomer(Number.parseInt(chooseInfoEdit)-1);
        }
        else
        {
            displayMainMenu();
        }
    }
    alert("Information of Customer:\n" +
        "Name :" +listCustomers[index].getNameCustomer()+
        "\nId Card :" + listCustomers[index].getIdCard()+
        "\nBirthday :" + listCustomers[index].getBirthdayCustomer()+
        "\nEmail :" + listCustomers[index].getEmailCustomer()+
        "\nAddress :" + listCustomers[index].getAddressCustomer()+
        "\nType Customer :" + listCustomers[index].getTypeCustomer()+
        "\nDiscount :" + listCustomers[index].getDiscount()+
        "\nNumber Of Accompanying :" + listCustomers[index].getNumberOfAccompanying()+
        "\nType Room :" + listCustomers[index].getTypeRoom()+
        "\nRent Day :" + listCustomers[index].getRentDays()+
        "\nType Service :" + listCustomers[index].getTypeService()
    );
    displayMainMenu();
}

function chooseDisplayTotalPay() {
    checkDisplayTotalPay = true;
    displayCustomers();
}

function displayTotalPay(index) {
    alert(listCustomers[index].totalPays());
    checkDisplayTotalPay = false;
    displayMainMenu();
}

function chooseCustomerEdit() {
    checkEditCustomer = true;
    displayCustomers();
}
function editInformationCustomer(index) {
    let editInfo = prompt("Enter Info You Want Change: ");
    switch (index) {
        case 0:
            listCustomers[index].setNameCustomer(editInfo);
            break;
        case 1:
            arrListCustomer[index].setIdCard(editInfo);
            break;
        case 2:
            arrListCustomer[index].setBirthdayCustomer(editInfo);
            break;
        case 3:
            arrListCustomer[index].setEmailCustomer(editInfo);
            break;
        case 4:
            arrListCustomer[index].setAddressCustomer(editInfo);
            break;
        case 5:
            arrListCustomer[index].setTypeCustomer(editInfo);
            break;
        case 6:
            arrListCustomer[index].setDiscount(editInfo);
            break;
        case 7:
            arrListCustomer[index].setNumberOfAccompanying(editInfo);
            break;
        case 8:
            arrListCustomer[index].setTypeRoom(editInfo);
            break;
        case 9:
            arrListCustomer[index].setRentDays(editInfo);
            break;
        case 10:
            arrListCustomer[index].setTypeService(editInfo);
            break;
        default:
            alert("Fail!");
            return;
    }
    checkEditCustomer = false;
    displayMainMenu();
}
function  chooseDeleteCustomer() {
    checkDeleteCustomer = true;
    displayCustomers();
}
function  deleteCustomer(index) {
    let chooseConfirm = prompt("Are You Sure Delete Customer: Name: " +listCustomers[index].getNameCustomer()+
        "; Id Card: " +listCustomers[index].getIdCard()+
        "\n1.Yes\n2.No");
    if (chooseConfirm === "1"){
        listCustomers.slice(index,1);
        alert("Delete Complete!");
    }
    checkDeleteCustomer = false;
    displayMainMenu();
}

displayMainMenu();
// 6