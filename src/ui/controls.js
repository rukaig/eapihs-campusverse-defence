export function initControls({ getIndex, count, goTo, overlays, onToggleHold, onToggleLowGraphics }) {
  function next() {
    overlays.closeAll();
    goTo(Math.min(getIndex() + 1, count - 1));
  }

  function previous() {
    overlays.closeAll();
    goTo(Math.max(getIndex() - 1, 0));
  }

  function jumpToDigit(digit) {
    overlays.closeAll();
    const target = digit === 0 ? 9 : digit - 1;
    if (target < count) goTo(target);
  }

  window.addEventListener("keydown", event => {
    const key = event.key;
    const lower = key.toLowerCase();
    const interactive = event.target instanceof Element && event.target.closest("button, a, input, textarea, select");

    if (key === "Escape") {
      overlays.closeAll();
      return;
    }

    if (key === "?") {
      overlays.open("help");
      event.preventDefault();
      return;
    }

    if (lower === "t") {
      overlays.open("theme");
      event.preventDefault();
      return;
    }

    if (lower === "f") {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else document.documentElement.requestFullscreen?.();
      event.preventDefault();
      return;
    }

    if (lower === "p") {
      overlays.open("timer");
      event.preventDefault();
      return;
    }

    if (lower === "n") {
      overlays.open("notes");
      event.preventDefault();
      return;
    }

    if (lower === "g") {
      onToggleLowGraphics();
      event.preventDefault();
      return;
    }

    if (lower === "r") {
      onToggleHold();
      event.preventDefault();
      return;
    }

    if (/^[0-9]$/.test(key)) {
      jumpToDigit(Number(key));
      event.preventDefault();
      return;
    }

    if (key === "ArrowRight" || key === "ArrowDown" || key === "PageDown") {
      next();
      event.preventDefault();
      return;
    }

    if (key === "ArrowLeft" || key === "ArrowUp" || key === "PageUp") {
      previous();
      event.preventDefault();
      return;
    }

    if (key === " " && !interactive) {
      next();
      event.preventDefault();
    }
  });
}
