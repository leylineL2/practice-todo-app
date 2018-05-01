$(function (){
    $("#add-btn").on("click",()=>{
        $(".todo-list").prepend(`<li class="li-list">
        <p>${$("#message-txt").val()}</p>
        <button class="del-li">del</button> 
        <button class="edit-li">edit</button></li>`);
    });


    $(".todo-list").on("click",".del-li",(event)=>{
        
        $(event.currentTarget).parent().remove();
    });
    $(".todo-list").on("click",".edit-li",(event)=>{
        let textF = $(event.currentTarget).parent().children("p").html();        
        let liEl = $(event.currentTarget).parent();
        $(event.currentTarget).parent().empty();
        console.log($(event.currentTarget).parent())
        liEl.prepend(`
        <input type="text" class="fix-text" value="${textF}">
        <button class="del-li">del</button> 
        <button class="modify-li">change</button>`);
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
        <button class="del-li">del</button> 
        <button class="edit-li">edit</button>`);
    });
});