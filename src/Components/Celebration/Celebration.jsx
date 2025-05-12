import React, { useState, useRef } from "react";
import "./celebration.scss"
import VideoImg1 from "../../assets/hqdefault1.jpg"
import VideoImg2 from "../../assets/hqdefault2.jpg"
import VideoImg5 from "../../assets/hqdefault5.jpg"
import VideoImg3 from "../../assets/hqdefault3.jpg"
import VideoImg4 from "../../assets/hqdefault4.jpg"
import VideoImg6 from "../../assets/Videobg.jpg"

const staticVideoData = [
  { videoUrl: "https://www.youtube.com/embed/FYQn4ZcqEmQ", Img: VideoImg2, title: "Culture Images" },
  { videoUrl: "https://www.youtube.com/embed/NJUsVXawyUU", Img: VideoImg5, title: "Culture Images" },
  { videoUrl: "https://www.youtube.com/embed/H2p71HRy5yQ", Img: VideoImg1, title: "Culture Images" },
  { videoUrl: "https://www.youtube.com/embed/ov8bi_5toeQ", Img: VideoImg3, title: "Culture Images" },
  { videoUrl: "https://www.youtube.com/embed/gt6CPMJf5Lk", Img: VideoImg4, title: "Culture Images" },
  { videoUrl: "https://www.youtube.com/embed/_SW0aPOHj9w", Img: VideoImg6, title: "Culture Images" }
];


const Culture = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const iframeRefs = useRef({});

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  const handleVideoPlay = (index) => {
    if (activeVideoIndex !== null && activeVideoIndex !== index) {
      const activeIframe = iframeRefs.current[activeVideoIndex];
      if (activeIframe) {
        activeIframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
    setActiveVideoIndex(index);
  };

  return (
    <>
      <section className="pb-5 mb-5">
        <h1 className="w-100 h-100 m-0 text-center py-5 mb-5" style={{ color: "#132028", fontWeight: "600" }}>
          Culture at <span style={{ color: "#0777AB", fontWeight: "600" }}> Plexus Technology </span>
          <br />Work, Fun & <span style={{ color: "#0777AB", fontWeight: "600" }}> Celebrations ! </span>
        </h1>

        <div className="slider-container-culture">
          <div className="slider-content-culture">
            {staticVideoData.map((item, index) => {
              const isActive = activeVideoIndex === index;
              const thumbnailUrl = getYouTubeThumbnail(item.videoUrl);
              return (
                <div key={index} className="d-flex align-items-center justify-content-center m-2">
                  <div
                    className="overflow-hidden rounded-4 border position-relative"
                    style={{ width: "450px", height: "300px", backgroundColor: "black", cursor: "pointer" }}
                    onClick={() => handleVideoPlay(index)}
                  >
                    {isActive ? (
                      <iframe
                        ref={(el) => (iframeRefs.current[index] = el)}
                        width="100%"
                        height="100%"
                        src={`${item.videoUrl}?enablejsapi=1&autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        {thumbnailUrl && (
                          <img
                            src={thumbnailUrl}
                            alt={`Video thumbnail ${index}`}
                            className="w-100 h-100 object-fit-cover"
                          />
                        )}
                        <div
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "0",
                              height: "0",
                              borderTop: "10px solid transparent",
                              borderBottom: "10px solid transparent",
                              borderLeft: "20px solid white",
                              marginLeft: "5px",
                            }}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;
