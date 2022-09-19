

// function showSignup(){
//     document.getElementById("sign").style.display = "fixed";
//     document.getElementById("log").style.display = "none";
//     // document.getElementById("signUpBtn").style.borderBottom = "rgba(10, 136, 43, 0.5)";
//     // document.getElementById("logInBtn").style.borderBottom = "red";
// }
// function showLogin(){
//     document.getElementById("sign").style.display = "none";
//     document.getElementById("log").style.display = "fixed";
// //     document.getElementById("signUpBtn").style.borderBottom = "red";
// //     document.getElementById("logInBtn").style.borderBottom = "rgba(10, 136, 43, 0.5)";
// // }

// }


// const signUpButton = document.getElementById('signUpBtn');
//     const signInButton = document.getElementById('logInBtn');
//     const container = document.getElementById('container');

//     signUpButton.addEventListener('click', () => {
//         container.classList.add("right-panel-active");
//     });
//     signInButton.addEventListener('click', () => {
//         container.classList.remove("right-panel-active");
//     });

// function toggleSignup(){
//     // document.getElementsByClassName("logInBtn").style.backgroundColor="#fff";
//     //  document.getElementsByClassName("logInBtn").style.color="#222";
//      document.getElementsByClassName("signUpBtn").style.borderColor = "red"
//     //  document.getElementsByClassName("signUpBtn").style.color="#fff";
//      document.getElementById("log").style.display="none";
//      document.getElementById("log").style.display="block";
//  }
 
//  function toggleLogin(){
//      document.getElementById("logInBtn").style.borderColor = "red"
//     //  document.getElementById("logInBtn").style.color="#fff";
//     //  document.getElementsByClassName("signUpBtn").style.backgroundColor="#fff";
//     //  document.getElementsByClassName("signUpBtn").style.color="#222";
//      document.getElementById("log").style.display="none";
//      document.getElementById("log").style.display="block";
//  }
 /* Show login form on button click */
 
// $('.loginBtn').click(function(){
//     $('.login').show();
//     $('.signUp').hide();
//     /* border bottom on button click */
//     $('.loginBtn').css({'border-bottom' : '2px solid #ff4141'});
//     /* remove border after click */
//     $('.signUpBtn').css({'border-style' : 'none'});
//   });
   
   
//   /* Show sign Up form on button click */
   
//   $('.signUpBtn').click(function(){
//     $('.login').hide();
//     $('.signUp').show();
//     /* border bottom on button click */
//     $('.signUpBtn').css({'border-bottom' : '2px solid #ff4141'});
//      /* remove border after click */
//      $('.loginBtn').css({'border-style' : 'none'});



var div1 = document.getElementById("div1")
var div2 = div1.getElementsByClassName("form")[0]
var div3 = div2.getElementsByClassName("btn")[0]
var btn1  = div3.getElementsByClassName("signUpBtn")[0]
var btn2 = div3.getElementsByClassName("loginBtn")[0]

btn1.addEventListener("click",function(){
    document.forms[1].style.visibility = 'hidden';
    document.forms[1].style.display = 'none';
    document.forms[0].style.display = 'block';
    document.forms[0].style.visibility = 'visible';

    btn1.style.borderBottom = '2px solid #ff4141';
    btn2.style.borderBottom='none';
})


btn2.addEventListener("click",function(){
    document.forms[0].style.visibility = 'hidden';
    document.forms[0].style.display = 'none';
    document.forms[1].style.display = 'block';
    document.forms[1].style.visibility = 'visible';
    
    btn2.style.borderBottom = '2px solid #ff4141';
    btn1.style.borderBottom='none';
})



//   });


  
    // var butt = document.getElementsByClassName("loginBtn")[0]

    // butt.addEventListener("click",function(){
    //     // document.getElementsByClassName("login").style.display = '';
    //     document.getElementsByClassName("login")[0].hidden=true;
    //     document.getElementsByClassName("signUp")[0].hidden=false;
    //     // document.getElementsByClassName("loginBtn").style.borderBottomWidth = "10px";
    //     // document.getElementsByClassName("signUpBtn").style.border= 'none';

    // })

    // var signn = document.getElementsByClassName("signUpBtn")[0]

    // signn.addEventListener("click",function(){
    //     document.getElementsByClassName("login")[0].hidden=false;
        
    //     document.getElementsByClassName("signUp")[0].hidden=true;
    // })


  
