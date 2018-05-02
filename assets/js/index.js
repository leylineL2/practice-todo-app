$(function (){
    $("#add-btn").on("click",()=>{
            if($("#message-txt").val() !== ""){
            $(".todo-list").prepend(`<li class="li-list">
            <p>${$("#message-txt").val()}</p>
            <button class="del-li">delete</button> </li>`);
        }
    });


    $(".todo-list").on("click",".del-li",(event)=>{
        
        $(event.currentTarget).parent().remove();
    });
    $(".todo-list").on("click",".li-list p",(event)=>{
        let textF = $(event.currentTarget).parent().children("p").html();        
        let liEl = $(event.currentTarget).parent();
        $(event.currentTarget).parent().empty();
        console.log($(event.currentTarget).parent())
        liEl.prepend(`
        <input type="text" class="fix-text" value="${textF}">
        <button class="modify-li">change</button>
        <button class="del-li">del</button> 
        `);
    });
    $(".todo-list").on("click",".modify-li",(event)=>{
        console.log($(event.currentTarget).parent())
        let textF = $(event.currentTarget).parent().children(".fix-text").val();     
        console.log($(event.currentTarget).parent().children())   
        let liEl = $(event.currentTarget).parent();
        $(event.currentTarget).parent().empty();
        // console.log($(event.currentTarget).parent())
        liEl.prepend(`
        <p>${textF}</p>
        <button class="del-li">delete</button> `);
        if(textF===""){
            liEl.remove();
        }
    });
});