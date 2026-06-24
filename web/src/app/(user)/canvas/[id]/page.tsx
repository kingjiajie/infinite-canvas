import { Suspense } from "react";
import CanvasClientPage from "./canvas-client-page";

export default function CanvasPage() {
    return (
        <Suspense fallback={<div className="flex h-full items-center justify-center bg-background text-sm text-stone-500">正在加载...</div>}>
            <CanvasClientPage />
        </Suspense>
    );
}
