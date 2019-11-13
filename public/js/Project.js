       //Loading Project 
  
       $.ajax({
        type: "get",
        url: PathURL+'api/project',
        data: "json",
        success: function(response)
        {
          $.each(response, function (index, value) {
              /*
            var templateString  ='<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">'
                        +'<figure class="cc-effect"><img src="'+this.Result.Pro_image+'" alt="Image"/>'
                          +'<figcaption>'
                            +'<div class="h4">'+this.Result.Pro_Name+'</div>'
                            +'<p>'+this.Result.Pro_Type+'</p>'
                            +'</figcaption>'
                            +'</figure>'
                            +'</a>'
                            +'</div>';

                     console.log(templateString);   
                     */  
                    var templateString = '<article class="card1">'
                    + '<img src="'+this.Result.Pro_image+'" alt="Avatar" style="width:100%">'
                     +'<div class="container">'
                         +'<h4><b>'+this.Result.Pro_Name+'</b></h4>'
                         +'<p>'+this.Result.Pro_Type+'</p>'
                         +'<div class="row">'
                             +'<div class="col-md-6">'
                                 +'<a href="'+this.Result.Pro_Demo+'" target="_blank"><button type="button" class="btn btn-outline-info" style="width:100%;border-color: white;">VIEW DEMO</button></a>'
                                 +'</div>'
                                 +'<div class="col-md-6">'
                                 +'<a href="'+this.Result.Pro_Code+'" target="_blank"><button type="button" class="btn btn-outline-info" style="width:100%;border-color: white;">CODE SIMPLE</button></a>'
                               +'</div>'
                               +'</div>'
                               +'</div>'
                         +'</div>'
                         +'</article>';
                     $('#test12').append(templateString); 
                // $('#ViewProject').append(templateString);  
            })
        }
    });