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

var Author = React.createClass({
  render: function(){
    return(
      <a href={"/user/" + this.props.id}>{this.props.name}</a>
    )
  }
});

var Playlist = React.createClass({
	render: function(){
		return (
			<div className="playlist-card">
				<div className="inline">
					<img className="playlist-thumb" src={this.props.thumb}/>
				</div>
				<div className="inline">
					<h4><a href={"/playlist/" + this.props.id} className="playlistTitle">{this.props.title}</a></h4>
					<p>By 
						{this.props.authors.map(function (author){
			            return(
			              <span> <Author name={author} id={author} />, </span>
			          )})}
					</p>
				</div>
			</div>
		)
	}
})

module.exports = React.createClass({
	getInitialState: function(){
		return { playlists: playlists }
	},
	//Render container for page
	render: function(){
		return (		
			<div>
				<div id="navbar" className="collapse navbar-collapse">
		        <ul className="nav navbar-nav">
		          <li className="active"><a href="#">Home</a></li>
		          <li><a href="#create">Create Playlist</a></li>
		        </ul>
		      </div>
				<div className="container">
					<h1>CrowdSurfr</h1>
						{this.state.playlists.map(function (playlist){
							return(
								<Playlist id={playlist.id} thumb={playlist.thumb} title={playlist.title} authors={playlist.collaborators} />
							)
						})}
			</div>
		</div>		
		)
	}
})
 //<Home playlists={playlists}></Home>;
