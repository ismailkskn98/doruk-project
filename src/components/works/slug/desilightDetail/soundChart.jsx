"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";

const defaultData = [
    { name: "Fast Food", value: 75 },
    { name: "Mid Range", value: 65 },
    { name: "Fine Dining", value: 58 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
    const words = String(payload.value).split(" ");

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={10}
                textAnchor="middle"
                fill="#222"
                fontSize={13}
                fontFamily="Helvetica Neue, Arial, sans-serif"
                fontWeight={300}
            >
                {words.length > 1 ? (
                    words.map((word, index) => (
                        <tspan key={index} x="0" dy={index === 0 ? 0 : 14}>
                            {word}
                        </tspan>
                    ))
                ) : (
                    payload.value
                )}
            </text>
        </g>
    );
};

const CustomYAxisTick = ({ x, y, payload, formatter }) => {
    const formatted = formatter ? formatter(payload.value) : payload.value;
    const lines = String(formatted).split("\n");

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                textAnchor="end"
                fill="#222"
                fontSize={13}
                fontFamily="Helvetica Neue, Arial, sans-serif"
                fontWeight={300}
            >
                {lines.map((line, index) => (
                    <tspan key={index} x={0} dy={index === 0 ? 4 : 14}>
                        {line}
                    </tspan>
                ))}
            </text>
        </g>
    );
};

export default function SoundChart({
    data = defaultData,
    yTicks = [],
    yTickFormatter,
    domain,
    barSize = 28,
}) {
    const values = data.map((item) => item.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const calculatedDomain = domain || [
        Math.max(0, minValue - 10),
        maxValue + 10,
    ];

    return (
        <div className="w-full max-w-11/12 h-65.5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 20, left: -20, bottom: 22 }}
                >
                    {yTicks.map((tick) => (
                        <ReferenceLine
                            key={tick}
                            y={tick}
                            stroke="#444"
                            strokeDasharray="2 2"
                            strokeWidth={0.5}
                        />
                    ))}

                    <XAxis
                        dataKey="name"
                        tick={<CustomXAxisTick />}
                        tickLine={false}
                        axisLine={{ stroke: "#222", strokeWidth: 1 }}
                        interval={0}
                    />

                    <YAxis
                        ticks={yTicks}
                        interval={0}
                        domain={calculatedDomain}
                        tick={(props) => (
                            <CustomYAxisTick {...props} formatter={yTickFormatter} />
                        )}
                        tickLine={false}
                        axisLine={{ stroke: "#222", strokeWidth: 1 }}
                        width={70}
                    />

                    <Bar dataKey="value" fill="#1f1f1f" barSize={barSize} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}