import { Link } from "react-router"

export const Button = ({ activeTab, action, text }) => {
    return (
        <button onClick={action} className={` ${style} ${activeTab === text && 'border-b border-b-amber-500'} `}>{text}</button>
    )
}

export const ButtonLink = ({ href, text }) => {
    return (
        <Link className={`${style}`} to={href}>{text}</Link>
    )
}

const style = 'cursor-pointer hover:bg-amber-300 px-4 py-2 bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100 '