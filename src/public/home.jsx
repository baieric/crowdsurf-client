// temp hardcoded playlists
var playlists = [
	{
		 "id": 1,
		 "created_by": 1,
		 "title": "Awesome playlist",
		 "thumb": "some.jpg",
		 "timestamp": 1234567890,
		 "parent": null,
		 "tags": ["rock", "pop", "electronic"],
		 "collaborators": [1, 2, 3],
		 "tracks": [1, 2, 3, 4, 5]
	},
	{
		 "id": 2,
		 "created_by": 2,
		 "title": "my jams",
		 "thumb": "new.jpg",
		 "timestamp": 9876543210,
		 "parent": 1,
		 "tags": ["rock", "pop", "electronic"],
		 "collaborators": [1, 2, 3],
		 "tracks": [1, 2, 3, 4, 5]
	}
]

var Playlist = React.createClass({
	render: function(){
		return (
			<div>
				<div className="inline">
					<img src={this.props.thumb}/>
				</div>
				<div className="inline">
					<a href={"/playlist/" + this.props.id} className="playlistTitle">{this.props.title}</a>
				</div>
			</div>
		)
	}
})

var Home = React.createClass({
	getInitialState: function(){
		return { playlists: playlists }
	},
	render: function(){
		return (
			<div className="container">
				{this.state.playlists.map(function (playlist){
					return(
						<Playlist id={playlist.id} thumb={playlist.thumb} title={playlist.title} />
				)})}
			</div>
		)
	}
})

React.render(<Home playlists={playlists}></Home>, document.body);