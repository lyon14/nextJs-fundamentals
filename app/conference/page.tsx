import Link from "next/link";

export default function page() {
    return (
        <div className="flex flex-col gap-2 m-5">
            <h1>Conference Page</h1>
            <div className="flex gap-2">
                <Link href="/conference/sessions">sessions</Link>
                <Link href="/conference/speakers">speakers</Link>
            </div>
        </div>
    )
}