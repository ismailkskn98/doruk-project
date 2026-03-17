export default function Logo({ large = false }) {
    return (
        <div className={large ? 'text-white leading-[0.9]' : 'text-black leading-[0.9]'}>
            <div className={large ? 'text-[42px] font-light' : 'text-[18px] font-light'}>
                STUDIO
            </div>
            <div className={large ? 'text-[56px] font-bold' : 'text-[28px] font-bold'}>
                DORUK BICER
            </div>
        </div>
    )
}
