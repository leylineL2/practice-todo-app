$(function (){
    // window.localStorage.getItem('todo');
    // window.localStorage.setItem('todo', '');
    getLiItems();
    
    $("#add-btn").on("click",()=>{
            if($("#message-txt").val() !== ""){
            $(".todo-list").prepend(`<li class="li-list">
            <p>${$("#message-txt").val()}</p>
            <button class="del-li">delete</button> </li>`);
            setLiItems();
        }
    });
    $("#allclear-btn").on("click",()=>{
        $(".todo-list").empty();
        setLiItems();
    });



    $(".todo-list").on("click",".del-li",(event)=>{
        $(event.currentTarget).parent().remove();
        setLiItems();
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
        setLiItems();
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
        setLiItems();
    });

});
function setLiItems(){
    let array =[];
    $(".li-list").children();
    for(let text of $(".li-list").children("p")){
        console.log(text);
        console.log(text.textContent);
        array.push(text.textContent);
    }
    console.log(array);
    window.localStorage.setItem('todo', array.toString());
}
function getLiItems(){
    var str = window.localStorage.getItem('todo');

    
    if(str !== null || str !== ""){
        let array = str.split(",");
        console.log(array);
        for(let text of array.reverse()){
            $(".todo-list").prepend(`<li class="li-list">
            <p>${text}</p>
            <button class="del-li">delete</button> </li>`);
        }
    }   
    
}