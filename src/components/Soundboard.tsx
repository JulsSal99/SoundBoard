import React from "react";
import { styles } from "../styles/SoundBoard"
import { sounds } from "../data/sounds";

const soundFiles = import.meta.glob(
  "/SoundBoard/sounds/*.{mp3,wav,m4a,ogg}",
  {
    eager: true,
    import: "default",
  }
);

export default function Soundboard() {
  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <>
      <div className="soundboard-container">
        {sounds.map((sound) => (
          <div key={sound.file} className="sound-item">
            <button
              className="sound-pad btn btn-dark"
              onClick={() => playSound(sound.file)}
            >
              ▶
            </button>

            <div className="sound-title">
              {sound.name}
            </div>
          </div>
        ))}
      </div>
      <style>{styles}</style>
    </>
  );
}