import { speakerJson } from "../page";

function fetchSpeakerInfo(params: any) {
  // API call, DB Query, fetch from the app

  let info = speakerJson?.speakers;

  const decodedSlug = decodeURIComponent(params.slug); // Decodifica el slug

  const speakerInfo = info.find(
    (speaker: any) => speaker.name == decodedSlug
  );

  return speakerInfo;
}

export default async function Page({ params }: { params: { slug: string } }) {

  const speakerInfo = fetchSpeakerInfo(params);

  const { name, bio, sessions } = speakerInfo;

  return (
    <div>
      <div className="fixed w-screen h-screen overflow-hidden -z-10" />
      <div className="flex flex-col gap-5 p-5">
        <h2>Last Render: {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</h2>
        <h3>{name}</h3>
        <p>{bio}</p>
        <div>
          {sessions &&
            sessions.map(({ name, id }:any) => (
              <div key={id}>
                <h5 className="">Session: {name}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
