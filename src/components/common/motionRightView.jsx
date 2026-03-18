'use client';
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';

export default function MotionRightView({ children, className }) {
    return (
        <motion.div
            initial={{ x: 150, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
            className={cn('', className)}
        >{children}
        </motion.div>
    )
}
