import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

export function Mark({ $isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>
      {/* <input type="text" placeholder={isNew ? "Novo marcador" : title} />
      {isNew ? <IoMdAdd {...rest} /> : <IoMdClose {...rest} />} */}

      <input type="text" value={value} readOnly={!$isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={$isNew ? "button-add" : "button-delete"}
      >
        {$isNew ? <IoMdAdd /> : <IoMdClose />}
      </button>
    </Container>
  );
}
