import { useRef } from "react";

const Modal = (props: any) => {
  const { text, title, description, className = "" } = props;
  const modalRef = useRef<any>(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      console.log("modalRef.current", modalRef.current);
      modalRef.current.showModal();
    }
  };
  return (
    <>
      <button
        className={`${className} bg-base-300 text-black btn `}
        onClick={handleOpenModal}
      >
        {text}
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className=" font-bold text-lg text-black">{title}</h3>
          <p className=" py-4 text-black">{description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
