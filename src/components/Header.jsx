import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<header>
			<nav>
				<div class="logo">logo</div>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/works">How It Works</Link>
					</li>
					<li>
						<Link href="/our-story">Our Story</Link>
					</li>
					<li>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
