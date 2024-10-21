//Promise - in javascript are the object which help us making the decision on the bases of reponse object we get
//Promise

//1. CallBack - way when we can't initiate all the calls in parallel

// SignInUser(AuthenticationAPICallback, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI, RedirectToPage)
// {
//     let response = AuthenticationAPICallback(username, password)
//     if(response == null){
//         SignUpUsrCallBack(userObject)
//     } else {
//         let userRoleData = AuthorizationAPI(response.authToken);
//         if(userRoleData == null){
//             SignInUser(AuthenticationAPICallback, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI)
//         } else {
//             let nextPage = RedirectionAPI(response.authToken, userRoleData.userRole);
//             if(nextPage == null){
//                 SignInUser(AuthenticationAPICallback, SignUpUsrCallBack, AuthorizationAPI, RedirectionAPI)
//             } else {
//                 RedirectToPage(nextPage.pageLink)
//             }
//         }
//     }
// }

//call back hell - situation happens if any of the dependent output are not having the correct status in response

//2. Promise Object - Resolve and reject are main callbacks of js-promise library and it allows us to add the statuses as well

// let authPromise = new Promise((resolve, reject) => {
    
    // let authToken = AuthenticationAPI(username, password)

    // if(authToken != null){
    //     resolve({
    //         tokenCode : authToken.token,
    //         status : authToken.success,
    //         msg : authToken.msg
    //     })
    // } else {
    //     reject({

    //         tokenCode : "token failure",
    //         status : authToken.error,
    //         msg : authToken.msg
    //     })
    // }

//     setTimeout(() => {
//         resolve({
//             authToken : "refdhjwgh1819yhbfh",
//             status : "success",
//             msg : "Authentication Successful at server"
//         })
//     }, 2000);

//     setTimeout(() => {
//         reject({
//             authToken : "token failure",
//             status : "error",
//             msg : "Authentication Failed at server - PROD2512"
//         })
//     }, 1990);
// })

// console.log(authPromise)

// // once we get response we can decide to move to next call
// authPromise.then((data, error) => {
//     console.log(data); 
//     console.log(error);
// }) //result of successful promise - resolved
// .catch((data, error) => {
//     console.log(data);
//     console.log(error);
// }) //result of failed promise - rejected

//Practice: studentInfo promise object that returns resolve and reject data after two seconds

let studentInfo = new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve({
            studentId : 1,
            studentName : "Stacy",
            msg : "This is a student"
        })
    }, 2000)

    setTimeout(() => {
        reject({
            studentId : NaN,
            studentName : "No Name",
            msg : "This is not a student"
        })
    }, 1990)
})

console.log(studentInfo)

studentInfo.then((data, error) =>{
    console.log(data);
    console.log(error);
})

.catch((data, error) =>{
    console.log(data);
    console.log(error);
})
