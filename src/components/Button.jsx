export default function Button({onClick, isSelected}){
    return(
        <button onClick={onClick}>{isSelected ? 'Normal' : 'Faster'}</button>
    )
}