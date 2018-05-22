function getLiItems() {
    
    $.ajax({
        type:"GET",
        url: "/todo",
    })
    .done((res) =>{
        console.log(res)
        
        for(let doc of res){
            let liList = $("<li>").addClass("li-list")
            liList.append($("<p>").text(`${doc.todoData}`));
            liList.append($("<button>").addClass("del-li").text("delete"));
            liList.append($("<input>").addClass("mongo_id").attr("type","hidden").val(`${doc._id}`));
            $(".todo-list").prepend(liList);
        }
    });

}

function setLiItem(addText){
    if(addText !== ""){
        // array.splice(i,1);
        const reqJson ={
            data :addText,
        };
        $.ajax({
            type:"POST",
            url: "/todo",
            data: reqJson,
            dataType: "json"
        })
        .done((res) =>{
            console.log(res)
            // return res;
            let liList = $("<li>").addClass("li-list")
            liList.append($("<p>").text(`${res.todoData}`));
            liList.append($("<button>").addClass("del-li").text("delete"));
            liList.append($("<input>").addClass("mongo_id").attr("type","hidden").val(`${res._id}`));
            $(".todo-list").prepend(liList);
        });
    }
}

function updateLiItem(_id,fixText){
    console.log(_id)
    if(fixText !== "" && _id !==""){
        // array.splice(i,1);
        const reqJson ={
            data: fixText,
            _id: _id,
        };
        $.ajax({
            type:"PUT",
            url: "/todo",
            data: reqJson,
            dataType: "json"
        })
        .done((res) =>{
            return res.body;
        });
    }
    // array.push(text.textContent);
}

function deleteLiItem(_id) {
    const reqJson ={
        _id: _id,
    };
    $.ajax({
        type:"DELETE",
        url: "/todo",
        data: reqJson,
        dataType: "json",
    })
    .done((res) =>{
    });

}

$(function (){
    // window.localStorage.getItem('todo');
    // window.localStorage.setItem('todo', '');
    getLiItems();

    $("#add-btn").on("click",()=>{
        if($("#message-txt").val() !== ""){
            setLiItem($("#message-txt").val());
        }
    });
    $("#all-clear-btn").on("click",()=>{
        console.log($(".mongo_id"));
        for(let mongo_id of $(".mongo_id")){
            deleteLiItem($(mongo_id).val())
        }
        $(".todo-list").empty();
    });



    $(".todo-list").on("click",".del-li",(event)=>{
        let _id = $(event.currentTarget).parent().children(".mongo_id").val();
        deleteLiItem(_id);
        deleteLiItem($(event.currentTarget).parent().children(".mongo_id").val());
        console.log($(event.currentTarget).parent());
        $(event.currentTarget).parent().remove();
    });


    $(".todo-list").on("click",".li-list p",".mongo_id",(event)=>{
        let textF = $(event.currentTarget).parent().children("p").html();        
        let liEl = $(event.currentTarget).parent();
        let _id = $(event.currentTarget).parent().children(".mongo_id").val()
        console.log($(event.currentTarget).parent().children(".mongo_id").val())
        console.log($(event.currentTarget).parent().children(".mongo_id"))
        console.log($(event.currentTarget).parent())
        $(event.currentTarget).parent().empty();
        // $("<input>")
        liEl.append($("<input>").addClass("fix-text").val(`${textF}`));
        liEl.append($("<button>").addClass("modify-li").text("change"));
        liEl.append($("<input>").addClass("mongo_id").attr("type","hidden").val(`${_id}`));
        // liEl.prepend(`
        // <input type="text" class="fix-text" value="">
        // <button class="modify-li">change</button>
        // <button class="del-li">del</button> 
        // <input class="mongo_id", type="hidden",value="">
        // `);
    });
    $(".todo-list").on("click",".modify-li",(event)=>{
        console.log($("li.li-list").index($(event.currentTarget).parent()))
        let textF = $(event.currentTarget).parent().children(".fix-text").val();     
        let _id = $(event.currentTarget).parent().children(".mongo_id").val();
        let liEl = $(event.currentTarget).parent();
        console.log(liEl);
        console.log(typeof textF)
        console.log(textF === "")
        if(textF===""){
            deleteLiItem(_id);
            $(event.currentTarget).parent().remove();
            // console.log($("li.li-list").index($(event.currentTarget).parent()));
        }
        else{
            updateLiItem(_id,textF);
            $(event.currentTarget).parent().empty();
            // console.log($(event.currentTarget).parent())
            liEl.append($("<p>").text(`${textF}`));
            liEl.append($("<button>").addClass("del-li").text("delete"));
            liEl.append($("<input>").addClass("mongo_id").attr("type","hidden").val(`${_id}`));
        }

    });

})
