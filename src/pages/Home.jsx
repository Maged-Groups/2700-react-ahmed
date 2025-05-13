import { useState, useMemo } from "react"
import HomeContent from "../components/pages/home"
import { useCallback } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    console.log('Home component rendered')
    console.log('nameError', nameError)


    const counterComponent = useMemo(() => {
        console.log('Counter component rendered')
        return (
            <div>
                <h3>Counter</h3>

                <div className="flex justify-center py-5 gap-12">
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                    <span>{counter}</span>
                    <button onClick={() => setCounter(counter - 1)}>-</button>
                </div>
            </div>
        )
    }, [counter])



    const subscribeForm = useMemo(() => {
        console.log('SubscribeForm component rendered')

        const checkName = () => {
            if (name.length > 0 && name.length < 3) {
                setNameError('Name is not accepted, type 3 letters at least');
            } else {
                setNameError('');
            }
        }

        checkName();

        return (
            <div className="m-auto max-w-2xl border p-4">
                <h3>Subscribe now</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tenetur.</p>
                <label className="border w-full flex items-center gap-2 p-3" >
                    Name
                    <input className="flex-1" type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>

                <p className="text-red-500 h-8">{nameError}</p>

                <label className="border w-full flex items-center gap-2 p-3" >
                    Email
                    <input className="flex-1" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <button>Subscribe</button>
                </label>
            </div>
        )
    }, [email, name, nameError]);






    return (
        <>
            {counterComponent}

            {subscribeForm}


            <HomeContent />
        </>
    )
}