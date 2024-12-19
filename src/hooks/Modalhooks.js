/****** react library ******/
import { useState } from "react";

const useModalhooks = () => {
  const [modal1, setModal1] = useState(null);
  const [modal2, setModal2] = useState(null);
  const [modal3, setModal3] = useState(null);

  const handleModalOpen = (setModal) => {
    setModal(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleModalClose = (setModal) => {
    setModal(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return {
    modal1,
    modal2,
    modal3,
    handleModal1Open: () => handleModalOpen(setModal1),
    handleModal1Close: () => handleModalClose(setModal1),
    handleModal2Open: () => handleModalOpen(setModal2),
    handleModal2Close: () => handleModalClose(setModal2),
    handleModal3Open: () => handleModalOpen(setModal3),
    handleModal3Close: () => handleModalClose(setModal3),
  };
};

export default useModalhooks;