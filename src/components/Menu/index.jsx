import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Menu({
    list,
    children,
    onClick
}) {
    const [open, setOpen] = useState(false);
    if (!list || list.length === 0) {
        throw new Error('Please set list for Menu component')
    }
    return <div className="relative">
        <button
            className="px-2 py-1 border rounded-md hover:bg-gray-100"
            onClick={() => setOpen(!open)}
        >{children}</button>
        <AnimatePresence>
            {
                open && <motion.ul
                    initial={{ opacity: 0, transform: 'translateY(5%)' }}
                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                    exit={{ opacity: 0, transform: 'translateY(5%)' }}
                    className="block shadow-md p-2 rounded-md mt-1 absolute max-h-[200px] overflow-auto"
                >
                    {
                        list.map((li, index) => <li
                            key={`Menu_${index}_${li.key}`}
                            className="p-1 cursor-pointer min-w-[75px] hover:bg-gray-100"
                            onClick={() => {
                                onClick && onClick(li.key);
                                setOpen(false)
                            }}
                        >
                            {li.text}
                        </li>
                        )
                    }
                </motion.ul>
            }
        </AnimatePresence>

    </div>
}