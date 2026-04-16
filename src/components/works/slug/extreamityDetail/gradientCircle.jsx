export default function GradientCircle() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 620 620" className="relative w-full h-full">
        <text
          x="50%"
          y="0%"
          textAnchor="middle"
          style={{
            fontSize: '28px',
            fontWeight: 200,
          }}
        >
          0
        </text>

        <text
          x="50%"
          y="102%"
          textAnchor="middle"
          style={{
            fontSize: '30px',
            fontWeight: 200,
          }}
        >
          ∞
        </text>

        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#00ff00" />
            <stop offset="50%" stopColor="#2b0000" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
        </defs>

        <circle cx="310" cy="310" r="290" fill="none" stroke="url(#circleGradient)" strokeWidth="4" />
      </svg>
    </div>
  );
}
