import { BsStarFill } from "react-icons/bs";

export default function Rating({ rate, roundMethod = 'round', showRateText = false }) {


    if (!rate) return null;

    let stars = 0;

    switch (roundMethod) {
        case 'round':
            stars = Math.round(rate);
            break;

        case 'ceil':
            stars = Math.ceil(rate);
            break;

        case 'floor':
            stars = Math.floor(rate);
            break;
    }


    return (
        <div className="flex gap-2 items-center">
            {showRateText && <span>{rate}</span>}
            <div className="flex gap-1 text-yellow-400">
                {[...Array(stars)].map((_, i) => <BsStarFill key={i} />)}
            </div>
        </div>
    )
}