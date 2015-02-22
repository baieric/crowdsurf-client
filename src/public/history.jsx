// temp hardcoded playlists
var playlists = [
	{
		 "id": 1,
		 "revision_id": 1,
		 "created_by": 1,
		 "title": "Awesome playlist",
		 "thumb": "some.jpg",
		 "timestamp": 1424586739,
		 "parent": null,
		 "tags": ["rock", "pop", "electronic"],
		 "collaborators": [1, 2, 3],
		 "tracks": [1, 2, 3, 4, 5]
	},
	{
		 "id": 1,
		 "revision_id": 2,
		 "created_by": 2,
		 "title": "my jams",
		 "thumb": "new.jpg",
		 "timestamp": 1424586747,
		 "parent": 1,
		 "tags": ["rock", "pop", "electronic"],
		 "collaborators": [1, 2, 3],
		 "tracks": [1, 2, 3, 4, 5]
	}
]

var diffs = {
  "_id":"auto-generated",
  "title":"string",
  "type":"string",
  "thumb":"url string",
  "timestamp":"int",
  "parent":"id of parent",
  "tags":["array of tags"],
  "collaborators":["array of collaborators"],
  "created_by":"spotify id of user",
  "diffs":[
    {
      "commit_id":"int generated hash",
      "timestamp:":"int timestamp",
      "changes":[
        {
          "type":"add or remove",
          "song_id":"spotify song_id",
          "index":"int index"
        }
      ]
    }
  ]
}

var Playlist = React.createClass({
	render: function(){
		return (
			<div className="playlist-card">
				<div className="inline">
					<img className="playlist-thumb" src={this.props.thumb}/>
				</div>
				<div className="inline">
					<a href={"/playlist/" + this.props.id + "/diff/" + this.props.revision_id} className="playlistTitle">
					{"Revision " + this.props.timestamp}
					</a>
				</div>
			</div>
		)
	}
})

module.exports = React.createClass({
	getInitialState: function(){
		return {
			playlists: playlists,
			diff: null
		}
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
				<h1>History of {playlists[0].title}</h1>
				<div className="col-xs-2">
					{this.state.playlists.map(function (playlist){
						return(
							<Playlist revision_id={playlist.revision_id} id={playlist.id} thumb={playlist.thumb} timestamp={playlist.timestamp} />
						)
					})}
				</div>
				<div className="col-xs-2">
					<div id="diff"></div>
				</div>
			</div>	
			</div>
		)
	}
})
// <History playlists={playlists}></History>;
