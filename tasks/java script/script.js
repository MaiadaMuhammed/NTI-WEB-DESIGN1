// console.log (userInfo())/
function looping(startNum,endNum ,breakNum , continueNum ) {
    
    for ( var i = startNum; i <= endNum;i++ ){
        if(i==breakNum){
            break;
        }
        if(i==continueNum){
            continue;
        }
        else{console.log(i)}
        
    
    }

  }
looping(0, 10 , 8 , 4)
// looping(10, 20 , 12 , 6)
// looping(0, 8 )





 var users=[];
 function adduser(){
var userInfo={
    name : prompt("Enter User Name"),
    id : prompt("Enter User Id"),
    balance : prompt("Enter User Balance"),
}
 users.push(userInfo)
}
    adduser( )
    adduser( )
    adduser( )
    console.log(users)


    function editUserBalanceById(s, y ){
        var s = prompt("Enter Your Id you want to edit")
        var y = prompt("Enter Your Balance  you want to edit")

        var index = users.findIndex(item=> item.id == s)
        users[index].balance = y
    }
    editUserBalanceById()
    console.table(users)

    function deleteUserById(){
        var s = ("Enter id you want to delete")
        var index = users.findIndex(item=> item.id ==s)
        users.splice(index, 1)
    }
    deleteUserById()
    console.table(users)
