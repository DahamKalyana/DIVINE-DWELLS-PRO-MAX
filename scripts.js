$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

function validation()
  {

      
      var Name = document.getElementById("name");
      var Email = document.getElementById("email");
      var Mobile = document.getElementById("mobile");

      if(Name.value == "")
      {
          Name.style.borderBottom = "1.5px solid red";
          alert("Name cannot be empty!");
          return false;

         
      }

      else if(Email.value == "")
      {
          Email.style.borderBottom = "1.5px solid red";
          alert("Email cannot be empty!");
          return false;
      }

      else if(Mobile.value == "")
      {
          Mobile.style.borderBottom = "1.5px solid red";
          alert("Mobile number cannot be empty!");
          return false;
      }

      if(isNaN(Mobile.value))
      {
          Mobile.style.borderBottom = "1.5px solid red";
          alert("Invalid Mobile Number!");
          return false;
      }

      if((Mobile.value).length <10)
      {
          Mobile.style.borderBottom = "1.5px solid red";
          alert("Mobile Number should be minimun of 10 digits!");
          return false;
      }

      if((Mobile.value).length >10)
      {
          Mobile.style.borderBottom = "1.5px solid red";
          alert("Mobile Number should be maximum of 10 digits!");
          return false;
      }
      else
      {
         alert("You will be contacted via Email!");
         return true;
      }
  }