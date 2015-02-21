// temp hardcoded playlist
var playlist = {
	"id": 1,
	"created_by": 1,
	"title": "Awesome playlist",
	"thumb": "some.jpg",
	"timestamp": 1234567890,
	"parent": null,
	"tags": ["rock", "pop", "electronic"],
	"collaborators": [1, 2, 3],
	"tracks": ["5Z7ygHQo02SUrFmcgpwsKW", "1x6ACsKV4UdWS2FMuPFUiT", "4bi73jCM02fMpkI11Lqmfe"]
}

var Playlist = React.createClass({
	getInitialState: function(){
		return playlist
	},
	render: function(){
		return (
			<div className="container">
				<div className="inline">
					<img src={this.state.thumb}/>
				</div>
				<div className="inline">
					<h2>{this.state.title}</h2>
					<p>By <a href={"/user/" + this.state.created_by}>{this.state.created_by}</a></p>
				</div>
				<div>
					<a href={"/playlist/" + this.state.id + "/fork"} className="btn btn-primary">Fork</a>
					<a href={"/playlist/" + this.state.id + "/history"} className="btn btn-primary">Fork History</a>
					<a href={"/playlist/" + this.state.id + "/diffs"} className="btn btn-primary">Diffs</a>
				</div>
				<iframe src={
						"https://embed.spotify.com/?uri=spotify:trackset:"
						+ this.state.title
						+ ":"
						+ this.state.tracks.join()
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