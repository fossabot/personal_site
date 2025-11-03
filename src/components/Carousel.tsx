"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

type project = {
  title: string;
  description: string;
  image: string;
};

interface CarouselProps {
  data: project[];
}

export default function Carousel({ data }: CarouselProps) {
  let [ref, { width }] = useMeasure();
  let [count, setCount] = useState(1);
  let prev = usePrevious(count);
  let direction = count > prev ? 1 : -1;

  return (
    <div className="flex justify-center w-full h-120">
      <div className="w-full flex flex-row items-center justify-center gap-4">
        <button onClick={() => setCount(count - 1)}>
          <ChevronLeft className="h-10 w-10" />
        </button>

        <div className="flex justify-center">
          <div className="aspect-square">
            <div
              ref={ref}
              className="relative flex h-96 w-96 items-center justify-center overflow-hidden "
            >
              <AnimatePresence custom={{ direction, width }}>
                {data.length > 0 &&
                  data.map((project, idx) =>
                    idx ===
                    ((count % data.length) + data.length) % data.length ? (
                      <motion.div
                        key={`${project.title}-${idx}`}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={{ direction, width }}
                        className="absolute flex  items-center justify-center"
                      >
                        <div className="flex flex-col w-96 h-96 rounded-xl overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-2/3 object-cover"
                            loading="lazy"
                          />
                          <div className="flex flex-col gap-1 p-4 h-1/3">
                            <h3 className="text-lg font-semibold truncate">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-300 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : null
                  )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button onClick={() => setCount(count + 1)}>
          <ChevronRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * -width,
  }),
};

function usePrevious(state: any) {
  let [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
