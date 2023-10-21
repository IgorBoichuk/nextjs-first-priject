"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
	const pathname = usePathname();
	return (
		<header>
			<nav>
				<div className="logo">logo</div>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/how-it-works">How It Works</Link>
					</li>
					<li>
						<Link href="/users" style={{ color: pathname === "/users" && "blue" }}>
							Users
						</Link>
					</li>
					<li>
						<Link href="/OurStory">Our Story</Link>
					</li>
					<li>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
