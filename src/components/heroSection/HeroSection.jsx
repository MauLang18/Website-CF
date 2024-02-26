const HeroSection = () => {
  return (
    <div>
      <video className="h-full" autoPlay loop muted>
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default HeroSection;
