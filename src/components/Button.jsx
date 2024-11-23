export default function Button({onClick, Click}){
    return(
        <button onClick={onClick}>{Click ? 'Normal' : 'Faster'}</button>
    )
}