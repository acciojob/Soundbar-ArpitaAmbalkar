//your JS code here. If required.
const sounds=['applause','boo','gasp','tada','victory','wrong']
let div=document.getElementById("buttons");

sounds.forEach((sound)=>{
	const audio=document.createElement("audio");
	audio.src=`./sounds/${sound}.mp3`;
	audio.id=sound;
	audio.preload='auto';	
	document.body.appendChild(audio);
		const btn=document.createElement("button");
		btn.className="btn";
		btn.textContent=sound;
		btn.addEventListener("click",()=>{
			stopSounds();
			const elem=document.getElementById(sound);
			elem.currentTime=0;
			const p=elem.play();
		});
	div.appendChild(btn);
})

const stopBtn=document.createElement("button");
stopBtn.id="stop";
stopBtn.textContent="stop";
stopBtn.addEventListener("click",stopSounds);
div.appendChild(stopBtn);


function stopSounds(){
	sounds.forEach((sound)=>{
		const elem=document.getElementById(sound);
		if(!elem) return;
		elem.pause();
		elem.currentTime=0;
	});
	
}

		