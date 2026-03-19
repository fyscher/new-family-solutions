import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, image: "https://picsum.photos/id/1018/1200/600" },
  { id: 2, image: "https://picsum.photos/id/1015/1200/600" },
  { id: 3, image: "https://picsum.photos/id/1019/1200/600" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.track}
        animate={{ x: `-${index * 100}%` }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} style={styles.slide}>
            <img src={slide.image} alt="" style={styles.image} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    width: "100vw",
    height: "60vh",
    overflow: "hidden",
    zIndex: -1,
  },
  track: {
    display: "flex",
    height: "100%",
  },
  slide: {
    minWidth: "100%",
    height: "100%",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
