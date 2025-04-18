import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isShowModal, setIsShowModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsShowModal((prev) => !prev)}>
//         Add new cabin
//       </Button>

//       {isShowModal && (
//         <Modal onClose={() => setIsShowModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
