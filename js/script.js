$(document).ready(()=>{//This is the starting line of reasy function
    
    $("#send").click(()=>{
        $.ajax({
            url:$("#url").val(),
            success:(data,status,statcode)=>{$("#stat").html(statcode.status);
            $("#stat").html(data);
            console.log(statcode.status)}    
        })
    });

});//This is the last line of ready function