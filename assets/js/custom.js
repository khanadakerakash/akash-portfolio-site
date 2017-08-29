// A $( document ).ready() block.
$( document ).ready(function() {


	//for profile
    $("#profile").animatedModal({
        modalTarget:'for-profile',
        // animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'#F2F2F2',
        //Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    //for portfolio
    $("#portfolio").animatedModal({
     	modalTarget:'for-portfolio',
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'#F2F2F2',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    //for resume
    $("#resume").animatedModal({
        modalTarget:'for-resume',
        // animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'#F2F2F2',
        //Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    //for resume
    $("#contact").animatedModal({
        modalTarget:'for-contact',
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'#F2F2F2',
        //Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },           
        afterOpen: function() {
            console.log("The animation is completed");
        }, 
        beforeClose: function() {
            console.log("The animation was called");
        }, 
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });

    $('#carousel').carousel({
      interval: 2000
    });

});

//preloader
jQuery(window).on('load',function(){ 
    jQuery('.loader').fadeOut();
    jQuery('#preloader').delay(450).fadeOut('slow');
    jQuery('body').delay(450);    
});

