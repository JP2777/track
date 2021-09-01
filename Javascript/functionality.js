
$(document).ready(
    
    function () 
    {

        
        // setCookie('language','en');
        // console.log(document.cookie);
        // var lang = getCookie('language');
        // console.log(lang);
        // if (lang == null)
        // {
        // }
            $('#esp_quote').hide();
            $('#translate_back').hide();
            $('#esp_head').hide();
            $('#esp_sub').hide();
            $('#esp_ttl').hide();

            $('#esp_pgh1').hide();
            $('#esp_pgh2').hide();
            $('#esp_pgh3').hide();
            $('#esp_ul1').hide();

            $('#esp_bio').hide();
            $('#esp_cred').hide();

            $('#esp_nav').hide();
            $('#esp_hm').hide();
            $('#esp_ab').hide();
            $('#esp_at').hide();
            $('#esp_ct').hide();
        

            


        // }
        // else
        // {
        //     //Hide English and display Spanish
        // }
       

        $('#sidebarCollapse').on('click', function () 
        {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        $('#translate').on('click', function () 
        {
            //lang = 1;
            $('#esp_quote').show();
            $('#eng_quote').hide();
            $('#translate').hide();
            $('#translate_back').show();
            $('#esp_head').show();
            $('#esp_sub').show();
            $('#eng_head').hide();
            $('#eng_sub').hide();
            $('#esp_ttl').show();
            $('#eng_ttl').hide();
            $('#eng_pgh1').hide();
            $('#eng_pgh2').hide();
            $('#eng_pgh3').hide();
            $('#esp_pgh1').show();
            $('#esp_pgh2').show();
            $('#esp_pgh3').show();
            $('#esp_ul1').show();
            $('#eng_ul1').hide();

            $('#eng_bio').hide();
            $('#esp_bio').show();
            $('#eng_cred').hide();
            $('#esp_cred').show();

            $('#eng_nav').hide();
            $('#esp_nav').show();
            $('#eng_hm').hide();
            $('#esp_hm').show();
            $('#eng_ab').hide();
            $('#esp_ab').show();
            $('#eng_at').hide();
            $('#esp_at').show();
            $('#eng_ct').hide();
            $('#esp_ct').show();

        });
        $('#translate_back').on('click', function () 
        {
            //lang = 0;
            $('#eng_quote').show();
            $('#esp_quote').hide();
            $('#translate').show();
            $('#translate_back').hide();
            $('#esp_head').hide();
            $('#esp_sub').hide();
            $('#eng_head').show();
            $('#eng_sub').show();
            $('#esp_ttl').hide();
            $('#eng_ttl').show();
            $('#eng_pgh1').show();
            $('#eng_pgh2').show();
            $('#eng_pgh3').show();
            $('#esp_pgh1').hide();
            $('#esp_pgh2').hide();
            $('#esp_pgh3').hide();
            $('#esp_ul1').hide();
            $('#eng_ul1').show();

            $('#eng_bio').show();
            $('#esp_bio').hide();
            $('#eng_cred').show();
            $('#esp_cred').hide();

            $('#eng_nav').show();
            $('#esp_nav').hide();
            $('#eng_hm').show();
            $('#esp_hm').hide();
            $('#eng_ab').show();
            $('#esp_ab').hide();
            $('#eng_at').show();
            $('#esp_at').hide();
            $('#eng_ct').show();
            $('#esp_ct').hide();

        });
    });

// $(document).ready(

//     function () 
//     {
        
//         $('#sidebarCollapse').on('click', function () 
//         {
//             $('#sidebar').toggleClass('active');
//             $('.collapse.in').toggleClass('in');
//             $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//         });
  
//     });
 
// function setCookie(name,value,days) 
// {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }
// function getCookie(name) 
// {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) 
//     {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
//I know it looks like spaghetti... thats becasue it is. Ypu probably have better things to do than read this. WHy are you even here??? Can you fix muy cookie problem? 
