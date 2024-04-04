import React, { useRef, useEffect, useState } from 'react';

export function Reels() {
    const videoRefs = useRef([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

    const videoUrls = [
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
        "src/assets/videos/1.mp4",
        "src/assets/videos/2.mp4",
    ];

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry, index) => {
                const video = videoRefs.current[index];
                const windowHeight = window.innerHeight;

                if (entry.intersectionRect.height >= windowHeight * 0.7 && video.paused) {
                    // Mettre en pause toutes les autres vidéos
                    videoRefs.current.forEach((otherVideo, idx) => {
                        if (idx !== index && !otherVideo.paused) {
                            otherVideo.pause();
                        }
                    });

                    // Jouer la vidéo courante
                    video.play();
                    setCurrentVideoIndex(index);
                } else if (entry.intersectionRect.height < windowHeight * 0.7 && !video.paused) {
                    // Mettre en pause la vidéo si elle n'occupe pas une grande partie de la page
                    video.pause();
                    setCurrentVideoIndex(null);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0
        });

        videoRefs.current.forEach((videoRef) => {
            if (videoRef) {
                observer.observe(videoRef);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="video-container">
            {videoUrls.map((url, index) => (
                <div key={index} className="video-item">
                    <video 
                        controls 
                        ref={(el) => {
                            videoRefs.current[index] = el;
                            console.log(`Référence vidéo mise à jour pour l'index ${index}`);
                        }}
                    >
                        <source src={url} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    );
}
