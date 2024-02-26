const HeroSection = () => {
  return (
    <div>
      <video className="h-44 lg:h-full" autoPlay loop muted>
        <source src="../video/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default HeroSection;
