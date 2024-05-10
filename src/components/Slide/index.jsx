import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cls from 'classnames';
import { wrap } from "popmotion";
import './style.css'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Slide = ({ images, className }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={cls('flex justify-center items-center h-full w-full relative overflow-hidden', className)}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="h-full w-full absolute"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>

            <div className="next" onClick={() => paginate(1)}>
                <ChevronRightIcon className="h-6" />
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                <ChevronLeftIcon className="h-6" />
            </div>
        </div>
    );
};

export default Slide;