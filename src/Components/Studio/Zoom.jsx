import { Button } from '@mantine/core'
import ZoomVideo from '@zoom/videosdk'

const Zoom = () => {
    const JWT = "K1ZZrWR4ka7kQZ94EMsySfTHexFGgf8h"
    const client = ZoomVideo.createClient()
    client.init('en-US', 'CDN')

    let stream

    const createZoomMeet = () => {
        client.join("Play Stream", JWT, "ayush", "xwza")
        .then(() => {
            stream = client.getMediaStream()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="userDetail">
            <Button onClick={createZoomMeet}>Start A MEET</Button>
        </div>
    )
}
export {Zoom}
