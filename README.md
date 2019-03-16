# dahlland.se
Source code for dahlland.se
<br>
The height of `div.player` is fixed because `div.playertext` is positioned absolutely, which removes it from the document flow and doesn't expand the height of its parent. I'm looking for a way to fix this with JS but for now, this ugly solution is required.
