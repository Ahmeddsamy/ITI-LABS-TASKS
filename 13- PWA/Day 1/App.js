//? at first check if service worker is found
// if(navigator.serviceWorker){
if ("serviceWorker" in navigator) {
  // ~ return promise
  navigator.serviceWorker
    .register("./SW.js")
    .then(() => {
      console.log("file registered");
    })
    .catch((err) => console.log(err));
} else {
  console.log("not support serviceWorker");
}

//^ Notification API
// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     Notification.requestPermission().then((p)=>{
//         console.log(p)
//         if(p === "granted"){
//             let n = new Notification("ex",{
//                 body:"welcome to our website",
//                 tag:"wlc"
//             })
//         }
//     })
// })

// let noti ;
// document.addEventListener("visibilitychange",()=>{
//     if(document.visibilityState === "hidden"){
//         noti = new Notification("",{
//             body:"come back again",
//             tag:"VS"
//         })
//     }else{
//         noti.close()
//     }
// })

function askNotificationPermissionAndMonitor() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      monitorTabSwitch();
    } else {
      console.log("Notification permission denied");
    }
  });
}

function monitorTabSwitch() {
  let counter = 0;
  let intervalID = null;

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      intervalID = setInterval(() => {
        counter++;
        new Notification("Time " + counter + " seconds.");
      }, 1000);
    } else {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
        console.log("Time stopped " + counter + " seconds.");
        counter = 0;
      }
    }
  });
}

window.askNotificationPermissionAndMonitor =
  askNotificationPermissionAndMonitor;
