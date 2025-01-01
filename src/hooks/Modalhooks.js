/****** react library ******/
import { useState } from "react";

const useModalhooks = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

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
    modal4,
    modal5,
    modal6,
    handleModal1Open: () => handleModalOpen(setModal1),
    handleModal1Close: () => handleModalClose(setModal1),
    handleModal2Open: () => handleModalOpen(setModal2),
    handleModal2Close: () => handleModalClose(setModal2),
    handleModal3Open: () => handleModalOpen(setModal3),
    handleModal3Close: () => handleModalClose(setModal3),
    handleModal4Open: () => handleModalOpen(setModal4),
    handleModal4Close: () => handleModalClose(setModal4),
    handleModal5Open: () => handleModalOpen(setModal5),
    handleModal5Close: () => handleModalClose(setModal5),
    handleModal6Open: () => handleModalOpen(setModal6),
    handleModal6Close: () => handleModalClose(setModal6),
  };
};

export default useModalhooks;