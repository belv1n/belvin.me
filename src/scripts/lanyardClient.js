// Credits to ducki, lanyard client class
import WebSocket from 'ws';

const BASE_URL = 'api.lanyard.rest'

class lanyardClient {
  subscribe (user) {
    const socket = new WebSocket(`wss://${BASE_URL}/socket`)

    socket.addEventListener('open', () => {
      socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: user
          }
        })
      )

      setInterval(() => {
        socket.send(
          JSON.stringify({
            op: 3
          })
        )
      }, 30000)
    })

    return socket;
  }

  async get_status (user) {
    const req = await fetch(`https://${BASE_URL}/v1/users/${user}`)

    if (!req.ok) {
      throw new Error(
        `Could not react Lanyard, request returned a ${req.status}: ${req.statusText}`
      )
    }

    return await req.json()
  }
}

export default lanyardClient

