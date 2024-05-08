import {PropsWithChildren} from "react";

export default function Container({children}: PropsWithChildren) {
    return (
        <div className="relative max-w-[1350px] w-full mx-auto px-2">
            {children}
        </div>
    )
}
