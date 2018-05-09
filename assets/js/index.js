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
        // console.log($(event.currentTarget).parent().parent());
        // console.log($(event.currentTarget).parent().index());
        let textF = $(event.currentTarget).parent().children("p").html();        
        let liEl = $(event.currentTarget).parent();
        $(event.currentTarget).parent().empty();
        console.log($(event.currentTarget).parent())
        liEl.prepend(`
        <input type="text" class="fix-text" value="${textF}">
        <button class="modify-li">change</button>
        <button class="del-li">del</button> 
        `);
        // setLiItems();
    });
    $(".todo-list").on("click",".modify-li",(event)=>{
        console.log($("li.li-list").index($(event.currentTarget).parent()))
        let textF = $(event.currentTarget).parent().children(".fix-text").val();     
        console.log($(event.currentTarget).parent().children());
        i = $("li.li-list").index($(event.currentTarget).parent())
        let liEl = $(event.currentTarget).parent();
        $(event.currentTarget).parent().empty();
        // console.log($(event.currentTarget).parent())
        liEl.prepend(`
        <p>${textF}</p>
        <button class="del-li">delete</button> `);
        console.log($("li.li-list").index($(event.currentTarget).parent()));
        if(textF===""){
            liEl.remove();
            console.log($("li.li-list").index($(event.currentTarget).parent()));
        }
        setLiItem(i,textF);
    });

});
function setLiItems(){
    let array =[];
    $(".li-list").children();
    for(let text of $(".li-list").children("p")){
        array.push(text.textContent);
    }
    console.log(array);
    window.localStorage.setItem('todo', array.toString());
}
function setLiItem(i,fixText){
    var str = window.localStorage.getItem('todo');
    let array = str.split(",");
    if(fixText === ""){
        array.splice(i,1);
    }else{
        array[i] = fixText;
    }
    // array.push(text.textContent);
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