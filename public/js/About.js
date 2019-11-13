  //loading about
  $.ajax({
    type: "get",
    url: PathURL+'api/About',
    data: "json",
    success: function(data){
        if(data["Error"]==false)
        {
                document.getElementById('age').innerHTML = data["Result"]["Age"];
                document.getElementById('email').innerHTML = data["Result"]["Email"];
                document.getElementById('tel').innerHTML = data["Result"]["Tel"];
                document.getElementById('titleConnent').innerHTML = data["Result"]["About"];
    
        }else
        {
          alert("Try agian ")
        }
     
    }
});