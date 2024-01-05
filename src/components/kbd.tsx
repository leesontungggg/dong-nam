// Kbd is used to display keyboard shortcuts.

const Kbd = (props: any) => {
  const { items = [], className = "" } = props;

  return (
    <div>
      {items.map((item: any) => (
        <kbd className="bg-base-300 text-black kbd kbd-lg">{item}</kbd>
      ))}
    </div>
  );
};

export default Kbd;
