$(document).ready(()=>{//This is the starting line of reasy function
    $("#send").click(()=>{
        var meth=$("#method").val();
        $.ajax({
            url:$("#url").val(),
            method:meth,
            success:(data,status,statcode)=>{
                $("#stat").html(statcode.status);
                $("#output").html(data);
            },
            error:(xhr,status,error)=>{
                $("#stat").html(xhr.status);
                $("#output").html(status);
            },    
        })
    });
});//This is the last line of ready function