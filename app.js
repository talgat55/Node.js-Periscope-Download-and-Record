var program = require('commander')
var cheerio = require('cheerio')
var request = require('request')
    // https://api.periscope.tv/api/v2/accessVideoPublic?broadcast_id=
    // https://framagit.org/Sobralia/Periscope-API/blob/master/index.js
program
    .version('0.0.1')
    .option('-n, --name [name] ', 'Add username')
    .option('-b, --broadcast [broadcast]', 'Add ID broadcust')
    .parse(process.argv);

if (program.name) {
    var nameuser = program.name;

    var nameuser = program.name;
    request('https://www.periscope.tv/' + nameuser, function(error, response, body) {
        if (!error && response.statusCode == 200) {

            var html = cheerio.load(body);
            var titlehtml = html(".ProfileAuthor span").text()
            console.log(titlehtml)

        }
    })


}



/*
		var	request_url = url.broadcast + broadcast_id;

		this.getBroadcastInfo(broadcast_id, function(error, broadcasts_info){
			if (error){
				callback(error);
				return;
			}

			var	replay_url = broadcasts_info.replay_url;
			var	the_cookie = "CloudFront-Policy=" + broadcasts_info.cookies[0].Value +
			"; CloudFront-Signature=" + broadcasts_info.cookies[1].Value +
			"; CloudFront-Key-Pair-Id=" + broadcasts_info.cookies[2].Value;
			var	cmd = "livestreamer --http-cookie \"" + the_cookie + "\" \"hls://" + replay_url + "\" best -o \"" + path + "\"";

			fs.stat(path, function(err, stat){
				if (err == null){
					callback(new Error("File already exist"));
					return;
				}
				if (err && err.code != "ENOENT"){
					callback(err);
					return;
				}
				exec(cmd, function(error, stdout, stderr) {
					if (error){
						callback(error);
						return;
					}
					callback(null, broadcasts_info);
				});
			});
		});*/