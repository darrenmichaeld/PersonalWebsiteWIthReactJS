export default function TabButton({children, onSelect, isSelected, ...elements}){
    return(
        <li>
            <button className={isSelected ? 'active' : undefined } {...elements}>
                {children}
            </button>
        </li>

    );
}