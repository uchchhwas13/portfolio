export const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-48 overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
    />
  </div>
);
