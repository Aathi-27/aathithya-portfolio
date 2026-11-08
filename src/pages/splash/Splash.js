import React, { useEffect, useRef, useState } from 'react';
import Home from '../home/HomeComponent';
import './Splash.css';

export default function Splash(props) {
  const [visible, setVisible] = useState(() => {
    try {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !sessionStorage.getItem('portfolio-intro-seen');
    } catch (_) { return false; }
  });
  const video = useRef(null);
  const finish = () => {
    setVisible(false);
    try { sessionStorage.setItem('portfolio-intro-seen', '1'); } catch (_) {}
  };
  useEffect(() => {
    if (!visible) return;
    // A failed or delayed video must never hold the page behind an intro.
    const deadline = setTimeout(finish, 3000);
    const onKey = e => { if (e.key === 'Escape') finish(); };
    window.addEventListener('keydown', onKey);
    const player = video.current;
    if (player) {
      const attempt = player.play();
      if (attempt && attempt.catch) attempt.catch(finish);
    }
    return () => { clearTimeout(deadline); window.removeEventListener('keydown', onKey); };
    // The overlay is mounted once; changing its visibility cancels the deadline.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  return <>
    <div aria-hidden={visible ? 'true' : undefined} inert={visible ? '' : undefined}>
      <Home {...props} />
    </div>
    {visible && <div className="intro-overlay" role="dialog" aria-modal="true" aria-label="Aathithya portfolio introduction">
      <video ref={video} className="intro-video" src="/intro.mp4" autoPlay muted playsInline disableRemotePlayback controlsList="nodownload nofullscreen noremoteplayback" preload="auto" onEnded={finish} onError={finish} aria-label="Animated signature of Aathithya Arasu S" />
      <button className="intro-skip" onClick={finish} autoFocus>Skip intro</button>
    </div>}
  </>;
}
