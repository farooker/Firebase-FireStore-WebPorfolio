 
            //Loading skill
  
            $.ajax({
                type: "get",
                url: PathURL+'api/Skill',
                data: "json",
                success: function(response)
                {
                  $.each(response, function (index, value) {
                    var templateString  ='<div class="progress-container progress-primary"><span class="progress-badge">HTML</span>'
                      '<div class="progress">'
                          '<div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div><span class="progress-value">80%</span>'
                          '</div>'
                          '</div>';
                         $('#ViewSkill').append(templateString);  
                    })
                }
            });