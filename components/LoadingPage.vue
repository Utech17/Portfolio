<template>
  <div class="loadingScreen">
    <h1 class="utechText">
      Utech<span class="highlight">17</span>
      <span class="spinner"></span>
    </h1>
  </div>
</template>

<style scoped>
.loadingScreen {
  position: fixed;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(15, 15, 30, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.utechText {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  color: #dcdcdc;
  text-shadow: 0 0 10px #444, 0 0 20px #222;
  animation: glitch 0.8s infinite;
  display: flex;
  align-items: center;
  gap: 10px;
}

.highlight {
  color: #888;
  text-shadow: 0 0 10px #333, 0 0 20px #111;
}

.spinner {
  width: 28px;
  height: 28px;
  border: 3px solid rgba(0, 60, 255, 0.3);
  border-top: 3px solid #3700ff;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>