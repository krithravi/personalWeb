import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css'
// u gotta use react-router-dom, not just react-router
import Header from '../components/Header'
import MiniHeader from './MiniHeader'
import { FaArrowRight } from 'react-icons/fa';
var spicetifyImg = require('./spicetify.png')
function Spotify(){
	return(
		<div>
			<Header />
			{MiniHeader("Spotify: In Memoriam")}
			<div className="box">
				<h3>An Introduction</h3>
					<p>
						Spotify's been one of my favorite services for the longest time.
						Of late, my frustrations with the app outweigh the possible benefits.
						<i> I have not abandoned the service</i>; I have simply chosen to use
						the web version.
					</p>
					<h4>Pros</h4>
					<p>
						<ul>
							<li>
								The <span class="monospace">.cache/spotify</span> is empty!
								It used to take up 13+ GB of storage space. That was a heck ton.
							</li>
							<li>
								If you use
								the <a href="https://github.com/gorhill/uBlock#ublock-origin">uBlock Origin </a>
								Firefox add-on, ads are automatically blocked! This is less visual and audio
								clutter, which is much nicer for studying. On the same note, you can make a
								playlist with just one song, and put that on repeat!
							</li>
							<li>Can't get distracted by friend activity!</li>
						</ul>
					</p>
					<h4>Cons</h4>
					<p>
						<ul>
							<li>
								Less cache means it's a bit slower to load a song,
								but it's typically less than a second.
							</li>
							<li>Can't make directories</li>
							<li>Can't customize color scheme, but grey is not ugly</li>
							<li>
								I suspect it uses the browser language for
								display; can't change Spotify's language only
							</li>
						</ul>
					</p>
				<h3>What I had</h3>
					<p>
						As I bid adieu to the app I once loved and had, I figured I'd put down the stuff I'd done
						to make the Spotify app an integral part of my setup, a spot it no longer occupies.
						My heart already feels lighter.
					</p>
					<p>
						I guess I'd thought that a customized Spotify setup, typically done 
						with <a href="https://github.com/khanhas/spicetify-cli">Spicetify</a> was
						a requisite part of a rice. The shades of green that I'd picked out, however, truly brought
						me joy. However, ditching it seems a fair bit simpler. Anyway, I was really proud of my setup,
						which makes parting with it all the more difficult.
					</p>
				<h3>Spicetify</h3>
					<p>
						Right, so I liked using the
						<a href="https://github.com/morpheusthewhite/spicetify-themes/tree/master/Phosphoria"> Phosphoria </a>
						theme, since it was already close to what I was looking for.
						I've changed a fair bit of the colors in
						the <span class="monospace">.config/Themes/Phosphoria/color.ini</span> file.
						Here's what that file looks like now:
					</p>
					<div class="realcode">
						[Base] <br />
						; Phosphoria Theme <br/>
						main_fg                               = fff <br/>
						secondary_fg                          = 6df98c ; bright-ish green <br/>
						main_bg                               = 0b1e12 ; dark green <br/>
						sidebar_and_player_bg                 = 011c07 ; dark green, v comparable <br/>
						cover_overlay_and_shadow              = 47110e ; a nice mahogany/maroon <br/>
						indicator_fg_and_button_bg            = f4099e ; hot pink <br/>
						pressing_fg                           = bb67ef ; purple <br/>
						slider_bg                             = 2d4039 <br/>
						sidebar_indicator_and_hover_button_bg = f26ef4 <br/>
						scrollbar_fg_and_selected_row_bg      = 113817 <br/>
						pressing_button_fg                    = 02b585 <br/>
						pressing_button_bg                    = 2d4039 <br/>
						selected_button                       = 009688 <br/>
						miscellaneous_bg                      = 02b585 <br/>
						miscellaneous_hover_bg                = 2e514b <br/>
						;preserve_1                            = 04d6a8 <br/>
						<br/>
						; 0ef9a8
					</div>
					<p>
						<img src={spicetifyImg}/>
						Pretty, right?
					</p>
				<h3>Polybar</h3>
					<p>
						I also liked having the song show up on my bar, and for that, I
						used <a href="https://github.com/Jvanrhijn/polybar-spotify">polybar-spotify</a>. 
						My config used to contain the lines:
					</p>
					<div class="realcode">
						[module/spotify] <br/>
						type = custom/script <br/>
						interval = 1 <br/>
						label-font = 2 <br/>
						format-prefix = " " <br/>
						<span class="specialCase">{'format = <label>'}</span> <br/>
						<span class="specialCase">{"exec = python /home/krithika/scripts/spotifyPolybar.py -t 130 -p ', ' -f '{play_pause} {song}: {artist}"}</span>
						format-padding = 2 <br/>
						format-background = #c4f4a1 <br/>
					</div>
					<p>
						Alas, that too had to go.
					</p>
				<h3>Cronjob</h3>
					<p>
						I also had a cronjob setup to periodically delete
						the <span class="monospace">.cache/Spotify/Data</span> folder, since
						that was the folder to accumulate literal gigabytes of storage.
						The corresponding line read:
					</p>
					<span class="realcode">
						00 18 * * 5 rm -rf ~/.cache/spotify/Data
					</span>
				<h3>That's all folks!</h3>
					<p>
						That's all for now! I'll put down anything else Spotify-related
						down here as it comes to me. :)
					</p>
			</div>
		</div>
	)
}

export default Spotify;
