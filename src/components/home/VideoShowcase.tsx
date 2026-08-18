"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => setIsPlaying(false);

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading
          title="See Our Work in Action"
          subtitle="Take a quick tour of our manufacturing facility and discover how we craft premium plywood products."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="/gallery/factory-floor-overview.jpg"
            onEnded={handleVideoEnd}
            playsInline
            preload="metadata"
          >
            <source src="/video/intro_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play / Pause overlay */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
              isPlaying
                ? "opacity-0 hover:opacity-100"
                : "opacity-100"
            }`}
          >
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-green/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
              {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
