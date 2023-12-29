// Kbd is used to display keyboard shortcuts.

const Kbd = (props: any) => {
    const { items = [] } = props;
    return (
        <div>
            {items.map((item: any) => (<kbd className="kbd kbd-lg">{item.text}</kbd>))}
        </div>
        
    );
}

export default Kbd;