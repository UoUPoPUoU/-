/**
 * Created by Administrator on 2017/2/25 0025.
 */
$("document").ready(function(){
   // $("button").click(function(){
   //     $("div").before("<p>0.0</p>");
   //
   // })
    $("button").click(function(){
        var tO = "<b>I</b>",
            tT =$("<i></i>") .text(" Can "),
            tTt = document.createElement("span").innerHTML="  do it! ";
        $("body").append("  "+tO,tT,tTt  );
    });


});
