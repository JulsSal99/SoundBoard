import React from "react";
const sounds = [
  {
    name: "Sound 1",
    file: "/SoundBoard/sounds/sound_1.m4a",
  },
];

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
      }}
    >
      {sounds.map((sound) => (
        <button
          key={sound.name}
          onClick={() => playSound(sound.file)}
        >
          ▶ {sound.name}
        </button>
      ))}
    </div>
  );
}