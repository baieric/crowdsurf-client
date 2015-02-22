function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

// temp hardcoded playlist
var playlist = {
	"id": 1,
	"created_by": "wizzler",
	"title": "Awesome playlist",
	"thumb": "some.jpg",
	"timestamp": 1234567890,
	"parent": null,
	"tags": ["rock", "pop", "electronic"],
	"collaborators": ["wizzler", "efaulte"],
	"tracks": ["5Z7ygHQo02SUrFmcgpwsKW", "1x6ACsKV4UdWS2FMuPFUiT", "4bi73jCM02fMpkI11Lqmfe"]
}

var Playlist = React.createClass({
	getInitialState: function(){
		var access_token = getCookie("access_token");
		var author;
		var collaborators = [];
		playlist.collaborators.map(function (collaborator) {
			$.get('https://api.spotify.com/v1/users/'+collaborator.id,
				{ headers: {'Authorization': 'Bearer ' + access_token} },
				function(result){
					var user = result;
					collaborators.push(user);
					if(collaborator.id == playlist.created_by){
						author = user;
					}
			});
		})

		var tracks = [];
		$.get('https://api.spotify.com/v1/tracks?ids='+playlist.tracks.slice(0, 50).join(),
			{ headers: {'Authorization': 'Bearer ' + access_token} },
			function(result){
				tracks = result;
			});

		return {
			playlist: playlist,
			author: author,
			collaborators: collaborators,
			tracks: tracks
		}
	},
	render: function(){
		return (
			<div className="container">
				<div className="inline">
					<img src={this.state.playlist.thumb}/>
				</div>
				<div className="inline">
					<h2>{this.state.playlist.title}</h2>
					<p>By <a href={"/user/" + this.state.playlist.created_by}>
						{this.state.author.display_name}
					</a></p>
				</div>
				<div>
					<a href={"/playlist/" + this.state.playlist.id + "/fork"} className="btn btn-primary">Fork</a>
					<a href={"/playlist/" + this.state.playlist.id + "/history"} className="btn btn-primary">Fork History</a>
					<a href={"/playlist/" + this.state.playlist.id + "/diffs"} className="btn btn-primary">Diffs</a>
				</div>
				<iframe src={
						"https://embed.spotify.com/?uri=spotify:trackset:"
						+ this.state.playlist.title
						+ ":"
						+ this.state.playlist.tracks.join()
					}
					frameborder="0"
					allowtransparency="true"
					width="250" height="80">
				</iframe>

			</div>
		)
	}
})

React.render(<Playlist playlist={playlist}></Playlist>, document.body);