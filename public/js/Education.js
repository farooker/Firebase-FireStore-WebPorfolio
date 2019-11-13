
        //Loading Edcation
        $.ajax({
            type: "get",
            url: PathURL+'api/Education',
            data: "json",
            success: function(response)
            {
              $.each(response, function (index, value) {
                var ViewEducation='<div class="card">'
             +'<div class="row">'
            +'<div class="col-md-3" style="background-color:darkorange">'
                +'<div class="card-body cc-education-header">'
                   + '<p>'+this.Result.Year+'</p>'
                    +' <div class="h5">'+this.Result.Class+'</div>'
                    +'</div>'
                    +'</div>'
                    +'<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">'
                        +'<div class="card-body">'
                           + '<div class="h5">'+this.Result.Bachelor+'</div>'
                           + '<p class="category">'+this.Result.School+'</p>'
                           + '<p>'+this.Result.Discription+'</p>'
                            +'</div>'
                            +'</div>'
                            +'</div>'
                           + '</div>';
                  $('#ViewEducation').append(ViewEducation);
                })
            }
        });