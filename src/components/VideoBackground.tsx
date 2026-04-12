const VideoBackground = () => {
  return (
    <>
      <video id="bg-video" autoPlay muted loop playsInline>
        <source
          src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay" />
    </>
  );
};

export default VideoBackground;
