$(document).ready(() =>{
  let counter = () =>{
    let unread = $(".unread");
  $(".counter").text(unread.length);

  }
  counter();
  
  // unmark read notifications from the orange dot
  let notification = $(".notification");
  for(let i = 0; i < notification.length; i++){
    if(notification.eq(i).hasClass("unread")){
      notification.eq(i).find(".unread-span").removeClass("none");
    }
  }
  notification.click((e) =>{
    if(notification.hasClass("unread")){
      $(e.target).removeClass("unread");
      $(e.target).find(".unread-span").addClass("none");
      counter();
    }
  })
  $(".notifi-text").click((e)=>{
    if($(e.target).parent().hasClass("unread")){
      $(e.target).parent().removeClass("unread");
      $(e.target).find(".unread-span").addClass("none");
      counter();
    }
  });
  $(".date").click((e) =>{
    if($(e.target).parent().parent().hasClass("unread")){
      $(e.target).parent().parent().removeClass("unread");
      $(e.target).parent().find(".unread-span").addClass("none");
      counter();
    }
  });
  // Read all button
  let mark_read = $(".main-btn");
  mark_read.click(() => {
    for(let i = 0; i < notification.length; i++){
      if(notification.eq(i).hasClass("unread")){
        notification.eq(i).find(".unread-span").addClass("none");
        notification.eq(i).removeClass("unread");
      }
    }
    
    counter();
  });

  let notification_pannel = $(".container-fluid");
  $(".arrow").click(()=>{
    
    if(notification_pannel.height() == 0){
      notification_pannel.css("height", `${notification_pannel.prop("scrollHeight")}px`);
      $(".arrow").addClass("rotation");
      for(let n = 0; n < notification.length; n++){
        notification.eq(n).addClass("animate__animated animate__backInUp");
        notification.eq(n).addClass(`animate__delay-${n}s`);
      }
    } else if(notification_pannel.height() != 0) {
      for(let n = 0; n < notification.length; n++){
        notification.eq(n).removeClass("animate__animated animate__backInUp");
        notification.eq(n).removeClass(`animate__delay-${n}s`);
      }
      notification_pannel.css("height", "0");
      $(".arrow").removeClass("rotation");
    }
  });

});

wow = new WOW(
  {
  boxClass:     'animate__animated',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
});
wow.init();