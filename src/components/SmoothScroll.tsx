import { useTransform, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface ISmoothScrollProps {
	children: React.ReactNode;
}

export const SmoothScroll: React.FC<ISmoothScrollProps> = ({ children }) => {
	const { scrollYProgress } = useScroll();
	const smoothProgress = useSpring(scrollYProgress, { mass: 0.01 });

	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [contentRef, children]);

	const y = useTransform(smoothProgress, (value) => {
		return value * -(contentHeight - window.innerHeight);
	});

	return (
		<>
			<div style={{ height: contentHeight }} />

			<motion.div style={{ y }} className="scrollBody" ref={contentRef}>
				{children}
			</motion.div>
		</>
	);
};
