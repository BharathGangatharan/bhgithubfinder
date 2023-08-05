$(function(){
    $('#searchUser').on('keyup',function(e){
        let username = e.target.value;

        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'0742916610aceae8b973',
                client_secret:'2c58055e3ef5de3d67e73cec54e2faa6c77fd688'
            }
        }).done(function(user){
                $('#profile').html(`
                
                <div class="card w-50 h-50 mx-auto">
                    <div class="card-header">
                        <h5 class="card-title text-primary">${user.name}</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img style="width:100%" class="thumbnail" src="${user.avatar_url}">
                                <a target="_blank" class="btn btn-primary btn-block mt-2" href="${user.html_url}">View Profile</a>
                            </div>
                            <div class="col-md-9">
                                <span class="badge bg-primary">Public Repos: ${user.public_repos} </span>
                                <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                                <span class="badge bg-warning">Followers:${user.followers} </span>
                                <span class="badge bg-info">Following: ${user.following}</span>
                                <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item list-group-item-warning"><b>Company:</b> ${user.company}</li>
                                    <li class="list-group-item list-group-item-warning"><b>Website/blog:</b> ${user.blog}</li>
                                    <li class="list-group-item list-group-item-warning"><b>Location:</b> ${user.location}</li>
                                    <li class="list-group-item list-group-item-warning"><b>Member Since:</b> ${user.created_at}</li>
                                </ul>               
                            </div>
                        </div>
                    </div>
                </div>

                `)
        });
    });
});