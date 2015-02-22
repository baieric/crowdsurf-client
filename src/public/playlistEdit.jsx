// var playlist = {
// 	"id": 1,
// 	"created_by": "wizzler",
// 	"title": "Awesome playlist",
// 	"thumb": "some.jpg",
// 	"timestamp": 1234567890,
// 	"parent": null,
// 	"tags": ["rock", "pop", "electronic"],
// 	"collaborators": ["wizzler", "efaulte"],
// 	"tracks": ["5Z7ygHQo02SUrFmcgpwsKW", "1x6ACsKV4UdWS2FMuPFUiT", "4bi73jCM02fMpkI11Lqmfe"]
// }

var playlist = null;

var tracks = {
	"tracks": []
}

var authors = [];

var contributorsAdded = [];

var current_user = "efaulte";

/*
var tracks = {
  "tracks": [ {
    "album": {
      "album_type": "album",
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
      },
      "href": "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
      "id": "6TJmQnO44YE5BtTxH8pop1",
      "images": [ {
        "height": 640,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/8e13218039f81b000553e25522a7f0d7a0600f2e",
        "width": 629
      }, {
        "height": 300,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/8c1e066b5d1045038437d92815d49987f519e44f",
        "width": 295
      }, {
        "height": 64,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/d49268a8fc0768084f4750cf1647709e89a27172",
        "width": 63
      } ],
      "name": "Hot Fuss",
      "type": "album",
      "uri": "spotify:album:6TJmQnO44YE5BtTxH8pop1"
    },
    "artists": [ {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
      },
      "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
      "id": "0C0XlULifJtAgn6ZNCW2eu",
      "name": "The Killers",
      "type": "artist",
      "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
    } ],
    "available_markets": [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "disc_number": 1,
    "duration_ms": 222075,
    "explicit": false,
    "external_ids": {
      "isrc": "USIR20400274"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
    },
    "href": "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
    "id": "0eGsygTp906u18L0Oimnem",
    "name": "Mr. Brightside",
    "popularity": 0,
    "preview_url": "http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:0eGsygTp906u18L0Oimnem"
  }, {
    "album": {
      "album_type": "album",
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
      },
      "href": "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
      "id": "6TJmQnO44YE5BtTxH8pop1",
      "images": [ {
        "height": 640,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/8e13218039f81b000553e25522a7f0d7a0600f2e",
        "width": 629
      }, {
        "height": 300,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/8c1e066b5d1045038437d92815d49987f519e44f",
        "width": 295
      }, {
        "height": 64,
        "url": "https://d3rt1990lpmkn.cloudfront.net/original/d49268a8fc0768084f4750cf1647709e89a27172",
        "width": 63
      } ],
      "name": "Hot Fuss",
      "type": "album",
      "uri": "spotify:album:6TJmQnO44YE5BtTxH8pop1"
    },
    "artists": [ {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
      },
      "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
      "id": "0C0XlULifJtAgn6ZNCW2eu",
      "name": "The Killers",
      "type": "artist",
      "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
    } ],
    "available_markets": [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "disc_number": 1,
    "duration_ms": 197160,
    "explicit": false,
    "external_ids": {
      "isrc": "USIR20400195"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1lDWb6b6ieDQ2xT7ewTC3G"
    },
    "href": "https://api.spotify.com/v1/tracks/1lDWb6b6ieDQ2xT7ewTC3G",
    "id": "1lDWb6b6ieDQ2xT7ewTC3G",
    "name": "Somebody Told Me",
    "popularity": 0,
    "preview_url": "http://d318706lgtcm8e.cloudfront.net/mp3-preview/4c63a3d4eaf7f8f86cfdb8bf46ef3974f4092357",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:1lDWb6b6ieDQ2xT7ewTC3G"
  } ]
 }

 */

var Track = React.createClass({

	render: function(){
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.artist}</td>		
				<td>{this.props.album}</td>
			</tr>
		)
	}
});


var Author = React.createClass({
  render: function(){
    return(
      <a href={"/user/" + this.props.id}>{this.props.name}</a>
    )
  }
});

module.exports = React.createClass({
  addSong: function(event){
    var that = this;
    var keyPressed = event.keyCode;
    var access_token = "BQB3MEuAGTr9IoyP3SWFGUacE2uhKvHjkXy9k-ByZ_ZVuuiNGYRWV_iSosd74hB3jbbn_0HJHTzqBw-wZ5zjhITh5kRuDfFqWqp5YjxCR6b2tyMXqAzb-9vLE1Y0CH8JTfGGncwgFHQ0l06hlo9Y98mJBgRg5ag4wGcY5sq4RjS1ebJSZLQpzVAR6i9o4a5JobrL2YdzGq9Ksbk";
    var search = $('#songInput').val();
     $.get('https://api.spotify.com/v1/search?q='+ search + '&type=track&limit=5',
      { headers: {'Authorization': 'Bearer ' + access_token} },
      function(result){
        var song = result.tracks.items[0];
        if(keyPressed == 13){
          that.state.tracks.push(song);
          that.setState({tracks: that.state.tracks});
          $('#songInput').val('');
        }else{
          // autocomplete
        }
        
    });
  },
  // allows any input... check validity with spotify api if there's time
	addContributor: function(event){
		var that = this;
		var keyPressed = event.keyCode;
		var access_token = "BQB3MEuAGTr9IoyP3SWFGUacE2uhKvHjkXy9k-ByZ_ZVuuiNGYRWV_iSosd74hB3jbbn_0HJHTzqBw-wZ5zjhITh5kRuDfFqWqp5YjxCR6b2tyMXqAzb-9vLE1Y0CH8JTfGGncwgFHQ0l06hlo9Y98mJBgRg5ag4wGcY5sq4RjS1ebJSZLQpzVAR6i9o4a5JobrL2YdzGq9Ksbk";
		var user = $('#contributorInput').val();
		if(keyPressed == 13){
      contributorsAdded.push(user);
      that.state.authors.push(user);
      that.setState({authors: that.state.authors});
      $('#contributorInput').val('');
    }
	},
	getInitialState: function(){
    if(authors.length == 0){ // no authors because you're creating a new playlist
      authors = [];
      authors.push(current_user);
    }
    var titleLabel;
    if(playlist == null){
      titleLabel = "Create Playlist";
    }else{
      titleLabel = "Edit " + playlist.title;
    }
		return {
			playlist: playlist,
      authors: authors,
			tracks: tracks.tracks,
      titleLabel: titleLabel
		}
	},
	render: function(){
		var that = this;
		return (
      <div>
      <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#create">Create Playlist</a></li>
            </ul>
          </div>
			<div className="container">
        <h2>{this.state.titleLabel}</h2>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Playlist Title"/>
				</div>

        <div className="contributor-list">
        <p>Contributors:
          {this.state.authors.map(function (author){
            return(
              <span> <Author id={author} name={author} />, </span>
          )})}
        </p>
        </div>
        <div className="input-group">
          <input type="text" id="contributorInput" className="form-control" placeholder="Add a contributor" onKeyUp={that.addContributor.bind(event)} />
        </div>

				<div className="input-group">
					<input type="text" className="form-control" placeholder="Tags (separated by commas)"/>
				</div>

				<div className="input-group">
					<input type="text" id="songInput" className="form-control" placeholder="Add songs" onKeyUp={that.addSong.bind(event)} />

				</div>
				<table className="table">
					<tr>
						<th>Track</th>
						<th>Artist</th>		
						<th>Album</th>
					</tr>
					{this.state.tracks.map(function (track){
						return(
							<Track name={track.name} artist={track.artists[0].name} album={track.album.name} />
					)})}
				</table>
				<a href={"/save"} className="btn btn-primary">Save</a>
			</div>
      </div>
		)
	}
})


 //<Playlist playlist={playlist}></Playlist>;
