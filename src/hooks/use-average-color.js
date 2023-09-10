import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

export default function useAverageColor(asset, isVideo = true) {
    const [averageColor, setAverageColor] = useState(null);
    useEffect(() => {
        const fac = new FastAverageColor();
        const color = fac.getColor(asset, {
            algorithm: isVideo ? "dominant" : "simple",

        });
        console.log(color);
        setAverageColor(color);
    } , [asset, isVideo]);

    return averageColor;
}