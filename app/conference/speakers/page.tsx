import Link from "next/link";

export let speakerJson:any = {};

// Static data fetching
async function fetchSpeakers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
    );
  
    const data = await response.json();
    //speakerJson = data;
    return data;
  }

export default async function page() {

    const data = await fetchSpeakers();
    speakerJson = data;
    //console.log(speakerJson)
    return (
        <div>
            <div className="fixed w-screen h-screen overflow-hidden -z-10" />
            <div className="flex flex-col gap-5 p-5">
                <Link href="/conference">Back Conference</Link>
                <h2>Last Render: {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</h2>
                <div>
                    {data.speakers.map(({ id, name, bio }:any) => (
                        <div key={id} className="flex flex-col gap-2 p-5">
                            <Link href={`/conference/speakers/${name}`}>
                                <h2 className="text-2xl font-bold text-green-600">{name}</h2>
                            </Link>
                            <p>{bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}