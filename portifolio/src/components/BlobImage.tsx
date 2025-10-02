"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function BlobImage() {
    return (
        <motion.div
            className="relative w-50 h-50 md:w-72 md:h-72 overflow-hidden"
            animate={{
                borderRadius: [
                    "60% 40% 60% 40% / 50% 60% 40% 50%",
                    "50% 60% 40% 50% / 60% 50% 60% 40%",
                    "55% 45% 65% 35% / 45% 65% 35% 55%",
                    "60% 40% 60% 40% / 50% 60% 40% 50%",
                ],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        >
            <Image
                src="/MyImages/pedro.png"
                alt="Foto Pedro"
                fill
                className="object-cover"
                priority
            />
        </motion.div>
    );

}
