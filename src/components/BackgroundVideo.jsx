export default function BackgroundVideo() {
  return (
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/01b8d126-bedb-4643-a13d-2f8646f149da.mp4"
        type="video/mp4"
      />
    </video>
  );
}