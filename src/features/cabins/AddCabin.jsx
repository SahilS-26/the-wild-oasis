import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsShowModal((prev) => !prev)}>
        Add new cabin
      </Button>

      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
