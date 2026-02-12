import { useEffect } from "react";

const useScrollReveal = () => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        try {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.target) {
                            entry.target.classList.add("revealed");
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px",
                },
            );

            // Observe all elements with scroll-reveal class
            const elements = document.querySelectorAll(".scroll-reveal");

            elements.forEach((element) => {
                if (element) {
                    observer?.observe(element);
                }
            });
        } catch (error) {
            console.error("Error setting up scroll reveal:", error);
        }

        return () => {
            if (observer) {
                try {
                    const elements =
                        document.querySelectorAll(".scroll-reveal");
                    elements.forEach((element) => {
                        if (element) {
                            observer.unobserve(element);
                        }
                    });
                    observer.disconnect();
                } catch (error) {
                    console.error("Error cleaning up scroll reveal:", error);
                }
            }
        };
    }, []);
};

export default useScrollReveal;
