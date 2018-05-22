$(function (){
  $("#regist-btn").on("click", () =>{
    console.log("hogehoge")
    const name = $("input[name='input-name']").val();
    const age = $("input[name='input-age']").val();
    const reqJson ={
      name: name,
      age: age
    };
    $.ajax({
      type:"POST",
      url: "/",
      data: reqJson,
      dataType: "json"
    })
    .done((res) =>{
      console.log(res.body);
    });
    console.log("send,main");
    console.log(reqJson);
  });


  $("input[name='update-text']").on("click", () =>{
    console.log("hogehoge")
    const name = $("input[name='input-name']").val();
    const age = $("input[name='input-age']").val();
    if(name !=="" && age !== ""){
      const reqJson ={
        name: name,
        age: age
      };
      $.ajax({
        type:"PUT",
        url: "/update",
        data: reqJson,
        dataType: "json"
      }
      )
      .done((res) =>{
        console.log(res.body);
      });
    }
    console.log("send,main");
    console.log(reqJson);
  });

  $("input[name='delete-text']").on("click", () =>{
    console.log("hogehoge")
    const name = $("input[name='input-name']").val();
    const age = $("input[name='input-age']").val();
    if(name !==""){
      const reqJson ={
        name: name,
        age: age
      };
      $.ajax({
        type:"DELETE",
        url: "/delete",
        data: reqJson,
        dataType: "json"
      }
      )
      .done((res) =>{
        console.log(res.body);
      });
    }
    console.log("send,main");
    console.log(reqJson);
  });

  $("#search-btn").on("click", () =>{
    console.log("hogehoge")
    const searchText = $("input[name='search-text']").val();
    const reqJson ={
      searchText: searchText,
    };
    $.ajax({
      type:"POST",
      url: "/search",
      data: reqJson,
      dataType: "json"
    })
    .done((res) =>{
      console.log(res);
      $(".search-result").empty();
      $(".search-result").append(`名前:${res.name}<br> 年齢:${res.age}`);
    });
    console.log("send,main");
  });
});