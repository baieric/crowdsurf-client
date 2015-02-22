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
		var tracks = [];
		if(playlist){
			var access_token = getCookie("access_token");
			$.get('https://api.spotify.com/v1/tracks?ids='+playlist.tracks.slice(0, 50).join(),
				{ headers: {'Authorization': 'Bearer ' + access_token} },
				function(result){
					tracks = result;
				});
		}

		return {
			playlist: playlist,
			tracks: tracks
		}
	},
	render: function(){
		return (
			<div className="container">
				
			</div>
		)
	}
})

React.render(<Playlist playlist={playlist}></Playlist>, document.body);