import { WithChildren } from "@/types/commun";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
} & WithChildren;

export default function BaseModal({ isOpen, onClose, title, children }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent background={"churras.white"} color={"churras.black"}>
        <ModalHeader backgroundImage={"url(/assets/imgs/bg_pattern.png)"}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
}
