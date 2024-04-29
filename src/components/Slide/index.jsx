import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Slide({ images }) {
    const [index, setIndex] = useState(0);
    const handleClick = (type) => {
        let idx = type === 'prev' ? index - 1 : index + 1;
        if (idx <= 0) {
            return setIndex(images.length - 1)
        }
        if (idx > images.length || idx === images.length) {
            return setIndex(0)
        }
        return setIndex(idx);
    }

    const image = images[index];
    return (
        <div className="relative w-[400px] overflow-hidden h-[300px]">
            <div className="relative z-10 space-x-3">
                <button onClick={() => handleClick('prev')} >prev</button>
                <button onClick={() => handleClick('next')}>next</button>
            </div>

            <AnimatePresence>
                <motion.img
                    key={image.src}
                    src={image.src}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    className="absolute top-0 left-0 bottom-0 right-0"
                />
            </AnimatePresence>
        </div >
    )
}