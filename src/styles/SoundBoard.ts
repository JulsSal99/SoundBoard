export const styles = `
.soundboard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  justify-content: center;
}

.sound-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sound-pad {
  width: 90px;
  height: 90px;

  border-radius: 20px !important;

  font-size: 28px !important;
  font-weight: bold;

  display: flex !important;
  align-items: center;
  justify-content: center;

  transition: all 0.1s ease;
  user-select: none;

  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.sound-pad:active {
  transform: scale(0.93);
}

.sound-title {
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
  max-width: 90px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 576px) {
  .sound-pad {
    width: 75px;
    height: 75px;
    font-size: 22px !important;
  }

  .sound-title {
    font-size: 12px;
    max-width: 75px;
  }
}
`;