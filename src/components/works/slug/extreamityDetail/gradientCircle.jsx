export default function GradientCircle() {
    return (
        <div className="relative h-full aspect-square w-full">
            <div className="absolute left-1/2 top-0 -translate-x-1/2  text-[32px] font-light">
                0
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2  text-[32px] font-light">
                ∞
            </div>

            <svg viewBox="0 0 620 620" className="h-full w-full">
                <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#00ff00" />
                        <stop offset="50%" stopColor="#2b0000" />
                        <stop offset="100%" stopColor="#ff0000" />
                    </linearGradient>
                </defs>

                <circle
                    cx="310"
                    cy="310"
                    r="290"
                    fill="none"
                    stroke="url(#circleGradient)"
                    strokeWidth="4"
                />
            </svg>
        </div>
    );
}