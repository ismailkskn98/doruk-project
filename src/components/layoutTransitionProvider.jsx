'use client'

import { LayoutGroup } from 'motion/react'

export default function LayoutTransitionProvider({ children }) {
    return <LayoutGroup>{children}</LayoutGroup>
}