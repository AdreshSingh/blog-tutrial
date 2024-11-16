import { useState } from "preact/hooks"

export default function Greeting({ messages }) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages?.length))]

    const [greeting, setGreeting] = useState(messages[0])

    return (
        <div>
            <h3>{greeting}! Thanks for Visiting</h3>
            <button class="bg-sky-700 px-2 py-1 rounded-lg text-slate-100 ring-1 font-semibold hover:bg-sky-600" onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    )
}