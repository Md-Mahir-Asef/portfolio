import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage = (scrollTop / scrollHeight) * 100;
            setProgress(percentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "3px",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)",
                zIndex: 9999,
                transition: "width 0.1s ease-out",
            }}
        />
    );
}

export default ScrollProgress;
