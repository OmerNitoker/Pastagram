import { useRef, useEffect } from 'react';

export function Reels() {
    return (
        <div>Reels</div>
    )


    //BUG
    const videoRefs = useRef([]);
    const videoUrls = [
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/3.mp4",
        "src/assets/videos/4.mp4",

    ];

    useEffect(() => {
        const handleScroll = () => {
            const container = videoRefs.current;
            if (container) {
                const { scrollTop, clientHeight, scrollHeight } = container;
                if (scrollTop + clientHeight >= scrollHeight) {
                    console.log("Défilement détecté");
                }
            }
        };

        const container = videoRefs.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleVideoMouseEnter = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.play();
        }
    };

    const handleVideoMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <div className="video-container" ref={videoRefs}>
            {videoUrls.map((url, index) => (

                <div
                    key={index}
                    className="video-item"
                    onMouseEnter={() => handleVideoMouseEnter(index)}
                    onMouseLeave={() => handleVideoMouseLeave(index)}
                >

                    <video controls ref={(el) => {
                        videoRefs.current[index] = el;
                    }}>
                        <source src={url} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    );
}
