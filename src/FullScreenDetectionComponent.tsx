import React, { useEffect, useState }  from 'react'

export const FullScreenDetectionComponent: React.FC<{}> = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFullScreenChange = () => {
      if(document.fullscreenEnabled) {
        const fullscreenElement = document.fullscreenElement;
        setIsFullscreen(!!fullscreenElement);
      }
    };
    const handleF11PressDown = (event: KeyboardEvent) => {
      if(document.fullscreenEnabled) {
        event.preventDefault()
        if(event.key ==='F11' || event.key === 'F12') {
          document.body.requestFullscreen();
        } else if(event.key === 'Escape') {
          document.exitFullscreen();
        }
      }
    }

    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('keydown', handleF11PressDown)
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      document.removeEventListener('keydown', handleF11PressDown)
    };
  }, []);

  return (
    <div>
      <p>{ `${document.fullscreenElement}` }</p>
      <p>Is fullscreen: {isFullscreen ? 'Yes' : 'No'}</p>
    </div>
  );
}
