import { cn } from "@/lib/utils";

export default function Logo({ large = false }) {
    return (
        <div className={cn('flex items-center gap-1.5 font-bold leading-[0.9]', {
            'text-white': large,
            'text-black': !large,
        })}>
            <div className={cn('font-light', {
                'text-[42px]': large,
                'text-[32px]': !large,
            })}>
                STUDIO
            </div>
            <div className={cn('', {
                'text-[56px]': large,
                'text-[32px]': !large,
            })}>
                DORUK BICER
            </div>
        </div>
    )
}
