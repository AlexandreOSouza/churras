import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import BaseModal from "../BaseModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateChurrasModal({ isOpen, onClose }: Props) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={"Novo Churras"}>
      <Flex>
        <h1>aeee</h1>
      </Flex>
      <ModalFooter>
        <Button colorScheme="blue" mr={3}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </BaseModal>
  );
}
