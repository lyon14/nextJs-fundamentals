
import Link from "next/link";

async function fetchSessions() {
    const response = await fetch("https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
        { cache: "no-store"}
    );
    const data = await response.json();
    return data;
}

export default async function page() {

    const data = await fetchSessions();

    return (
        <div>
            <div className="flex flex-col gap-5 p-5">
                <Link href="/conference">Back Conference</Link>
                <h2>Last Render: {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</h2>
                <div>
                    {data.sessions.map(
                        ({ id, title, description, room, day, track, speakers }:any ) => (
                            <div key={id} className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-green-600">{title}</h2>
                                {speakers && speakers.map(({ name }:any) => (
                                    <h3 className="text-xl font-bold text-orange-600">Speaker: {name}</h3>
                                ))}
                                <h5>{description}</h5>
                                <h4>Room: {room}</h4>
                                <h4>Day: {day}</h4>
                                <h4>Track: {track}</h4>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}