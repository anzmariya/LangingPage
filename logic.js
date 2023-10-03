class Landing{
    // property
    dataBase={
        Anz:{username:"Anz",password:"Anz@123"},
        Krishna:{username:"Krishna",password:"Kri@123"},
        Sree:{username:"Sree",password:"sree@123"},
        Maneesha:{username:"Maneesha",password:"Manee@123"}
    }
    // method
    saveData(){
        if(this.dataBase){
            localStorage.setItem("database",JSON.stringify(this.dataBase))  //JSON.stringify used to covert current datatype to string
        }
    }

    // get data from local storage
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))  //JSON.parse used to get its old datatype
    }

    // register
    register()
    {
        this.getData()
        let user=uname.value
        let pswd=pass.value

        if(user=="" || pswd==""){
            alert("Please enter valid input")
        }
        else{
            if(user in this.dataBase){
                alert("User already exist")
                window.location="login.html"
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                console.log(this.dataBase);
                alert("Successfully Registered")
                this.saveData()    //calling saveData() to add the details of new registered user to the local storage
                // navigate to login page

                window.location="login.html"   //give button type as button to work this
            }
        }
    }

    login(){
        let user1=loguname.value
        let psw1=logpass.value

        // call stored database
        this.getData()
        if(user1 in this.dataBase){
            if(this.dataBase[user1].password==psw1){
                localStorage.setItem("user",user1)
                alert("Login successfull")
                // navigate to home page
                window.location="home.html"
            }
            else{
                alert("Incorrect user name or password")
            }
        }
        else{
            alert("User dosn't exist")
        }
    }

}

const obj = new Landing()
obj.getData()