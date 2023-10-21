import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/mount.jpg";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

export default function FAQ() {
	return (
		<div>
			<section>FAQ</section>
			<Link href="/faq/12">More info</Link>
			<Button />
			<Image alt="myImg" src={img} placeholder="blur" />
		</div>
	);
}
