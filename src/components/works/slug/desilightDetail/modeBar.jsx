import { cn } from "@/lib/utils";

function Segment({ active = true, className }) {
    return (
        <div className={cn('h-3 border border-[#9a9a9a]', active ? 'bg-linear-to-r from-yellow-300 to-transparent' : 'bg-white', className)} />
    );
}

function Mode1() {
    return (
        <div className="grid grid-cols-12 gap-1">
            <div className="col-span-6">
                <Segment />
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-1">
                <Segment />
                <Segment />
                <Segment />
            </div>

            <div className="col-span-4">
                <Segment active={false} />
            </div>
        </div>
    );
}

function Mode2() {
    return (
        <div className="grid grid-cols-12 gap-1">
            <div className="col-span-8">
                <Segment />
            </div>

            <div className="col-span-3 grid grid-cols-3 gap-1">
                <Segment />
                <Segment />
                <Segment />
            </div>

            <div className="col-span-1">
                <Segment active={false} />
            </div>
        </div>
    );
}

function Mode3() {
    return (
        <div className="grid grid-cols-12 gap-1">
            <div className="col-span-10">
                <Segment />
            </div>

            <div className="col-span-2 grid grid-cols-4 gap-1">
                <Segment />
                <Segment />
                <Segment />
                <Segment />
            </div>
        </div>
    );
}

function Mode4() {
    return (
        <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12">
                <Segment className="bg-yellow-300" />
            </div>
        </div>
    );
}

export default function ModeBar() {
    return (
        <main className="w-full flex items-start justify-center p-6">
            <div className="w-full max-w-5xl">
                <div className="grid grid-cols-[60px_1fr] items-end gap-4 sm:grid-cols-[70px_1fr]">
                    <div />

                    <div className="grid grid-cols-7 text-start text-xs text-[#444] sm:text-sm">
                        <span className="">55 dB</span>
                        <span className="">60 dB</span>
                        <span className="">65 dB</span>
                        <span className="">70 dB</span>
                        <span className="">75 dB</span>
                        <span className="text-center">80 dB</span>
                        <span className="text-end">85 dB</span>
                    </div>
                </div>

                <div className="mt-3 space-y-3">
                    <div className="grid grid-cols-[60px_1fr] items-center gap-4 sm:grid-cols-[70px_1fr]">
                        <div className="text-sm text-[#333]">Mode 1</div>
                        <Mode1 />
                    </div>

                    <div className="grid grid-cols-[60px_1fr] items-center gap-4 sm:grid-cols-[70px_1fr]">
                        <div className="text-sm text-[#333]">Mode 2</div>
                        <Mode2 />
                    </div>

                    <div className="grid grid-cols-[60px_1fr] items-center gap-4 sm:grid-cols-[70px_1fr]">
                        <div className="text-sm text-[#333]">Mode 3</div>
                        <Mode3 />
                    </div>

                    <div className="grid grid-cols-[60px_1fr] items-center gap-4 sm:grid-cols-[70px_1fr]">
                        <div className="text-sm text-[#333]">Mode 4</div>
                        <Mode4 />
                    </div>
                </div>
            </div>
        </main>
    );
}